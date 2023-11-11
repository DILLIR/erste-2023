import { createBrowserRouter } from "react-router-dom";
import { BarcodeScanner } from "./pages/scanner";
import { ShopList } from "./pages/shops";
import HomePage from "./pages/HomePage";
import { ShopCards } from "./pages/ShopCards";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/scanner",
    element: <BarcodeScanner />,
  },
  {
    path: "/shop-cards",
    element: <ShopCards />,
  },
]);