import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeptathlonScore from './HeptathlonScore';

export default {
  title: 'Organisms/HeptathlonScore',
  component: HeptathlonScore,
} as ComponentMeta<typeof HeptathlonScore>;

export const Default: ComponentStory<typeof HeptathlonScore> = () => {
  return <HeptathlonScore />;
};
Default.storyName = 'HeptathlonScore';
