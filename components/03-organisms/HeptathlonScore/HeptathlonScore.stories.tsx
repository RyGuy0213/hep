import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeptathlonScore from './HeptathlonScore';

export default {
  title: 'Organisms/HeptathlonScore',
  component: HeptathlonScore,
} as ComponentMeta<typeof HeptathlonScore>;

export const Default: ComponentStory<typeof HeptathlonScore> = () => {
  const eventScores = {
    r100h: {
      perf: '10.1',
      points: '100',
    },
  };
  return <HeptathlonScore eventScores={eventScores} />;
};
Default.storyName = 'HeptathlonScore';
