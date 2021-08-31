import { FC } from 'react';
import styles from './TotalScore.module.scss';

type TotalScoreProps = {
  value: string | number;
};

const TotalScore: FC<TotalScoreProps> = ({ value }) => {
  return (
    <div className={styles['total-score']}>
      <label className={styles['label']} htmlFor="total-score">
        Total Points
      </label>
      <div className={styles['input-wrap']}>
        <input
          className={styles['input']}
          name="total-score"
          disabled={true}
          value={value}
        />
      </div>
    </div>
  );
};

export default TotalScore;
