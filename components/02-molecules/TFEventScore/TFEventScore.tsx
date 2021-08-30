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

const TFEventScore: FC<TFEventScoreProps> = ({
  eventId,
  eventName,
  perf,
  points,
  updateScore,
}) => {
  return (
    <div className={styles['tf-event-score']}>
      <div className={styles['eventName']}>{eventName}</div>
      <input
        className={styles['perf']}
        type="text"
        value={perf}
        onChange={(e) => updateScore({ eventId, perf: e.target.value })}
      />
      <input
        className={styles['points']}
        type="text"
        value={points}
        onChange={(e) => updateScore({ eventId, points: e.target.value })}
      />
    </div>
  );
};

export default TFEventScore;
