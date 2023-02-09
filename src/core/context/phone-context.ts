import { createContext } from "react";
import { usePhoneStructure } from "../hook/usePhone/usePhone";

export const PhoneContext = createContext({} as usePhoneStructure);
