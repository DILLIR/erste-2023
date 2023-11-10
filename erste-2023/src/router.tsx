import { createBrowserRouter } from "react-router-dom";
import { BarcodeScanner } from "./pages/scanner";
import { ShopList } from "./pages/shops";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopList />,
  },
  {
    path: "/scanner",
    element: <BarcodeScanner />,
  },
]);
