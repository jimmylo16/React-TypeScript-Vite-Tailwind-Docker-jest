import { GlobalContext } from "@/components/GlobalContext";
import { useContext } from "react";

export const useGlobalState = () => useContext(GlobalContext);
