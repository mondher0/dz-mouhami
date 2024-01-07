// this is the store provider
"use client";
import { Provider } from "react-redux";
import { store } from "../store/store";

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
