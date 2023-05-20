import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, useTheme,  } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ListingsProps } from '../types';

const useStyles = makeStyles((theme) => ({
  card: {
    width:'30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height:'40vh',
    backgroundColor: `${theme.palette.primary.dark} !important`

  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '5vh',
  },
  description: {
    marginBottom: '0.3vh',
  },
  price: {
    fontWeight: 'bold',
    marginBottom: '0.5vh',
  },
  category: {
    marginBottom: '0.5vh',
  },
}));

const ListItem = ({ listing, isOwner, onEditListing, onDeleteListing }:ListingsProps) => {
  const theme = useTheme()
  const classes = useStyles();
  console.log(classes)


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
      </CardContent>
    </Card>
  );
};

ListItem.propTypes = {
  listing: PropTypes.object.isRequired,
};

export default ListItem;
