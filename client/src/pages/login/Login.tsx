import React from 'react';
import { Box, Button, Grid, Paper, TextField, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Facebook, Google } from '@mui/icons-material';
import Navbar from '../../components/layout/Navbar';

const useStyles = makeStyles((theme:any) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary[50],
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
    backgroundColor: theme.palette.common.white,
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
    backgroundColor: theme.palette.primary[900],
    color: theme.palette.primary[100],
    '&:hover': {
      backgroundColor: theme.palette.primary[600],
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const LoginPage: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement login logic here
  };

  return (
    <>
      <Navbar />
      <Box className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="h4" gutterBottom>
            Welcome Back!
          </Typography>
          <form className={classes.form} onSubmit={handleLogin}>
            <TextField
              className={classes.input}
              label="Email"
              type="email"
              placeholder="Email"
              required
              variant="outlined"
            />
            <TextField
              className={classes.input}
              label="Password"
              type="password"
              placeholder="Password"
              required
              variant="outlined"
            />
            <Button className={classes.button} type="submit" variant="contained">
              Login
            </Button>
          </form>
          <Typography variant="subtitle1" gutterBottom>
            Or log in with:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                className={classes.button}
                startIcon={<Facebook />}
                variant="outlined"
                fullWidth
              >
                Facebook
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                className={classes.button}
                startIcon={<Google />}
                variant="outlined"
                fullWidth
              >
                Google
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default LoginPage;
