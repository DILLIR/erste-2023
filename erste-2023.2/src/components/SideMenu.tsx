import { Link, Drawer, Stack } from '@mui/material';
import CustomizedAccordions from './CustomAccordion';
import React from 'react';

interface SideMenuProps {
    open: boolean;
}

const SideMenu = ({ open }: SideMenuProps) => {
    return (
        <Drawer anchor='right' open={open} sx={{ zIndex: 1 }}>
            <Stack pt={12}>
                <CustomizedAccordions />
                <Stack gap={1} pt={8}>
                    <Link sx={{ textDecoration: 'none', color: '#567394' }}>Kontakty</Link>
                    <Link sx={{ textDecoration: 'none', color: '#567394' }}>
                        Zásady ochrany dat
                    </Link>
                    <Link sx={{ textDecoration: 'none', color: '#567394' }}>Podmínky</Link>
                </Stack>
            </Stack>
        </Drawer>
    );
};

export default SideMenu;
