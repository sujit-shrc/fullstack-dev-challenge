import { Outlet } from 'react-router-dom';
import { Container, styled } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const StyledContainer = styled(Container)({
  marginLeft: '10px',
  marginTop: '0px',
  padding: '10px',
  width: '100%',
});

const FullWidthNavbar = styled(Navbar)({
  width: '100%',
});

const AdminDashboard: React.FC = () => {
  return (
    <>
      <FullWidthNavbar />
      <Sidebar />
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </>
  );
};

export default AdminDashboard;
