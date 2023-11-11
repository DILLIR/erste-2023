import { Container } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxWidth="sm">
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
