import { createContext } from "react";

export const CheckoutContex = createContext({});

export const CheckoutProvider = ({ children }) => {
  return <CheckoutContex.Provider>{}</CheckoutContex.Provider>;
};
