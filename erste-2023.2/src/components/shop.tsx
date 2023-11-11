import { Typography } from "@mui/material";
import React from 'react';
import Stack from "@mui/material/Stack";

export default function Shop({ name, id }: { name: string; id: number }) {
  return (
    <Stack direction="row" spacing={1} sx={{border: "1.5px solid #212121", borderRadius: "10px", p: 2, width: "100%"}} alignItems={"center"}>
      <Typography fontSize={18}>{id}</Typography>
      <Typography fontSize={22} color="teal">{name}</Typography>
    </Stack>
  );
}
