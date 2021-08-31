import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';

export default {
  title: 'Molecules/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = () => {
  return (
    <Card
      heading="This is a card"
      media={<img src="https://placeimg.com/1600/900/nature"></img>}
      text="Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    />
  );
};
Default.storyName = 'Card';
