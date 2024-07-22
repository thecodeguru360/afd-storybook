import { fn } from "@storybook/test";

import { AfdMenus } from "../afd-components/AfdMenus";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/AfdMenus",
  component: AfdMenus,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base = {
  args: {
    menuList: [
      {
        title: "Menu A",
      },
      {
        title: "Menu B",
      },
      { isDivider: true },
      {
        title: "Menu C",
      },
    ],
  },
};
export const WithHeader = {
  args: {
    menuList: [
      { title: "Menu List", isHeader: true },
      {
        title: "Menu A",
      },
      {
        title: "Menu B",
      },
    ],
  },
};
export const Icons = {
  args: {
    menuList: [
      {
        title: "Menu A",
        icon: "search",
        iconType: "utility",
        iconPosition: "left",
      },
      {
        title: "Menu B",
        icon: "search",
        iconType: "utility",
        iconPosition: "left",
      },
      { isDivider: true },
      {
        title: "Menu C",
        icon: "search",
        iconType: "utility",
        iconPosition: "left",
      },
    ],
  },
};
export const PositionRight = {
  args: {
    position: "right",
    menuList: [
      {
        title: "Menu A",
      },
      {
        title: "Menu B",
      },
      { isDivider: true },
      {
        title: "Menu C",
      },
    ],
  },
};

export const WithLength = {
  args: {
    length: 7,
    menuList: [
      {
        title: "Menu A",
      },
      {
        title: "Menu B",
      },
      { isDivider: true },
      {
        title: "Menu C",
      },
      {
        title: "Menu D",
      },
      {
        title: "Menu E",
      },
      {
        title: "Menu F",
      },
      {
        title: "Menu G",
      },
    ],
  },
};

export const WidthLarge = {
  args: {
    width: "large",
    menuList: [
      {
        title: "Menu A",
      },
      {
        title: "Menu B",
      },
      { isDivider: true },
      {
        title: "Menu C",
      },
    ],
  },
};
