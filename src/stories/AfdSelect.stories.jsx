import { AfdSelect } from "../afd-components/AfdSelect";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/AfdSelect",
  component: AfdSelect,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  args: {
    name: "select-01",
    options: [
      { name: "Option 1", value: "1" },
      { name: "Option 2", value: "2" },
      { name: "Option 3", value: "3" },
    ],
    onChange: fn(),
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Base = {
  args: {
    label: "Label",
    id: "base-select",
  },
};

export const Required = {
  args: {
    label: "Label",
    id: "req-select",
    isRequired: true,
  },
};
export const Error = {
  args: {
    label: "Label",
    id: "error-select",
    isRequired: true,
    error: "Select an option.",
  },
};

export const Disabled = {
  args: {
    label: "Label",
    id: "disabled-select",
    disabled: true,
  },
};
