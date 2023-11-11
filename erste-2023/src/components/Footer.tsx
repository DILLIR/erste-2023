import { Box, Stack, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{ background: '#2870ED' }}
            display='flex'
            justifyContent='space-between'
            alignItems='flex-end'
            p={2}
        >
            <img src='Union.svg' alt='' style={{ width: '80px' }} />
            <Stack direction='row' gap={1}>
                <Link sx={{ color: '#fff' }} fontSize='12px'>
                    Kontakty
                </Link>
                <Link sx={{ color: '#fff' }} fontSize='12px'>
                    Zásady ochrany dát
                </Link>
                <Link sx={{ color: '#fff' }} fontSize='12px'>
                    Podmienky
                </Link>
            </Stack>
        </Box>
    );
};

export default Footer;
