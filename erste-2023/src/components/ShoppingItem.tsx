import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ShoppingItemProps {
    readonly img: React.ReactNode;
    readonly name: string;
    readonly path: string;
}

const ShoppingItem = ({ img, name, path }: ShoppingItemProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(path);
    };

    return (
        <Stack direction='row' alignItems='center' gap={1} onClick={handleClick}>
            {img}
            <Typography>{name}</Typography>
        </Stack>
    );
};

export default ShoppingItem;
