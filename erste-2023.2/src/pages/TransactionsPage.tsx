import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import Layout from '../components/Layout';
import TransactionItem from '../components/TransactionItem';

const TransactionsPage = () => {
    return (
        <Layout>
            <Stack sx={{ px: '14px', pb: '8px', pt: '70px', background: '#fff' }} spacing='24px'>
                <Breadcrumbs aria-label='breadcrumb' sx={{ py: '10px' }}>
                    <Link underline='hover' color='inherit' href='/'>
                        Prehľad
                    </Link>
                    <Typography color='text.primary'>Transakcie</Typography>
                </Breadcrumbs>
                <Stack
                    sx={{
                        p: '16px',
                        boxShadow: ' 0px 2px 4px 0px rgba(10, 40, 92, 0.05)',
                        borderRadius: '8px',
                    }}
                >
                    <Stack spacing='24px'>
                        <Stack spacing='12px'>
                            <Typography fontSize={28} fontWeight={500}>
                                Transakcie
                            </Typography>
                            <Typography fontSize='16px' sx={{ color: '#567394' }}>
                                11. November 2023
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack pt={2} spacing={1}>
                        <TransactionItem
                            name='Kaufland Moldavska, Kosice'
                            time='21:09'
                            price='1.34 €'
                        />
                        <TransactionItem
                            name='Tesco Popradska, Kosice'
                            price='0.33 €'
                            time='14:43'
                        />
                    </Stack>
                    <Typography fontSize='16px' pt={2} sx={{ color: '#567394' }}>
                        9. November 2023
                    </Typography>
                    <Stack pt={2} spacing={1}>
                        <TransactionItem name='Tesco, Presov' time='11:52' price='0.65 € ' />
                    </Stack>
                    <Typography fontSize='16px' pt={2} sx={{ color: '#567394' }}>
                        6. November 2023
                    </Typography>
                    <Stack pt={2} spacing={1}>
                        <TransactionItem name='BILLA, Bardejov' time='23:11' price='0.14 €' />
                        <TransactionItem
                            name='Fresh Express, Bardejov'
                            time='22:32'
                            price='0.79 € '
                        />
                        <TransactionItem name='BILLA, Bardejov' time='18:50' price='0.22 €' />
                        <TransactionItem name='Tesco Okruzna, Presov' time='7:26' price='1.41 € ' />
                    </Stack>
                </Stack>
            </Stack>
        </Layout>
    );
};

export default TransactionsPage;
