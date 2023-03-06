import { createContext } from "react";
import type { ChangeEvent } from "react";

export type ContextValue = {
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const Context = createContext<ContextValue>({
  name: "",
  value: "",
});

export const { Provider } = Context;
