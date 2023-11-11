import {
  Box,
  Breadcrumbs,
  Button,
  Link,
  MenuItem,
  Stack,
  Tab,
  TextField,
  Typography,
} from "@mui/material";
import KauflandImg from "../assets/Card.png";
import TeskoImg from "../assets/tesko.png";
import FreshImg from "../assets/fresh.png";
import LidlImg from "../assets/lidl.png";
import Layout from "../components/Layout";
import React from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { useShop } from "../hooks/ShopSlice";
import { useNavigate } from "react-router-dom";

export function ShopCards() {
  const [value, setValue] = React.useState("1");
  const [cards, setCards] =
    React.useState<Array<{ id: number; title: string }>>();

  const navigator = useNavigate();

  React.useEffect(() => {
    fetch(
      "https://ed-hackathon.nurxie.org/api/providers-available?card=1234567890123456"
    )
      .then((response) => response.json())
      .then((data) => {
        setCards(data.result);
      });
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const shops = useShop();

  const [form, setForm] = React.useState({
    provider_id: "",
    card: "",
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
        alert("Karta bola úspešne pridaná");
      } else {
        alert("Karta nebola pridaná");
      }
    });
  };

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

              <TabPanel value="1">
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
                      name="card"
                      value={form.card}
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
                        mt: "16px",
                      }}
                    >
                      Overiť
                    </Button>
                  </Stack>
                </form>
              </TabPanel>

              <TabPanel value="2">
                <Button
                  fullWidth
                  startIcon={<FullscreenIcon />}
                  sx={{ background: "#FF6130", color: "#fff" }}
                  onClick={() => {navigator("/scanner")}}
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
};

function ShopCardList({ cards }: { cards?: Card[] }) {
  return (
    <Stack spacing="16px">
      {cards != null &&
        cards.map((card) => {
          return <ShopCard key={card.id} id={card.id} name={card.title} />;
        })}
    </Stack>
  );
}

function ShopCard({ id, name }: { id: number; name: string }) {
  return (
    <Stack direction={"row"} spacing="10px" alignItems={"center"}>
      <Box>
        {(function () {
          if (id === 2) return <img src={KauflandImg} alt="" />;
          if (id === 3) return <img src={TeskoImg} alt="" />;
          if (id === 4) return <img src={FreshImg} alt="" />;
          if (id === 1) return <img src={LidlImg} alt="" />;
        })()}
      </Box>
      <Stack>
        <Typography>{name} Club Card</Typography>
        <Typography>#8712578125825728</Typography>
      </Stack>
    </Stack>
  );
}
