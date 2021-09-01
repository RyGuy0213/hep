import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Atoms/Buttons',
  component: Button,
  argTypes: {
    type: {
      control: {
        type: 'radio',
      },
      options: ['button', 'submit'],
    },
    variation: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = ({ type }) => {
  return <Button type={type}>Primary</Button>;
};

export const Secondary: ComponentStory<typeof Button> = ({ type }) => {
  return (
    <Button type={type} variation="secondary">
      Secondary
    </Button>
  );
};

export const Outline: ComponentStory<typeof Button> = ({ type }) => {
  return (
    <Button type={type} variation="outline">
      Secondary
    </Button>
  );
};
