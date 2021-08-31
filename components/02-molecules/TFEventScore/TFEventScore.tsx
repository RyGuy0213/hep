import { FC } from 'react';
import styles from './TFEventScore.module.scss';
import {
  EventIdProps,
  UpdateIndividualEventScoreFunctionProps,
} from '../../03-organisms/HeptathlonScore/HeptathlonScore';
import { useDivResizeRef } from '../../../customHooks/useDivResizeRef';

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

const getContainerSizeName = (width: number | undefined): string => {
  if (width && width > 320) {
    return 'large';
  }

  return 'small';
};

const TFEventScore: FC<TFEventScoreProps> = ({
  eventId,
  eventName,
  perf,
  points,
  updateScore,
}) => {
  const [containerRef, containerSize] = useDivResizeRef();

  return (
    <div
      ref={containerRef}
      data-event-container-size={getContainerSizeName(containerSize?.width)}
      className={styles['tf-event-score']}
    >
      <div className={styles['wrap-all']}>
        <div className={styles['event-name']}>{eventName}</div>
        <div className={styles['score-inputs']}>
          <div className={styles['score-input']}>
            <label className={styles['label']} htmlFor={`perf-${eventId}`}>
              {getLabel(eventId)}
            </label>
            <div className={styles['input-wrap']}>
              <input
                className={styles['input']}
                name={`perf-${eventId}`}
                type="text"
                value={perf}
                onChange={(e) => updateScore({ eventId, perf: e.target.value })}
              />
            </div>
          </div>
          <div className={styles['score-input']}>
            <label className={styles['label']} htmlFor={`points-${eventId}`}>
              Points
            </label>
            <div className={styles['input-wrap']}>
              <input
                className={styles['input']}
                name={`points-${eventId}`}
                type="text"
                value={points}
                onChange={(e) =>
                  updateScore({ eventId, points: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TFEventScore;
