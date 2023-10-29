import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Dashboard from "./components/Admin/Dashboard";
import { styled } from '@mui/system';
import { Button, Typography, Container } from '@mui/material';
import axiosInstance from './axios';

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
  background: '#00796b',
});

const StyledContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  textAlign: 'center',
});

const StyledTitle = styled(Typography)({
  color: '#ffffff',
  fontSize: '2rem',
});

const StyledButton = styled(Button)({
  background: '#4caf50', 
  padding: '8px 16px', 
  borderRadius: '4px', 
  textDecoration: 'none',
});

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const cookie = document.cookie;
      const sessionCookie = cookie.split(';').find((cookie) => cookie.trim().startsWith('sessionid='));
      const sessionid = sessionCookie ? sessionCookie.split('=')[1] : null;
      if (!sessionid) {
        navigate('/login');
      } else {
        try {
          const response = await axiosInstance.post('/login');
          if (response.status === 200) {
            setIsAuthenticated(true);
            setHasSession(true);
            navigate('/admin');
          }
        } catch (error) {
          setIsAuthenticated(false);
        }
      }
    };

    checkAuthentication();
  }, [hasSession, navigate]);

  return isAuthenticated ? (
    <Dashboard />
  ) : (
    <StyledContainer>
      <StyledContent>
        <StyledTitle variant="h4">
          You are Not Authorized
        </StyledTitle>
        <StyledButton
          variant="contained"
          component={Link}
          to="/login"
        >
          Login
        </StyledButton>
      </StyledContent>
    </StyledContainer>
  );
};

export default ProtectedRoute;
