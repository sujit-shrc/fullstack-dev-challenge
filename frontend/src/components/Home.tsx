
import { Button, Container, Typography } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';


const StyledContainer = styled(Container)({
  textAlign: 'center',
  marginTop: '100px',
});

const StyledTitle = styled(Typography)({
  marginBottom: '16px',
});

const StyledButton = styled(Button)({
  marginTop: '32px',
});

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <StyledContainer maxWidth="xs">
      <StyledTitle variant="h4" gutterBottom>
        Hey Welcome
      </StyledTitle>
      <Typography variant="body1" paragraph>
        Please try to login first!!
      </Typography>
      <StyledButton
        variant="contained"
        color="primary"
        size="large"
        startIcon={<LockOpenIcon />}
        onClick={handleLogin}
      >
        Login
      </StyledButton>
    </StyledContainer>
  );
};

export default HomePage;
