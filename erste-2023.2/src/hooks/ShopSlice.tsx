import { useEffect, useState } from "react";
import ApiInstance from "../app/apiSlice";
import { Shop } from '../helpers/types';

export function useShop() {
  const [shops, setShops] = useState<Shop[]>();

  useEffect(() => {
    ApiInstance.get("providers")
      .then((data) => {
        return data.data;
      })
      .then((data) => {
        setShops(data);
      });
  }, []);
  
  return shops;
}
