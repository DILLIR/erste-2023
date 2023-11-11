import { Stack, Typography } from '@mui/material';

interface TransactionItemProps {
    name: string;
    time: string;
    price: string;
}

const TransactionItem = ({ name, price, time }: TransactionItemProps) => {
    return (
        <Stack direction='row' alignItems='center'>
            <img src='/icon.svg' alt='icon' />
            <Stack direction='column' flex='1 1 auto' pl={5}>
                <Typography variant='body1' fontWeight={700}>
                    {name}
                </Typography>
                <Typography>{time}</Typography>
            </Stack>
            <Typography color='#0CB43F'>{price}</Typography>
        </Stack>
    );
};

export default TransactionItem;
