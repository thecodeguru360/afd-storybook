import { AfdAvatar } from "../afd-components/AfdAvatar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/AfdAvatar",
  component: AfdAvatar,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic = {
  args: {
    avatarClass: "slds-avatar_profile-image-large",
  },
};
export const IconCircle = {
  args: {
    circle: true,
    icon: "user",
    iconType: "standard",
  },
};
export const IconRounded = {
  args: {
    icon: "account",
    iconType: "standard",
  },
};

export const UserInitials = {
  args: {
    userInitials: "AB",
  },
};

export const CompanyInitials = {
  args: {
    companyInitials: "Ac",
  },
};
export const Linked = {
  args: {
    link: "#",
    companyInitials: "Ac",
  },
};
