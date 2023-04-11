import {createContext, useContext} from "react";
import {ProviderResponseTypes} from "@local/runtime/types";
import {appProviderDefaultValues} from "@local/runtime/default-values";

export const AppContext = createContext<ProviderResponseTypes>(appProviderDefaultValues);

export const useAppContext = () => useContext(AppContext);
