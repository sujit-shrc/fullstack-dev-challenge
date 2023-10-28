import { AppBar, Toolbar, Typography, Button, styled } from '@mui/material';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#333',
  width: '85%',
  position: 'absolute',
  top: '0',
  right: '0',    
  boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const StyledTypography = styled(Typography)({
  flexGrow: 1,
  marginLeft: '26px',
});

const StyledUserInfo = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const StyledLogoutButton = styled(Button)({
  marginLeft: '16px',
  backgroundColor: '#88f'
});

const AdminNavbar: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <StyledTypography variant="h6">Admin Dashboard</StyledTypography>
        <StyledUserInfo>
          <Typography variant="body1" color="inherit" style={{ marginRight: '16px' }}>
            Welcome, Admin
          </Typography>
          <StyledLogoutButton color="inherit">Logout</StyledLogoutButton>
        </StyledUserInfo>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default AdminNavbar;
