import { AfdBadge } from "../afd-components/AfdBadge";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/AfdBadge",
  component: AfdBadge,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base = {
  args: {
    children: "Base Badge",
  },
};
export const Inverse = {
  args: {
    variant: "inverse",
    children: "Inverse Badge",
  },
};
export const Lightest = {
  args: {
    variant: "lightest",
    children: "Lightest Badge",
  },
};

export const Success = {
  args: {
    variant: "success",
    children: "Success Badge",
  },
};

export const Warning = {
  args: {
    variant: "warning",
    children: "Warning Badge",
  },
};
export const Error = {
  args: {
    variant: "error",
    children: "Error Badge",
  },
};
