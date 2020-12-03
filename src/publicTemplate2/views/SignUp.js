import React, { useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// functions user register
import User from '../../apis/User';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState([]);

  function register(event) {
    event.preventDefault();
    
    User.register({name,email,password,password_confirmation}).then(()=>{
      props.history.push('/login');
    }).catch(error => {
        if (error.response.status === 422) {
            setErrors(error.response.data.errors);
        }
    });
  }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
        </Typography>
          <form className={classes.form} noValidate onSubmit={(event) => register(event)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="Name"
                  variant="outlined"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                  onChange={(event)=>setName(event.target.value)}
                />
              </Grid>
              {errors.name != null ? 
                <Grid item xs={12}>
                  <span className="text-danger" >
                    {errors.name[0]}
                  </span>
                </Grid>
                : 
                null
              }
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event)=>setEamil(event.target.value)}
                />
              </Grid>
              {errors.email != null ? 
                <Grid item xs={12}>
                  <span className="text-danger" >
                    {errors.email[0]}
                  </span>
                </Grid>
                : 
                null
              }
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(event)=>setPassword(event.target.value)}
                />
              </Grid>
              {errors.password != null ? 
                <Grid item xs={12}>
                  <span className="text-danger" >
                    {errors.password[0]}
                  </span>
                </Grid>
                : 
                null
              }
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="Confirm Password"
                  type="password"
                  id="passwordConfirm"
                  onChange={(event)=>setPasswordConfirm(event.target.value)}
                />
              </Grid>
              {errors.password_confirmation != null ? 
                <Grid item xs={12}>
                  <span className="text-danger" >
                    {errors.password_confirmation[0]}
                  </span>
                </Grid>
                : 
                null
              }
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      <br></br>
      <br></br>
    </div>
  );
}