import { Box, Stack, Link } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box
            sx={{ background: '#2870ED' }}
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            p={2}
        >
            <img src='footer_logo.svg' alt='' style={{ width: '150px' }} />
            <Stack direction='row' gap={2}>
                <Link sx={{ color: '#fff' }} fontSize='16px'>
                    Kontakty
                </Link>
                <Link sx={{ color: '#fff' }} fontSize='16px'>
                    Zásady ochrany dát
                </Link>
                <Link sx={{ color: '#fff' }} fontSize='16px'>
                    Podmienky
                </Link>
            </Stack>
        </Box>
    );
};

export default Footer;
