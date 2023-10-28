import { Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/BarChart';
import DataIcon from '@mui/icons-material/Dashboard';
import { styled } from '@mui/material';

const StyledListItem = styled(ListItem)({
    borderBottom: '1px solid #666',
  });

const AdminSidebar: React.FC = () => {
  const location = useLocation();

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
          <ListItemButton component={Link} to="/admin/analytics" selected={location.pathname === '/admin/analytics'}>
            <ListItemText primary="Analytics" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DataIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemButton component={Link} to="/admin/data" selected={location.pathname === '/admin/data'}>
            <ListItemText primary="Data" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AdminSidebar;
