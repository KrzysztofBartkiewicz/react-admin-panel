import React from 'react';
import Navbar from '../components/organisms/Navbar';
import Modal from '../components/utils/MaterialModal';
import MaterialTable from '../components/organisms/MaterialTable';
import { handleItemsModalVisibility } from '../redux/actions/';
import { connect } from 'react-redux';

const itemsCells = [
  { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
  { id: 'name', numeric: true, disablePadding: false, label: 'Name' },
  { id: 'category', numeric: true, disablePadding: false, label: 'Category' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'image', numeric: true, disablePadding: false, label: 'Image' },
];

const NavigationTemplate = ({
  children,
  orders,
  handleItemsModalVisibility,
  currentCustomerId,
}) => {
  let itemsData = [];
  let title = '';

  if (currentCustomerId) {
    const currentCustomer = orders.find(
      (order) => order.id === currentCustomerId
    );

    itemsData = currentCustomer.items.map((item) => ({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      image: item.image,
    }));

    title = `${currentCustomer.firstName} ${currentCustomer.lastName} ${currentCustomer.createTime}`;
  }

  return (
    <>
      <Modal isOpen={currentCustomerId} onCloseFn={handleItemsModalVisibility}>
        <MaterialTable
          headCells={itemsCells}
          data={itemsData}
          tableType="items"
          tableTitle={title}
        />
      </Modal>
      <Navbar />
      {children}
    </>
  );
};

const mapStateToProps = (state) => ({
  orders: state.ordersReducer.orders,
  currentCustomerId: state.appReducer.app.currentCustomerId,
});

const mapDispatchToProps = (dispatch) => ({
  handleItemsModalVisibility: (value) =>
    dispatch(handleItemsModalVisibility(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationTemplate);
