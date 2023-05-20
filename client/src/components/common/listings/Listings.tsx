import React from 'react';
import { Box, CircularProgress,Skeleton, useTheme } from '@mui/material';

import GridListings from './gridListings/GridListings';
import ListListings from './listListings/ListListings';
import { Listing, Listings, VIEW_TYPES } from './types';
import withListings from './withListings/WithListings';
import { ListingsProps } from './types';
import { makeStyles } from '@mui/styles';



const ListingsComponent = ({ viewType, isOwner, listings }:ListingsProps) => {

  const classes = useStyles();
  const theme = useTheme();


  // const EnhancedGridListings = withListings(GridListings);
  // const EnhancedListListings = withListings(ListListings);

  return (
    <Box  className={classes.root}>
      {listings?.length==0?(
              <Box display="flex" justifyContent="center" alignItems="center" minHeight={200}>
              <CircularProgress color={'inherit'} />
            </Box>
      ):
       <></>
      }
      
        {viewType === VIEW_TYPES.GRID ? (
          <Box width={800} className={classes.grid_view}>
          {listings?.map((listing, key)=>
          <GridListings listing={listing} isOwner={isOwner} />
          )}
          </Box>
        ) : (
          <Box width={800} className={classes.list_view}>
            {listings?.map((listing, key)=>
          <ListListings listing={listing} isOwner={isOwner} />
             )}
          </Box>
        )}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding:'5vw 5vh',
    alignItems: 'center',
    minHeight: '90vh',
    backgroundColor: theme.palette.primary.light,
  },
  grid_view:{
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    flex:1,
  },

  list_view:{
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    flex:1,
  }

}));

export default ListingsComponent;
