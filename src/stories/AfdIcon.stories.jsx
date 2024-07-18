import { AfdIcon } from "../components/AfdIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/AfdIcon",
  component: AfdIcon,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    icon: "announcement",
    color: "default",
    type: "utility",
  },
};
export const Action = {
  args: {
    icon: "description",

    type: "action",
  },
};
export const Custom = {
  args: {
    icon: "custom5",
    type: "custom",
  },
};
export const Doctype = {
  args: {
    icon: "xml",
    type: "doctype",
  },
};

export const Standard = {
  args: {
    icon: "account",
    type: "standard",
  },
};

export const Success = {
  args: {
    icon: "announcement",
    color: "success",
    type: "utility",
  },
};

export const Warning = {
  args: {
    icon: "announcement",
    color: "warning",
    type: "utility",
  },
};
export const Error = {
  args: {
    icon: "announcement",
    color: "error",
    type: "utility",
  },
};

export const Light = {
  args: {
    icon: "announcement",
    color: "light",
    type: "utility",
  },
};

export const SizeXXSmall = {
  args: {
    icon: "announcement",
    color: "default",
    type: "utility",
    size: "xx-small",
  },
};

export const SizeXSmall = {
  args: {
    icon: "announcement",
    color: "default",
    type: "utility",
    size: "x-small",
  },
};

export const SizeSmall = {
  args: {
    icon: "announcement",
    color: "default",
    type: "utility",
    size: "small",
  },
};

export const SizeLarge = {
  args: {
    icon: "announcement",
    color: "default",
    type: "utility",
    size: "large",
  },
};
