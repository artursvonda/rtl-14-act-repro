import React, { forwardRef, useContext, type InputHTMLAttributes } from "react";

import { Context } from "./context";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Sets the value attribute for the option.
   */
  value: string;
  /**
   * Sets the css class attribute.
   */
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ value, children, disabled, ...rest }, ref) => {
    const { name, value: passedValues, onChange } = useContext(Context);

    const isChecked = passedValues === value;

    return (
      <label>
        <input
          {...rest}
          ref={ref}
          type="radio"
          disabled={disabled}
          name={name}
          value={value}
          checked={isChecked}
          onChange={onChange}
        />
        {children && <span>{children}</span>}
      </label>
    );
  }
);

Radio.displayName = "Radio";
