import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Navbar from '../../components/layout/Navbar';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh',
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    '& h1': {
      fontWeight: 700,
      fontSize: '3rem',
      margin: '0',
      lineHeight: '1.2',
    },
    '& h2': {
      fontWeight: 400,
      fontSize: '1.5rem',
      margin: '1rem 0',
      lineHeight: '1.4',
    },
  },
  button: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    padding: '1rem 2rem',
    borderRadius: '2rem',
    fontSize: '1.25rem',
    fontWeight: 700,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  illustration: {
    width: '100%',
    maxWidth: '600px',
    marginBottom: theme.spacing(2),
    animation: '$floating 5s ease-in-out infinite',
  },
  '@keyframes floating': {
    '0%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(20px)',
    },
    '100%': {
      transform: 'translateY(0px)',
    },
  },
}));

const LandingPage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate()

  return (
   <>
   <Navbar/>
   <Box className={classes.root}>
      <Box className={classes.content}>
        <img
          src="/illustration.svg"
          alt="Peer-to-Peer Renting"
          className={classes.illustration}
        />
        <Typography variant="h1">Find Anything You Need for Less</Typography>
        <Typography variant="h2">
          Rent from trusted locals and save money while reducing waste
        </Typography>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          size="large"
          onClick={()=>navigate('/register')}
        >
          Join the Community
        </Button>
      </Box>
    </Box>
   </>
  );
};

export default LandingPage;
