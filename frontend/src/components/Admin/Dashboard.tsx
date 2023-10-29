import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Data from './Data';
import Analytics from './Analytics';
import AnalyticsIcon from '@mui/icons-material/BarChart';
import DataIcon from '@mui/icons-material/Dashboard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
  width: '100vw',
  backgroundColor: '#333',
});

const Sidebar = styled(Box)({
  width: '15%',
  borderRight: '1px solid #ccc',
  padding: '16px',
  '@media (max-width: 768px)': {
    width: '100%',
  },
});

const MainContent = styled(Box)({
  flex: 1,
  marginTop: '10px',
  overflowY: 'scroll',
  padding: '16px',
});

const AdminPanel = () => {
  const [selectedTab, setSelectedTab] = useState('analytics');
  const navigate = useNavigate();

  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; path=/;`;
  }
  const handleLogout = () => {
    deleteCookie('sessionid');
    navigate('/login');
  };

  return (
    <StyledBox>
      {/* Side-Navbar */}
      <Sidebar>
        <Typography variant="h5" color="primary" sx={{ paddingBottom: '16px', borderBottom: '1px solid #ccc' }}>
          Admin Dashboard
        </Typography>
        <List>
          <ListItemButton
            onClick={() => setSelectedTab('analytics')}
            selected={selectedTab === 'analytics'}
          >
            <ListItemIcon><AnalyticsIcon style={{ color: '#fff' }} /></ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItemButton>
          <ListItemButton
            onClick={() => setSelectedTab('data')}
            selected={selectedTab === 'data'}
          >
            <ListItemIcon><DataIcon style={{ color: '#fff' }} /></ListItemIcon>
            <ListItemText primary="Data" />
          </ListItemButton>
        </List>
      </Sidebar>

      <MainContent>
        {/* Top Navbar */}
        <Box sx={{ backgroundColor: '#345', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap:'6px' }}>
            <FaCog sx={{ color: '#333' }} />
            <Typography variant="h6" color="primary" >Admin Panel</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#333' }}>
            <Box sx={{ display: 'flex', alignItems: 'center',gap:'6px', color:'white', marginRight: '16px' }}>
              <FaUser sx={{ marginRight: '8px' }} />
              <Typography variant="h6">Admin</Typography>
            </Box>
            <Button
              onClick={handleLogout}
              variant="contained"
              sx={{ backgroundColor: '#ff5757', color: 'white', padding: '8px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}
            >
              <FaSignOutAlt sx={{ marginRight: '8px', backgroundColor: '#555' }} />
              Logout
            </Button>
          </Box>
        </Box>

        {/* Main Page Content */}
        <Box sx={{ marginTop: '40px', marginLeft: '20px' }}>
          {selectedTab === 'data' && <Data />}
          {selectedTab === 'analytics' && <Analytics />}
        </Box>
      </MainContent>
    </StyledBox>
  );
};

export default AdminPanel;
