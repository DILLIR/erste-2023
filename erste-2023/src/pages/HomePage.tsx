import { Typography, Stack, Box } from '@mui/material';
import { EditIcon } from '../icons';

const HomePage = () => {
    return (
        <Box py={4} px={2} pt={10}>
            <Stack>
                <Typography color='#1D69EC' variant='h6' fontWeight={700} textAlign='center'>
                    Dobrý deň, Vladimir Bebra
                </Typography>
                <Stack direction='row' gap={3} pt={2}>
                    <Stack
                        bgcolor='#135EE2'
                        p={2}
                        color='white'
                        borderRadius={2}
                        direction='row'
                        gap={2}
                    >
                        <EditIcon />
                        <Typography variant='body2'>
                            Pripojte svoju Kaufland Card práve teraz!
                        </Typography>
                    </Stack>
                    <Stack
                        bgcolor='#135EE2'
                        p={2}
                        color='white'
                        borderRadius={2}
                        direction='row'
                        gap={2}
                    >
                        <EditIcon />
                        <Typography variant='body2'>
                            Uľahčite svoje nákupy pridaním karty Fresh!
                        </Typography>
                    </Stack>
                </Stack>
                <Stack pt={4}>
                    <img src='/Section.png' alt='' />
                </Stack>
            </Stack>
        </Box>
    );
};

export default HomePage;
