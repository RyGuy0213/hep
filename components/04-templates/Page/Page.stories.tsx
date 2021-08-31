import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Page from './Page';

export default {
  title: 'Templates/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

export const Default: ComponentStory<typeof Page> = () => {
  return <Page id={0}>Page Content</Page>;
};
Default.storyName = 'Page';
