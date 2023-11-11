import Header from './Header';
import { Container } from '@mui/material';
import Footer from './Footer';
import { useState } from 'react';
import SideMenu from './SideMenu';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [showSideMenu, setshowSideMenu] = useState(false);
    const toogleMenu = () => setshowSideMenu(!showSideMenu);

    return (
        <Container maxWidth='sm'>
            <Header isOpenMunu={showSideMenu} toogleMenu={toogleMenu} />
            {children}
            <SideMenu open={showSideMenu} />
            <Footer />
        </Container>
    );
};

export default Layout;
