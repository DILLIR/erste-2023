import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Container } from '@mui/material';
import Footer from './Footer';

const Layout = () => {
    return (
        <Container maxWidth='sm'>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    );
};

export default Layout;
