import { Stack } from "@mui/material";
import { Loader } from "../components/loader";
import Shop from "../components/shop";
import { useShop } from "../hooks/ShopSlice";
import React from "react";

export function ShopList() {
  const shops = useShop();

  return (
    <Stack
      sx={{ minHeight: "100vh" }}
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      {shops == null ? (
        <Loader />
      ) : (
        <Stack direction={"column"} alignItems={"flex-start"} spacing={2}>
          {shops?.map((shop) => {
            return <Shop key={shop.id} id={shop.id} name={shop.title} />;
          })}
        </Stack>
      )}
    </Stack>
  );
}
