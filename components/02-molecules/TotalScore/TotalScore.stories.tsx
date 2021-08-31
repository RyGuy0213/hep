import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TotalScore from './TotalScore';

export default {
  title: 'Molecules/TotalScore',
  component: TotalScore,
} as ComponentMeta<typeof TotalScore>;

export const Default: ComponentStory<typeof TotalScore> = () => {
  return <TotalScore value="6423" />;
};
Default.storyName = 'TotalScore';
