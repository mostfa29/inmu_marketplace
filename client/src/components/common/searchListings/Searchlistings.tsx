import React, { useState } from 'react';
import { TextField, FormControl, Select, MenuItem, Box, Tooltip, IconButton } from '@mui/material';
import { VIEW_TYPES } from '../listings/types';
import { makeStyles } from '@mui/styles';
import GridOnIcon from '@mui/icons-material/GridOn';
import ViewListIcon from '@mui/icons-material/ViewList';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2vh 2vw',
    backgroundColor: theme.palette.primary[800],
  },
  search: {
    width: '80%',
  },
}));

const SearchListings = ({ onViewTypeChange }: any) => {
  const [viewType, setViewType] = useState(VIEW_TYPES.GRID);
  const [searchText, setSearchText] = useState('');
  const classes = useStyles();

  const handleViewTypeChange = (newViewType: VIEW_TYPES) => {
    setViewType(newViewType);
    onViewTypeChange(newViewType); // Notify parent component of the viewType change
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
    // Perform search logic or update search state in the parent component
  };

  return (
    <Box className={classes.container}>
      <TextField
        className={classes.search}
        label="Search"
        value={searchText}
        onChange={handleSearchChange}
        variant="outlined"
      />
      <Tooltip title="Grid View" placement="top">
        <IconButton onClick={() => handleViewTypeChange(VIEW_TYPES.GRID)} color="inherit">
          <GridOnIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="List View" placement="top">
        <IconButton onClick={() => handleViewTypeChange(VIEW_TYPES.LIST)} color="inherit">
          <ViewListIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SearchListings;
