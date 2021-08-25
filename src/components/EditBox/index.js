import React, { useState } from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import AlertDialog from '../utils/MaterialDialog';
import { StyledEditBox, useStyles } from './StyledEditBox';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOrderEdited } from '../../redux/appReducer/actions';
import { getCurrentOrderId, getOrders } from '../../redux/appReducer/selectors';
import { updateOrder } from '../../firebase/firestoreUtils';
import moment from 'moment';

const EditBox = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const orderId = useSelector(getCurrentOrderId);
  const orders = useSelector(getOrders);
  const editedOrder = orders.find((order) => order.id === orderId);

  const [selectedDate, setSelectedDate] = useState(
    editedOrder ? editedOrder.deliveryDate : moment().format('DD-MM-YYYY')
  );
  const [status, setStatus] = useState(editedOrder ? editedOrder.status : '');
  const [price, setPrice] = useState(editedOrder ? editedOrder.price : '');
  const [isWarningVisible, setIsWarningVisible] = useState(false);

  const handleClose = () => {
    dispatch(setIsOrderEdited(false));
  };

  const handleDateChange = (date) => {
    const formattedDate = moment(date).format('DD-MM-YYYY');
    setSelectedDate(formattedDate);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsWarningVisible(true);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleWarningClose = () => {
    setIsWarningVisible(false);
  };

  const handleChangeValues = () => {
    updateOrder(orderId, price, selectedDate, status);
    setIsWarningVisible(false);
    handleClose();
  };

  return (
    <>
      <AlertDialog
        isOpen={isWarningVisible}
        onCloseFn={handleWarningClose}
        onAgreeFn={handleChangeValues}
        title="Update values"
        description="Are you sure you want to continue?"
      />
      <StyledEditBox onSubmit={handleSubmit}>
        <div className={classes.inputsWrapper}>
          <TextField
            id="standard-basic"
            label="Price"
            value={price}
            onChange={handlePriceChange}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Delivery date"
              value={moment(selectedDate, 'DD-MM-YYYY').toDate()}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              onChange={handleStatusChange}
            >
              <MenuItem value={'COMPLETED'}>COMPLETED</MenuItem>
              <MenuItem value={'APPROVED'}>APPROVED</MenuItem>
              <MenuItem value={'PENDING'}>PENDING</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={classes.buttonsWrapper}>
          <Button
            className={classes.discardBtn}
            variant="contained"
            color="secondary"
            onClick={handleClose}
          >
            Discard
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </div>
      </StyledEditBox>
    </>
  );
};

export default EditBox;
