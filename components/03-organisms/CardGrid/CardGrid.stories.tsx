import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardGrid from './CardGrid';

export default {
  title: 'Organisms/CardGrid',
  component: CardGrid,
} as ComponentMeta<typeof CardGrid>;

const cards = [
  {
    heading: 'Heading 1',
    media: <img src="https://placeimg.com/1600/900/nature"></img>,
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
  },
  {
    heading: 'Heading 2',
    media: <img src="https://placeimg.com/1600/901/nature"></img>,
    text: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
  },
];

export const Default: ComponentStory<typeof CardGrid> = () => {
  return <CardGrid cards={cards} />;
};
Default.storyName = 'CardGrid';
