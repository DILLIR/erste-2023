import { Stack, Typography } from "@mui/material";
import { useShop } from "../hooks/ShopSlice";
import Shop from "../components/shop";
import { Loader } from "../components/loader";

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
