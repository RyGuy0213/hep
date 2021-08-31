import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TFEventScore from './TFEventScore';

export default {
  title: 'Molecules/TFEventScore',
  component: TFEventScore,
} as ComponentMeta<typeof TFEventScore>;

export const Default: ComponentStory<typeof TFEventScore> = () => {
  return (
    <TFEventScore
      eventId="r100h"
      eventName="100 Hurdles"
      perf="13.39"
      points="1066"
      updateScore={() => {
        return;
      }}
    />
  );
};
Default.storyName = 'TFEventScore';
