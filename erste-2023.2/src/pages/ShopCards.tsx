import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import KauflandImg from "../assets/Card.png";
import Layout from "../components/Layout";

export function ShopCards() {
  return (
    <Layout>
      <Stack sx={{ px: "14px", py: "8px", background: "#fff" }} spacing="24px">
        <Breadcrumbs aria-label="breadcrumb" sx={{ py: "10px" }}>
          <Link underline="hover" color="inherit" href="/">
            Prehľad
          </Link>
          <Typography color="text.primary">Obchodné karty </Typography>
        </Breadcrumbs>
        <Stack
          sx={{
            p: "16px",
            boxShadow: " 0px 2px 4px 0px rgba(10, 40, 92, 0.05)",
            borderRadius: "8px",
          }}
        >
          <Stack spacing="24px">
            <Stack spacing="12px">
              <Typography fontSize={28} fontWeight={500}>
                Vaše karty
              </Typography>
              <Typography fontSize="16px" sx={{ color: "#567394" }}>
                Tu sú zľavové, bonusové a sporiace karty, ktoré ste predtým
                prepojili so svojím Erste Digital účtom.
              </Typography>
            </Stack>

            <ShopCardList />
          </Stack>
        </Stack>
        <Stack
          sx={{
            p: "16px",
            boxShadow: " 0px 2px 4px 0px rgba(10, 40, 92, 0.05)",
            borderRadius: "8px",
          }}
        >
          <Stack spacing="24px">
            <Stack spacing="12px">
              <Typography fontSize={28} fontWeight={500}>
                Vyberte obchod
              </Typography>
              <Typography fontSize="16px" sx={{ color: "#567394" }}>
                Pridajte kartu naskenovaním alebo ručným zadaním.
              </Typography>
            </Stack>
            <Stack>
              <Typography
                fontSize={16}
                fontWeight={600}
                sx={{ color: "#0A285C" }}
              >
                Vyberte obchod
              </Typography>
              <TextField select sx={{ mt: "6px" }}>
                <MenuItem>test</MenuItem>
              </TextField>
              <Button
                sx={{
                  background: "#1D69EC",
                  color: "#fff",
                  borderRadius: "8px",
                  mt: "16px",
                }}
              >
                Naskenujte kartu
              </Button>
              <Typography
                textAlign={"center"}
                sx={{ color: "#567394", cursor: "pointer", mt: 2 }}
              >
                alebo vyberte súbor
              </Typography>
            </Stack>
            <Stack>
              <Typography
                fontSize={16}
                fontWeight={600}
                sx={{ color: "#0A285C" }}
              >
               Zadať manuálne
              </Typography>
              <TextField sx={{ mt: "6px" }} placeholder="Čislo karty" />
              <Button
                sx={{
                  background: "#1D69EC",
                  color: "#fff",
                  borderRadius: "8px",
                  mt: "16px",
                }}
              >
               Overiť
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
}

function ShopCardList() {
  return (
    <Stack spacing="16px">
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
    </Stack>
  );
}

function ShopCard() {
  return (
    <Stack direction={"row"} spacing="10px" alignItems={"center"}>
      <Box>
        <img src={KauflandImg} alt="" />
      </Box>
      <Stack>
        <Typography>Kaufland Club Card</Typography>
        <Typography>#8712578125825728</Typography>
      </Stack>
    </Stack>
  );
}
