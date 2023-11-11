import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Alert,
  Box,
  Breadcrumbs,
  Button,
  Link,
  MenuItem,
  Snackbar,
  Stack,
  Tab,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import KauflandImg from "../assets/Card.png";
import BillaImg from "../assets/billa.png";
import FreshImg from "../assets/fresh.png";
import LidlImg from "../assets/lidl.png";
import Layout from "../components/Layout";
import { useShop } from "../hooks/ShopSlice";

export function ShopCards() {
  const [value, setValue] = React.useState("1");
  const [cards, setCards] = React.useState<Card[]>();

  const { cardNumber } = useParams();

  const [refeatch, setRefeatch] = React.useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarType, setSnackbarType] = React.useState<"success" | "error">(
    "success"
  );
  const [snackBarMessage, setSnackBarMessage] = React.useState("");

  const navigator = useNavigate();

  React.useEffect(() => {
    fetch(
      "https://ed-hackathon.nurxie.org/api/providers-available?card=123"
    )
      .then((response) => response.json())
      .then((data) => {
        setCards(data.result);
        setRefeatch(false);
      });
  }, [refeatch]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(event);
  };

  const shops = useShop();

  const [form, setForm] = React.useState({
    provider_id: cardNumber ? localStorage.getItem("shop") : '',
    card: "123",
    provider_card_number: cardNumber ?? "",
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = () => {
    fetch("https://ed-hackathon.nurxie.org/api/add-provider", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      if (response.ok) {
        setOpenSnackbar(true);
        setSnackbarType("success");
        setRefeatch(true);
        setSnackBarMessage("Karta bola úspešne pridaná");
        localStorage.removeItem("shop");
      } else {
        setOpenSnackbar(true);
        setSnackbarType("error");
        setSnackBarMessage("Karta nebola pridaná");
        localStorage.removeItem("shop");
      }
    });
  };

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Layout>
      <Snackbar
        autoHideDuration={2000}
        open={openSnackbar}
        onClose={handleClose}
      >
        <Alert severity={snackbarType}>{snackBarMessage}</Alert>
      </Snackbar>
      <Stack
        sx={{ px: "14px", pb: "8px", pt: "70px", background: "#fff" }}
        spacing="24px"
      >
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

            <ShopCardList cards={cards} />
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
                Pridať novú kartu
              </Typography>
              <Typography fontSize="16px" sx={{ color: "#567394" }}>
                Pridajte kartu naskenovaním alebo ručným zadaním.
              </Typography>
            </Stack>

            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Manuálne" value="1" />
                  <Tab label="Automaticky" value="2" />
                </TabList>
              </Box>

              <TabPanel value="1" sx={{ p: 0 }}>
                {" "}
                <form
                  action="https://ed-hackathon.nurxie.org/api/add-provider"
                  method="PUT"
                >
                  <Stack>
                    <Typography
                      fontSize={16}
                      fontWeight={600}
                      sx={{ color: "#0A285C" }}
                    >
                      Vyberte obchod
                    </Typography>
                    <TextField
                      select
                      sx={{ mt: "6px" }}
                      name="provider_id"
                      value={form.provider_id}
                      onChange={handleFormChange}
                    >
                      {shops?.map((shop) => {
                        return (
                          <MenuItem key={shop.id} value={shop.id}>
                            {shop.title}
                          </MenuItem>
                        );
                      })}
                    </TextField>
                  </Stack>{" "}
                  <Stack sx={{ mt: "24px" }}>
                    <Typography
                      fontSize={16}
                      fontWeight={600}
                      sx={{ color: "#0A285C" }}
                    >
                      Zadať manuálne
                    </Typography>
                    <TextField
                      sx={{ mt: "6px" }}
                      placeholder="Čislo karty"
                      name="provider_card_number"
                      value={form.provider_card_number}
                      onChange={handleFormChange}
                    />
                    <Button
                      onClick={() => {
                        handleFormSubmit();
                      }}
                      sx={{
                        background: "#1D69EC",
                        color: "#fff",
                        borderRadius: "8px",
                        mt: "24px",
                        padding: "10px 8px",
                      }}
                    >
                      Overiť
                    </Button>
                  </Stack>
                </form>
              </TabPanel>

              <TabPanel value="2">
                <Stack>
                  <Typography
                    fontSize={16}
                    fontWeight={600}
                    sx={{ color: "#0A285C" }}
                  >
                    Vyberte obchod
                  </Typography>
                  <TextField
                    select
                    sx={{ mt: "6px" }}
                    name="provider_id"
                    value={form.provider_id}
                    onChange={handleFormChange}
                  >
                    {shops?.map((shop) => {
                      return (
                        <MenuItem key={shop.id} value={shop.id}>
                          {shop.title}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                </Stack>
                <Button
                  fullWidth
                  startIcon={<FullscreenIcon />}
                  sx={{ background: "#FF6130", color: "#fff", mt: "20px" }}
                  onClick={() => {
                    navigator("/scanner");
                    localStorage.setItem("shop", form.provider_id || "");
                  }}
                >
                  Naskenujte kartu
                </Button>
                <Typography
                  sx={{ color: "#567394", mt: "16px", cursor: "pointer" }}
                  textAlign={"center"}
                >
                  alebo vyberte súbor
                </Typography>
              </TabPanel>
            </TabContext>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
}

type Card = {
  id: number;
  title: string;
  number: string;
};

function ShopCardList({ cards }: { cards?: Card[] }) {
  return (
    <Stack spacing="16px">
      {cards != null &&
        cards.map((card) => {
          return (
            <ShopCard
              key={card.id}
              id={card.id}
              name={card.title}
              number={card.number}
            />
          );
        })}
    </Stack>
  );
}

function ShopCard({
  id,
  name,
  number,
}: {
  id: number;
  name: string;
  number: string;
}) {
  return (
    <Stack direction={"row"} spacing="10px" alignItems={"center"}>
      <Box>
        {(function () {
          if (id === 2) return <img src={KauflandImg} alt="" />;
          if (id === 3) return <img src={BillaImg} alt="" />;
          if (id === 4) return <img src={FreshImg} alt="" />;
          if (id === 1) return <img src={LidlImg} alt="" />;
        })()}
      </Box>
      <Stack>
        <Typography>{name} Club Card</Typography>
        <Typography>{number}</Typography>
      </Stack>
    </Stack>
  );
}
