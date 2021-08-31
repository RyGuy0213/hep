import { FC } from 'react';
import styles from './TFEventScore.module.scss';
import {
  EventIdProps,
  UpdateIndividualEventScoreFunctionProps,
} from '../../03-organisms/HeptathlonScore/HeptathlonScore';

export type TFEventScoreProps = {
  eventId: EventIdProps;
  eventName: string;
  perf?: string;
  points?: string;
  updateScore: UpdateIndividualEventScoreFunctionProps;
};

const getLabel = (eventId: EventIdProps): string => {
  if (eventId == 'r100h' || eventId == 'r200m' || eventId == 'r800m') {
    return 'Time';
  }

  return 'Meters';
};

const TFEventScore: FC<TFEventScoreProps> = ({
  eventId,
  eventName,
  perf,
  points,
  updateScore,
}) => {
  const inputWrapClass =
    'grid-col flex-1 display-flex flex-row flex-no-wrap flex-align-center';
  const labelClass = 'margin-right-1 flex-1';
  const inputClass = 'bg-transparent border-0 padding-1 font-sans-lg maxw-card';

  return (
    <div className="border-05 radius-lg padding-2 text-base-darker">
      <div className="font-sans-xl margin-bottom-2">{eventName}</div>
      <div className="grid-row flex-row flex-wrap">
        <div className={inputWrapClass}>
          <label className={labelClass} htmlFor={`perf-${eventId}`}>
            {getLabel(eventId)}
          </label>
          <input
            className={inputClass}
            name={`perf-${eventId}`}
            type="text"
            value={perf}
            onChange={(e) => updateScore({ eventId, perf: e.target.value })}
          />
        </div>
        <div className={inputWrapClass}>
          <label className={labelClass} htmlFor={`points-${eventId}`}>
            Points
          </label>
          <input
            className={inputClass}
            name={`points-${eventId}`}
            type="text"
            value={points}
            onChange={(e) => updateScore({ eventId, points: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};

export default TFEventScore;
