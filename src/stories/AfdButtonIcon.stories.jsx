import { fn } from "@storybook/test";

import { AfdButtonIcon } from "../afd-components/AfdButtonIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/AfdButtonIcon",
  component: AfdButtonIcon,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base = {
  args: {
    icon: "settings",
    type: "utility",
  },
};
export const Brand = {
  args: {
    icon: "search",
    brand: true,
    type: "utility",
  },
};
export const Bare = {
  args: {
    icon: "search",
    iconContainer: "bare",
    type: "utility",
  },
};
export const Bordered = {
  args: {
    icon: "search",
    iconContainer: "bordered",
    type: "utility",
  },
};

export const BorderedFilled = {
  args: {
    icon: "search",
    iconContainer: "bordered-filled",
    type: "utility",
  },
};

export const Small = {
  args: {
    icon: "search",
    size: "small",
    type: "utility",
  },
};
export const Large = {
  args: {
    icon: "search",
    iconContainer: "bordered-filled",
    size: "large",
    type: "utility",
  },
};

export const Warning = {
  args: {
    icon: "warning",
    color: "warning",
    type: "utility",
  },
};

export const Disabled = {
  args: {
    icon: "search",
    iconContainer: "bordered",
    type: "utility",
    disabled: true,
  },
};
