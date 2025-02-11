import { useDispatch, useSelector } from 'react-redux';

import { Link as RouterLink } from 'react-router-dom';
import { Link, Button, Grid, Typography, TextField, Alert } from '@mui/material';
import { Google, Password } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks';
import { useMemo } from 'react';


const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm(formData);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onGoogleSignIn = () => {
        console.log('onGoogleSignIn');
        dispatch(startGoogleSignIn());
    }

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startLoginWithEmailPassword({ email, password }));
    }


    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder='correo@google.com'
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder='Password'
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        ></TextField>
                    </Grid>
                    <Grid container display={!!errorMessage ? '' : 'none'} sx={{ mt: 1 }}>
                        <Grid
                            item
                            xs={12}
                        >
                            <Alert severity="error">
                                {errorMessage}
                            </Alert>
                        </Grid>
                    </Grid>
                    <Grid>

                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12} sm={6}>
                            <Button disabled={isAuthenticating} type="submit" variant='contained' fullWidth>
                                Login
                            </Button>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button disabled={isAuthenticating} variant='contained' fullWidth onClick={onGoogleSignIn}>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>

                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                        <Link component={RouterLink} color='inherit' to='/auth/register'>Create an account</Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>

    )
}
