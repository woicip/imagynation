import { createContext } from "react";
import ContextData from "../../types/ContextData";
export const value: ContextData = {
    api_endpoint: "https://imagy.com"
}
export const ImagyContext = createContext(value);
export const ImagyContextProvider = ImagyContext.Provider;