import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { DefaultTheme, makeStyles, useTheme } from '@mui/styles';
import { ListingsProps } from '../types';

const useStyles:any = makeStyles((theme:DefaultTheme) => ({
  card: {
    marginBottom: '1vh',
    backgroundColor: `${theme.palette.primary.dark} !important`
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '0.5vh',
  },
  description: {
    marginBottom: '0.3vh',
  },
  price: {
    fontWeight: 'bold',
    marginBottom: '0.3vh',
  },
  category: {
    marginBottom: '0.3vh',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  editButton: {
    marginBottom: '0.3vh',
  },
}));

const ListingItem = ({ listing, isOwner, onEditListing, onDeleteListing }:ListingsProps) => {
  const theme = useTheme();
  const classes = useStyles();

  // const handleEditClick = () => {
  //   onEditListing(listing.id);
  // };

  // const handleDeleteClick = () => {
  //   onDeleteListing(listing.id);
  // };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="h6" className={classes.title}>
          {listing.title}
        </Typography>
        <Typography variant="body2" className={classes.description}>
          {listing.description}
        </Typography>
        <Typography variant="body1" className={classes.price}>
          Price: ${listing.price}
        </Typography>
        <Typography variant="body2" className={classes.category}>
          Category: {listing.category}
        </Typography>
        {/* {isOwner && (
          <div className={classes.buttonContainer}>
            <Button onClick={handleEditClick} color="primary" className={classes.editButton}>
              Edit
            </Button>
            <Button onClick={handleDeleteClick} color="secondary">
              Delete
            </Button>
          </div>
        )} */}
      </CardContent>
    </Card>
  );
};

ListingItem.propTypes = {
  listing: PropTypes.object.isRequired,
  isOwner: PropTypes.bool,
  onEditListing: PropTypes.func,
  onDeleteListing: PropTypes.func,
};

export default ListingItem;
