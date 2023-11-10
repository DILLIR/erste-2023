import { AppBar, Typography, IconButton, Stack } from '@mui/material';
import { MenuIcon, LogoIcon, TurnIcon } from '../icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position='static' color='primary' enableColorOnDark>
            <Stack direction='row'>
                <Stack>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Typography>Menu</Typography>
                </Stack>
                <Link to='/'>
                    <LogoIcon />
                </Link>
            </Stack>
        </AppBar>
    );
};

export default Header;
