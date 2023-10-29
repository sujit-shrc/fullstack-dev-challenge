import { Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/BarChart';
import DataIcon from '@mui/icons-material/Dashboard';
import { styled } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const StyledListItem = styled(ListItem)({
  borderBottom: '1px solid #666',
});

const AdminSidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(`/admin/${path}`);
  };

  return (
    <Drawer variant="permanent" anchor="left" sx={{ '& .MuiDrawer-paper': { width: '220px', backgroundColor: '#444', color: '#fff' } }}>
      <List>
        <StyledListItem>
          <ListItem>
            <ListItemIcon>
              <HomeIcon style={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </StyledListItem>
        <ListItem>
          <ListItemIcon>
            <AnalyticsIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemButton onClick={() => handleNavigate('analytics')} selected={location.pathname === '/admin/analytics'}>
            <ListItemText primary="Analytics" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DataIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemButton onClick={() => handleNavigate('data')} selected={location.pathname === '/admin/data'}>
            <ListItemText primary="Data" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AdminSidebar;
