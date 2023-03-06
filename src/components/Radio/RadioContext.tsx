import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";

import { Provider } from "./context";

export type RadioContextProps = {
  /**
   * Renders `Radio` children as radio options.
   */
  children: ReactNode;
  /**
   * Sets the currently selected `Radio` option.
   */
  value?: string;
  /**
   * Sets the name attributes for the `Radio` options.
   */
  name: string;
  /**
   * Function executed when a `Radio` option is selected.
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
};

export const RadioContext = ({
  children,
  value: passedValue = "",
  name,
  onChange,
}: RadioContextProps) => {
  const [internalValue, setInternalValue] = useState(passedValue);

  useEffect(() => {
    setInternalValue(passedValue);
  }, [passedValue]);

  const changeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const {
        currentTarget: { value, checked },
      } = e;

      if (checked) {
        setInternalValue(value);

        if (typeof onChange === "function") {
          onChange(e, value);
        }
      }
    },
    [onChange]
  );

  const contextValue = useMemo(
    () => ({
      onChange: changeHandler,
      value: internalValue,
      name,
    }),
    [changeHandler, name, internalValue]
  );

  return <Provider value={contextValue}>{children}</Provider>;
};

RadioContext.displayName = "RadioContext";
