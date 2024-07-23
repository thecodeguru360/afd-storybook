import { AfdCheckbox } from "../afd-components/AfdCheckbox";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/AfdCheckbox",
  component: AfdCheckbox,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  args: {
    name: "select-01",

    onChange: fn(),
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Base = {
  args: {
    label: "Checkbox Label",
    id: "base-check",
  },
};

export const Checked = {
  args: {
    label: "Checkbox Label",
    id: "base-check",
    checked: true,
  },
};

export const Required = {
  args: {
    label: "Checkbox Label",
    id: "req-check",
    isRequired: true,
  },
};
export const Error = {
  args: {
    label: "Checkbox Label",
    id: "error-check",
    isRequired: true,
    error: "This field is required.",
  },
};

export const Disabled = {
  args: {
    label: "Checkbox Label",
    id: "disabled-check",
    disabled: true,
  },
};
