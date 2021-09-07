import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Tooltip from '@material-ui/core/Tooltip';
import { useToolbarStyles } from './styles';

const EnhancedTableToolbar = ({
  numSelected,
  tableType,
  tableTitle,
  onDeleteFn,
  actionBtn,
  onRestoreFn,
}) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {tableType === 'orders' ? 'All orders' : tableTitle}
        </Typography>
      )}

      {numSelected > 0 ? (
        actionBtn === 'restore' ? (
          <Tooltip title="Restore">
            <IconButton aria-label="restore" onClick={onRestoreFn}>
              <RestoreIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Delete">
            <IconButton aria-label="delete" onClick={onDeleteFn}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

export default EnhancedTableToolbar;
