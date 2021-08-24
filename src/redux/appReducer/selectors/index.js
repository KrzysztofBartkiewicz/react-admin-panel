export const getAnchor = (state) => state.app.anchor;
export const getOrders = (state) => state.app.orders;
export const getCurrentOrderId = (state) => state.app.currentOrderId;
export const isModalOpen = (state) => state.app.isModalOpen;
export const isDialogOpen = (state) => state.app.isDialogOpen;
export const isOrderEdited = (state) => state.app.isOrderEdited;
export const getImageAddress = (state) => state.app.imageAddress;
export const getSelectedOrders = (state) => state.app.selectedOrders;
export const getSelectedItems = (state) => state.app.selectedItems;
export const getDeletedOrders = (state) => state.app.deletedOrders;
export const getSelectedOrdersToDelete = (state) =>
  state.app.selectedOrdersToDelete;
export const getWeather = (state) => state.app.weather;
export const getCurrentUser = (state) => state.app.currentUser;
export const getAdminUser = (state) => state.app.adminUser;
