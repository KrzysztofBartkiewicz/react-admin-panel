import React from 'react';
import Navbar from '../components/Navbar';
import EditBox from '../components/EditBox';
import Modal from '../components/utils/MaterialModal';
import ItemsTable from '../components/tables/MaterialTable';
import CustomPopover from '../components/utils/CustomPopover';
import AlertDialog from '../components/utils/MaterialDialog';
import { useDispatch, useSelector } from 'react-redux';
import { itemsCells } from '../helpers/tableCells';
import { deleteOrders } from '../firebase/firestoreUtils';
import {
  handleModalVisibility,
  setAnchor,
  setCurrentOrderId,
  setImageAddress,
  setSelectedItems,
  handleDialogVisibility,
  removeSelectedOrders,
  setIsOrderEdited,
} from '../redux/actions/';
import {
  getCurrentOrderId,
  getImageAddress,
  getOrders,
  getSelectedItems,
  getSelectedOrders,
  isDialogOpen,
  isModalOpen,
  isOrderEdited,
} from '../redux/selectors';

const NavigationTemplate = ({ children }) => {
  const orders = useSelector(getOrders);
  const currentCustomerId = useSelector(getCurrentOrderId);
  const ordersToDelete = useSelector(getSelectedOrders);
  const imageAddress = useSelector(getImageAddress);

  const dispatch = useDispatch();

  let itemsData = [];
  let title = '';

  if (currentCustomerId) {
    const currentCustomer = orders.find(
      (order) => order.id === currentCustomerId
    );

    itemsData = currentCustomer.items.map(
      ({ id, name, category, price, inCartQuantity, image }) => ({
        id,
        name,
        category,
        price,
        inCartQuantity,
        image,
      })
    );

    title = `${currentCustomer.firstName} ${currentCustomer.lastName} ${currentCustomer.createTime}`;
  }

  const handleImageClick = (event, imageAddress) => {
    event.stopPropagation();
    dispatch(setImageAddress(imageAddress));
    dispatch(setAnchor(event.target.getBoundingClientRect()));
  };

  const handleCloseModal = () => {
    dispatch(handleModalVisibility(false));
    dispatch(setCurrentOrderId(''));
    dispatch(setIsOrderEdited(false));
  };

  const handleDeleteOrders = () => {
    deleteOrders(ordersToDelete);
    dispatch(handleDialogVisibility(false));
    dispatch(removeSelectedOrders());
  };

  return (
    <>
      <Modal isOpen={useSelector(isModalOpen)} onCloseFn={handleCloseModal}>
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
      <Modal isOpen={useSelector(isOrderEdited)} onCloseFn={handleCloseModal}>
        <EditBox />
      </Modal>
      <CustomPopover>
        <img
          style={{ width: '18rem', height: 'auto', display: 'block' }}
          src={imageAddress}
        />
      </CustomPopover>
      <AlertDialog
        isOpen={useSelector(isDialogOpen)}
        onCloseFn={() => dispatch(handleDialogVisibility(false))}
        onAgreeFn={handleDeleteOrders}
        title="Move to recycle bin"
        description="Are you sure you want to continue?"
      />
      <Navbar />
      {children}
    </>
  );
};

export default NavigationTemplate;
