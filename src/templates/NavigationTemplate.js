import React from 'react';
import Navbar from '../components/organisms/Navbar';
import Modal from '../components/utils/MaterialModal';
import ItemsTable from '../components/organisms/MaterialTable';
import CustomPopover from '../components/utils/CustomPopover';
import { useDispatch, useSelector } from 'react-redux';
import { itemsCells } from '../helpers/tableCells';
import {
  handleModalVisibility,
  setAnchor,
  setImageAddress,
  setSelectedItems,
} from '../redux/actions/';
import {
  getCurrentCustomerId,
  getImageAddress,
  getOrders,
  getSelectedItems,
  isModalOpen,
} from '../redux/selectors';

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

  const handleImageClick = (event, imageAddress) => {
    event.stopPropagation();
    dispatch(setImageAddress(imageAddress));
    dispatch(setAnchor(event.target.getBoundingClientRect()));
  };

  return (
    <>
      <Modal
        isOpen={useSelector(isModalOpen)}
        onCloseFn={() => dispatch(handleModalVisibility(false))}
      >
        <ItemsTable
          headCells={itemsCells}
          rows={itemsData}
          tableType="items"
          tableTitle={title}
          onImageClickFn={handleImageClick}
          selected={useSelector(getSelectedItems)}
          setSelected={(value) => dispatch(setSelectedItems(value))}
        />
      </Modal>
      <CustomPopover>
        <img
          style={{ width: '18rem', height: 'auto', display: 'block' }}
          src={useSelector(getImageAddress)}
        />
      </CustomPopover>
      <Navbar />
      {children}
    </>
  );
};

export default NavigationTemplate;
