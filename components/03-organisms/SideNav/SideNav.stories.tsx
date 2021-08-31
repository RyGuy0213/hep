import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SideNav from './SideNav';

export default {
  title: 'Organisms/SideNav',
  component: SideNav,
} as ComponentMeta<typeof SideNav>;

const links = [
  {
    text: 'ABC',
    url: 'https://www.google.com',
  },
  {
    text: 'XYZ',
    url: 'https://www.google.com',
  },
];

export const Default: ComponentStory<typeof SideNav> = () => {
  return <SideNav links={links} />;
};
Default.storyName = 'SideNav';
