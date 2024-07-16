import { fn } from '@storybook/test';
import { AfdButton } from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/AfdButton',
  component: AfdButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base = {
  args: {
   children: 'Base Button',
  },
};
export const Neutral = {
  args: {
    variant: 'neutral',
   children: 'Neutral Button',
  },
};
export const Brand = {
  args: {
    variant: 'brand',
   children: 'Brand Button',
  },
};
export const OutlineBrand = {
  args: {
    variant: 'outline-brand',
   children: 'Outline Button',
  },
};

export const Success = {
  args: {
    variant: 'success',
   children: 'Success Button',
  },
};

export const Destructive = {
  args: {
    variant: 'destructive',
   children: 'Destructive Button',
  },
};
export const TextDestructive = {
  args: {
    variant: 'text-destructive',
   children: 'Text Destructive Button',
  },
};

export const Disabled = {
  args: {
    variant: 'brand',
   children: 'Brand Button',
   disabled: true,
  },
};


