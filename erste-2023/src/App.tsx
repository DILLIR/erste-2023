import { Stack, Typography } from "@mui/material";
import ApiInstance from "./app/apiSlice";

function App() {
  ApiInstance.get("providers").then((data) => {console.log(data)});

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
    </Stack>
  );
}

export default App;
