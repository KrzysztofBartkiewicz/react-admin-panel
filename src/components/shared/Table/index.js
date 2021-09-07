import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import EnhancedTableToolbar from './Toolbar';
import EnhancedTableHead from './Head';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { stableSort, getComparator } from './utils';
import { useStyles } from './styles';

const MaterialTable = ({
  rows,
  headCells,
  tableType,
  tableTitle,
  onImageClickFn,
  selected,
  setSelected,
  onDeleteFn,
  actionBtn,
  onRestoreFn,
  onShowItemsFn,
  onEditFn,
}) => {
  const EnhancedTable = () => {
    const classes = useStyles();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(true);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelecteds = rows.map((row) => row.id);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };

    const handleClick = (event, id) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }

      setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    // const handleChangeDense = (event) => {
    //   setDense(event.target.checked);
    // };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar
            tableType={tableType}
            tableTitle={tableTitle}
            numSelected={selected.length}
            onDeleteFn={onDeleteFn}
            actionBtn={actionBtn}
            onRestoreFn={onRestoreFn}
          />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
                headCells={headCells}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </TableCell>

                        {tableType === 'orders' ? (
                          <>
                            {Object.values(row).map((value, index) => {
                              if (index === 0) {
                                return (
                                  <Tooltip key={index} title={value}>
                                    <TableCell
                                      component="th"
                                      id={labelId}
                                      scope="row"
                                      padding="none"
                                    >
                                      ...
                                    </TableCell>
                                  </Tooltip>
                                );
                              }
                              if (index === 4) {
                                return (
                                  <TableCell key={index} align="right">
                                    <IconButton
                                      aria-label="show-items"
                                      onClick={(event) =>
                                        onShowItemsFn(event, row.id)
                                      }
                                    >
                                      <VisibilityIcon />
                                    </IconButton>
                                    {value}
                                  </TableCell>
                                );
                              }
                              return (
                                <TableCell key={index} align="right">
                                  {value}
                                </TableCell>
                              );
                            })}
                            <TableCell>
                              <IconButton
                                aria-label="edit-order"
                                onClick={(event) => onEditFn(event, row.id)}
                              >
                                <EditIcon />
                              </IconButton>
                            </TableCell>
                          </>
                        ) : tableType === 'items' ? (
                          <>
                            {Object.values(row).map((value, index) => {
                              if (index === 0) {
                                return (
                                  <Tooltip key={index} title={value}>
                                    <TableCell
                                      component="th"
                                      id={labelId}
                                      scope="row"
                                      padding="none"
                                    >
                                      ...
                                    </TableCell>
                                  </Tooltip>
                                );
                              }
                              if (index === Object.values(row).length - 1) {
                                return (
                                  <TableCell
                                    onClick={(event) =>
                                      onImageClickFn(event, row.image)
                                    }
                                    key={index}
                                    align="right"
                                    style={{ cursor: 'pointer' }}
                                  >
                                    Show
                                  </TableCell>
                                );
                              }
                              return (
                                <TableCell key={index} align="right">
                                  {value}
                                </TableCell>
                              );
                            })}
                          </>
                        ) : tableType === 'deleted' ? (
                          <>
                            {Object.values(row).map((value, index) => {
                              if (index === 0) {
                                return (
                                  <Tooltip key={index} title={value}>
                                    <TableCell
                                      component="th"
                                      id={labelId}
                                      scope="row"
                                      padding="none"
                                    >
                                      ...
                                    </TableCell>
                                  </Tooltip>
                                );
                              }
                              return (
                                <TableCell key={index} align="right">
                                  {value}
                                </TableCell>
                              );
                            })}
                          </>
                        ) : null}
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        {/* <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Dense padding"
        /> */}
      </div>
    );
  };
  return <EnhancedTable />;
};

export default MaterialTable;
