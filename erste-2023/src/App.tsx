import { Stack, Typography } from "@mui/material";
import ApiInstance from "./app/apiSlice";
import { useEffect, useState } from "react";
import Shop from "./components/shop";
import { useShop } from "./hooks/ShopSlice";

function App() {
  const shops = useShop();

  return (
    <Stack
      sx={{ minHeight: "100vh" }}
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Typography
        variant="h1"
        textAlign="center"
        sx={{ color: "rgb(40,112,237)" }}
      >
        Erste 2023 - win project
      </Typography>
      <Stack direction={"column"} alignItems={"flex-start"} spacing={2}>
        {shops?.map((shop) => {
          return <Shop key={shop.id} id={shop.id} name={shop.title} />;
        })}
      </Stack>
    </Stack>
  );
}

export default App;
