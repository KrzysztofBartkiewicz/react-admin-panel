export const ordersCells = [
  { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
  { id: 'date', numeric: true, disablePadding: false, label: 'Order date' },
  {
    id: 'deliveryDate',
    numeric: true,
    disablePadding: false,
    label: 'Delivery date',
  },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'items', numeric: true, disablePadding: false, label: 'Items' },
  { id: 'firstName', numeric: true, disablePadding: false, label: 'Name' },
  { id: 'lastName', numeric: true, disablePadding: false, label: 'Surname' },
  { id: 'status', numeric: true, disablePadding: false, label: 'Status' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
];

export const itemsCells = [
  { id: 'id', numeric: false, disablePadding: true, label: 'ID' },
  { id: 'name', numeric: true, disablePadding: false, label: 'Name' },
  { id: 'category', numeric: true, disablePadding: false, label: 'Category' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'inCartQuantity', numeric: true, disablePadding: false, label: 'Qty.' },
  { id: 'image', numeric: true, disablePadding: false, label: 'Image' },
];
