import { To, useNavigate } from "react-router-dom";
import BadgeIcon from '@mui/icons-material/Badge';
import { Box, Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";

import ListItemButton from "@mui/material/ListItemButton";
const drawerWidth = 240;
const SideMenuBar: React.FC = () => {
    const navigate = useNavigate()

    const handlePage = (path: To) => {
        navigate(path);
    }

    const pageItems = [
        { text: "テスト1", icon: <BadgeIcon />, path: '/device-list' }
    ]

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {pageItems.map(({ text, icon, path }, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={() => handlePage(path)}>
                                {icon}
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>

    )
}

export default SideMenuBar;