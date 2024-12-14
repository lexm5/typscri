
import { useLocation } from 'react-router-dom';

import DeviceList from '../DeviceList/DeviceList';
import ErrorPage from '../Error/ErrorPage';
import HomePage from '../Home/HomePage';
import SideMenu from '../SideMenu/SideMenuBar';
import { AppBar, Box, Toolbar } from '@mui/material';

export default function Main() {
    const currentPath = useLocation().pathname;
    const componentList = [
        { path: '/', compoment: <HomePage /> },
        { path: '/device-list', compoment: <DeviceList /> },
    ];

    const getChildren = () => {
        const target = componentList.find(({ path }) => currentPath === path);
        return target !== undefined ? target.compoment : <ErrorPage />;
    };

    return (
        <div className="App">
            <Box sx={{ display: 'flex' }}>
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>実践</Toolbar>
                </AppBar>

                {/* サイドメニューをAppBarと連動させる */}
                <SideMenu />

                {/* メインコンテンツ */}
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar /> {/* AppBar の高さ分のスペースを確保 */}
                    {getChildren()}
                </Box>
            </Box>
        </div>
    );
}
