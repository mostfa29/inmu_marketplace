import React from 'react';
import { Box, Button, Grid, Paper, TextField, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Facebook, Google } from '@mui/icons-material';
import Navbar from '../../components/layout/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '40vw',
      height: '30vw'
    },
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
      height: 'auto',
      padding: theme.spacing(2),
    },
    backgroundColor: theme.palette.primary[600],
    boxShadow: `0px 4px 20px ${theme.palette.secondary[200]}`,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  input: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    width: '100%',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const RegisterPage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme()

  return (
    <>
    <Navbar/>
    <Box className={classes.root} sx={{backgroundColor:theme.palette.primary[0]}}>
     
     <Paper className={classes.paper} sx={{backgroundColor:theme.palette.primary[600]}}>
       <Typography sx={{color:theme.palette.grey[100]}} variant="h4">Sign Up</Typography>
       <form className={classes.form}>
       <TextField
  className={classes.input}
  label="Email"
  type="email"
  placeholder="Email"
  sx={{color:theme.palette.primary[100],backgroundColor:theme.palette.primary[900]}}
/>
<TextField
  className={classes.input}
  label="Password"
  type="password"
  placeholder="Password"
  sx={{color:theme.palette.primary[100],backgroundColor:theme.palette.primary[900]}}
/>
         <Button className={classes.button} sx={{color:theme.palette.primary[900],backgroundColor:theme.palette.primary[100]}} variant="contained" color="primary">
           Register
         </Button>
       </form>
       <Typography sx={{color:theme.palette.grey[300]}} variant="subtitle1">Or sign up with:</Typography>
       <Grid container spacing={2}>
         <Grid item xs={12} sm={6}>
           <Button className={classes.button} sx={{color:theme.palette.primary[900],backgroundColor:theme.palette.primary[100]}} variant="outlined" >
             <Facebook className={classes.icon} />
             Facebook
           </Button>
         </Grid>
         <Grid item xs={12} sm={6}>
           <Button className={classes.button}  sx={{color:theme.palette.primary[900],backgroundColor:theme.palette.primary[100]}} variant="outlined" >
             <Google className={classes.icon} />
             Google
           </Button>
         </Grid>
       </Grid>
     </Paper>
   </Box>
    </>

  );
};

export default RegisterPage;
