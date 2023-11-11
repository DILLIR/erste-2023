import { AppBar, Typography, IconButton, Stack } from '@mui/material';
import { MenuIcon, LogoIcon, TurnIcon } from '../icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <AppBar position='static' sx={{ background: '#135EE2' }} enableColorOnDark>
            <Stack
                direction='row'
                alignItems='center'
                justifyContent='space-between'
                px={3}
                pr={4}
                py={2}
            >
                <Stack direction='row' alignItems='center'>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Typography>Menu</Typography>
                </Stack>
                <Link to='/'>
                    <LogoIcon />
                </Link>
                <Stack>
                    <TurnIcon />
                </Stack>
            </Stack>
        </AppBar>
    );
};

export default Header;
