import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SideNav from './SideNav';

export default {
  title: 'Organisms/SideNav',
  component: SideNav,
} as ComponentMeta<typeof SideNav>;

const links = [
  {
    id: 0,
    text: 'Page 1',
    url: '/',
  },
  {
    id: 1,
    text: 'Page 2',
    url: '/',
  },
  {
    id: 2,
    text: 'Page 3',
    url: '/',
  },
];

export const Default: ComponentStory<typeof SideNav> = () => {
  return <SideNav links={links} currentPageId={0} />;
};
Default.storyName = 'SideNav';
