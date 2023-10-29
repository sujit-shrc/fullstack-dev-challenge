import { useState, useEffect, FormEvent } from 'react';
import { Button, TextField, Typography, Container, Paper, Grid, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/system';
import {useNavigate} from 'react-router-dom';
import axiosInstance from '../../axios';

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const StyledPaper = styled(Paper)({
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

const StyledIconButton = styled(IconButton)({
  marginRight: 8,
});

const StyledForm = styled('form')({
  width: '100%',
  marginTop: 20,
});

const StyledButton = styled(Button)({
  marginTop: 20,
});

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const getCookie = (name:string) => {
    const cookies = document.cookie.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
  
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
  
    return null;
  };

  useEffect(() => {
    const checkExistingSession = async () => {
      
      const hasSession = getCookie('sessionid');
      if (hasSession) {
        try {
          const response = await axiosInstance.post('/login');
          if (response.status === 200) {
            navigate('/admin');
          }
        } catch (error) {
          navigate('/login')
          console.error('Login error during existing session check:', error);
        }
      }
    };

    checkExistingSession();
  }, [navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/login', {
        email,
        password,
      });
      const token = response.data.token;
      console.log("here is Response: ", response.data)
  
      document.cookie = `sessionid=${token}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
      
      if (response.status === 200 && token !== null) {
        navigate('/admin');
        window.location.reload();
      }
    } catch (error) {
      navigate('/login');
      console.error('Login error:', error);
      setError('Credentials Invalid. Please try again.');
    }
  };

  return (
    <StyledContainer maxWidth="xs">
      <StyledPaper elevation={3}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <StyledIconButton>
              <AccountCircleIcon fontSize="large" />
            </StyledIconButton>
          </Grid>
          <Grid item>
            <Typography variant="h5">Login</Typography>
          </Grid>
        </Grid>
        <StyledForm>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
           <Typography variant="body1" color="error">
           {error}
            </Typography>
          )}
          <StyledButton
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Login
          </StyledButton>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
};

export default LoginForm;
