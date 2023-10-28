import { useState } from 'react';
import { Button, TextField, Typography, Container, Paper, Grid, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/system';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // We will add logic later
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
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <StyledButton
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Login
          </StyledButton>
        </StyledForm>
      </StyledPaper>
    </StyledContainer>
  );
};

export default LoginForm;
