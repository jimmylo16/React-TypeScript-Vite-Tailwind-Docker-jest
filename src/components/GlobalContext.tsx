import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Outlet } from "react-router-dom";

export type views = "" | "login" | "register";

export type TsetView = contextDispatch<views>;

type contextDispatch<T> = Dispatch<SetStateAction<T>> | ((views: T) => void);
type ContextType = {
  view: views;
  setView: TsetView;
  setIsLogged: contextDispatch<boolean>;
  isLogged: boolean;
};
export const GlobalContext = createContext<ContextType>({
  view: "",
  setView: (_views: views) => {},
  setIsLogged: (_islogged: boolean) => {},
  isLogged: false,
});

export const GlobalProvider = () => {
  const [view, setView] = useState<views>("");
  const [isLogged, setIsLogged] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ setView, view, setIsLogged, isLogged }}>
      <main
        className={`flex min-h-screen flex-col items-center  sm:px-24 sm:pt-8 `}
      >
        <Outlet />
      </main>
    </GlobalContext.Provider>
  );
};
