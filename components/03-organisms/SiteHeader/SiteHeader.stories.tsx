import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SiteHeader from './SiteHeader';

export default {
  title: 'Organisms/SiteHeader',
  component: SiteHeader,
} as ComponentMeta<typeof SiteHeader>;

export const Default: ComponentStory<typeof SiteHeader> = () => {
  return <SiteHeader />;
};
Default.storyName = 'SiteHeader';
