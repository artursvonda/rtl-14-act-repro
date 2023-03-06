import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio, RadioContext } from ".";

describe("<RadioContext />", () => {
  it("only a radio that was last checked should be checked", async () => {
    const user = userEvent.setup();

    render(
      <RadioContext name="fruits">
        <Radio value="melon">Hello Melon</Radio>
        <Radio value="orange">Hello Orange</Radio>
        <Radio value="mango">Hello Mango</Radio>
        <Radio value="apple">Hello Apple</Radio>
      </RadioContext>
    );

    expect(screen.getByDisplayValue("melon")).not.toBeChecked();
    expect(screen.getByDisplayValue("orange")).not.toBeChecked();
    expect(screen.getByDisplayValue("mango")).not.toBeChecked();
    expect(screen.getByDisplayValue("apple")).not.toBeChecked();

    await user.click(screen.getByText("Hello Orange"));
    await user.click(screen.getByText("Hello Mango"));

    expect(screen.getByDisplayValue("melon")).not.toBeChecked();
    expect(screen.getByDisplayValue("orange")).not.toBeChecked();
    expect(screen.getByDisplayValue("mango")).toBeChecked();
    expect(screen.getByDisplayValue("apple")).not.toBeChecked();
  });

  it("should trigger onChange callback function", async () => {
    const user = userEvent.setup();
    const callbackFn = jest.fn();

    render(
      <RadioContext name="fruits" onChange={callbackFn}>
        <Radio value="melon">Hello Melon</Radio>
        <Radio value="orange">Hello Orange</Radio>
        <Radio value="mango">Hello Mango</Radio>
        <Radio value="apple">Hello Apple</Radio>
      </RadioContext>
    );

    await user.click(screen.getByText("Hello Orange"));

    expect(callbackFn).toHaveBeenCalledWith(expect.anything(), "orange");
  });
});
