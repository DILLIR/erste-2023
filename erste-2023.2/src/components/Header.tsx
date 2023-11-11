import { AppBar, Typography, IconButton, Stack } from '@mui/material';
import { MenuIcon, LogoIcon, TurnIcon } from '../icons';
import { Link } from 'react-router-dom';
import React from 'react';

interface HeaderProps {
    readonly toogleMenu: () => void;
    readonly isOpenMunu: boolean;
}

const Header = ({ toogleMenu, isOpenMunu }: HeaderProps) => {
    return (
        <AppBar
            position='fixed'
            sx={{ background: '#135EE2', zIndex: 10, px: 2, py: 1 }}
            enableColorOnDark
        >
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Stack
                    direction='row'
                    alignItems='center'
                    p={0.1}
                    pr={2}
                    borderRadius={1}
                    sx={{ cursor: 'pointer' }}
                    bgcolor={isOpenMunu ? 'rgba(0, 0, 0, 0.3)' : ''}
                    onClick={toogleMenu}
                >
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
