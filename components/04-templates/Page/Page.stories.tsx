import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Page from './Page';

export default {
  title: 'Templates/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const links = [
  {
    id: 0,
    url: '/',
    text: 'Page 1',
  },
  {
    id: 1,
    url: '/',
    text: 'Page 2',
  },
  {
    id: 2,
    url: '/',
    text: 'Page 3',
  },
  {
    id: 3,
    url: '/',
    text: 'Page 4',
  },
];

export const Default: ComponentStory<typeof Page> = () => {
  return (
    <Page
      id={0}
      links={links}
      siteTitle="Site Title"
      siteSubtitle="Site subtitle"
    >
      Page Content
    </Page>
  );
};
Default.storyName = 'Page';
