import React from 'react';
import Navbar from '../components/organisms/Navbar';
import Modal from '../components/utils/MaterialModal';
import MaterialTable from '../components/organisms/MaterialTable';
import CustomPopover from '../components/utils/CustomPopover';
import { useDispatch, useSelector } from 'react-redux';
import { handleModalVisibility, setAnchor } from '../redux/actions/';
import {
  getCurrentCustomerId,
  getOrders,
  isModalOpen,
} from '../redux/selectors';

const itemsCells = [
  { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
  { id: 'name', numeric: true, disablePadding: false, label: 'Name' },
  { id: 'category', numeric: true, disablePadding: false, label: 'Category' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'image', numeric: true, disablePadding: false, label: 'Image' },
];

const NavigationTemplate = ({ children }) => {
  const orders = useSelector(getOrders);
  const currentCustomerId = useSelector(getCurrentCustomerId);

  const dispatch = useDispatch();

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

  const handleImageClick = (event) => {
    dispatch(setAnchor(event.target.getBoundingClientRect()));
    console.dir(event.target.getBoundingClientRect());
  };

  return (
    <>
      <Modal
        isOpen={useSelector(isModalOpen)}
        onCloseFn={() => dispatch(handleModalVisibility(false))}
      >
        <MaterialTable
          headCells={itemsCells}
          data={itemsData}
          tableType="items"
          tableTitle={title}
          onImageClickFn={handleImageClick}
        />
      </Modal>
      <CustomPopover />
      <Navbar />
      {children}
    </>
  );
};

export default NavigationTemplate;
