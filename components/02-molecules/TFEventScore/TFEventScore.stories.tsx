import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TFEventScore from './TFEventScore';

export default {
  title: 'Molecules/TFEventScore',
  component: TFEventScore,
} as ComponentMeta<typeof TFEventScore>;

export const Default: ComponentStory<typeof TFEventScore> = () => {
  return <TFEventScore eventName="Event #1" perf={14.1} points={100} />;
};
