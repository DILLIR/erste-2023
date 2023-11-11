import { Outlet } from 'react-router-dom';
import Header from './Header';
// import { Container } from '@mui/material';
import Footer from './Footer';
import { useState } from 'react';
import SideMenu from './SideMenu';

const Layout = () => {
    const [showSideMenu, setshowSideMenu] = useState(false);

    const toogleMenu = () => setshowSideMenu(!showSideMenu);

    return (
        <>
            <Header isOpenMunu={showSideMenu} toogleMenu={toogleMenu} />
            <Outlet />
            <SideMenu open={showSideMenu} />
            <Footer />
        </>
    );
};

export default Layout;
