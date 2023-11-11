import { Button, Stack } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useZxing } from 'react-zxing';

export const BarcodeScanner = () => {
    const [result, setResult] = useState('');
    const { ref } = useZxing({
        onDecodeResult(result) {
            setResult(result.getText());
        },
    });

    const navigator = useNavigate();

    return (
        <>
          <Stack sx={{ position: "relative", width: "100%", height: "100%" }}>
            {/* Video taking 100% of the screen */}
            <video
              style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
              ref={ref}
            />
    
            {/* Overlay Stack */}
            <Stack
              sx={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "328px",
                height: "213px",
                borderRadius: "20px",
                border: "2px dashed #FFF",
                backgroundColor: "rgba(217, 217, 217, 0)", // Transparent color
              }}
            >
              {/* Content for the Stack */}
            </Stack>
    
            {/* Overlay Text */}
            <p
              style={{
                position: "absolute",
                top: "10%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "28px",
                width: "353px"
              }}
            >
              <span>Rozložte svoju kartu na stranu, kde je čiarový kód. Umiestnite kartu tak, aby bola v ráme.</span>
            </p>
            <Button
                onClick={() => { navigator(`/shop-cards:${result}`) }}
                disabled={result === '' ? true : false}
                style={{
                    background: "var(--george-csas-cz-1425-x-714-default-fun-green, #FF6130)",
                    borderRadius: "8px",
                    position: "absolute",
                    top: "90%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: '354px',
                    padding: '10px 8px',
                    gap: '8px',
                    color: 'var(--george-csas-cz-1425-x-714-default-catskill-white, #F4F6FA)',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '24px'
                }}>
                    Naskenovať
            </Button>
          </Stack>
        </>
      );
};
