import { useReducer, FC } from 'react';
import styles from './HeptathlonScore.module.scss';
import TFEventScore from '../../02-molecules/TFEventScore/TFEventScore';
import { calcPoints } from '../../../utils/hepcalc/calcPoints/calcPoints';
import { calcPerf } from '../../../utils/hepcalc/calcPerf/calcPerf';
import { twoDecimalPlaces } from '../../../utils/number/number';

type IndividualEventScoreProps = {
  perf: string;
  points: string;
};

export type EventIdProps =
  | 'r100h'
  | 'hj'
  | 'sp'
  | 'r200m'
  | 'lj'
  | 'jt'
  | 'r800m';

type UpdateIndividualEventScoreProps = {
  eventId: EventIdProps;
  perf?: string;
  points?: string;
};

export type UpdateIndividualEventScoreFunctionProps = ({
  eventId,
  perf,
  points,
}: UpdateIndividualEventScoreProps) => void;

type EventScoresProps = {
  r100h?: IndividualEventScoreProps;
  hj?: IndividualEventScoreProps;
  sp?: IndividualEventScoreProps;
  r200m?: IndividualEventScoreProps;
  lj?: IndividualEventScoreProps;
  jt?: IndividualEventScoreProps;
  r800m?: IndividualEventScoreProps;
};

export type HeptathlonScoreProps = {
  eventScores?: EventScoresProps;
};

const unitsInputToNumber = (eventId: EventIdProps, perf: string): number => {
  if (eventId == 'hj' || eventId == 'lj') {
    return parseFloat(perf) * 100;
  }

  if (eventId == 'r100h' || eventId == 'r200m' || eventId == 'r800m') {
    const colonPos = perf.indexOf(':');
    const minutes = parseFloat(
      colonPos > 0 ? perf.substring(0, colonPos) : '0'
    );
    const seconds = parseFloat(
      colonPos > 0 ? perf.substring(colonPos + 1) : perf
    );
    return minutes * 60 + seconds;
  }

  return parseFloat(perf);
};

const unitsNumberToDisplay = (eventId: EventIdProps, perf: number): string => {
  if (eventId == 'hj' || eventId == 'lj') {
    return `${twoDecimalPlaces(perf / 100)}`;
  }
  if (eventId == 'r100h' || eventId == 'r200m' || eventId == 'r800m') {
    const minutes = Math.floor(perf / 60);
    const seconds = twoDecimalPlaces(perf % 60);
    if (minutes > 0) {
      return `${minutes}:${seconds}`;
    }
    return `${seconds}`;
  }

  return `${twoDecimalPlaces(perf)}`;
};

const scoresInitializer = (
  eventScores?: EventScoresProps
): EventScoresProps => {
  const blankScore = { perf: '0', points: '0' };
  return {
    r100h: eventScores?.r100h || blankScore,
    hj: eventScores?.hj || blankScore,
    sp: eventScores?.sp || blankScore,
    r200m: eventScores?.r200m || blankScore,
    lj: eventScores?.lj || blankScore,
    jt: eventScores?.jt || blankScore,
    r800m: eventScores?.r800m || blankScore,
  };
};

const scoresReducer = (
  state: EventScoresProps,
  action: UpdateIndividualEventScoreProps
): EventScoresProps => {
  const { eventId, perf, points } = action;

  if (perf !== undefined || points !== undefined) {
    const updatedScore = { perf: '0', points: '0' };

    // Calculate points from performance
    if (perf !== undefined) {
      updatedScore.perf = perf;
      const calculatedPoints = calcPoints(
        eventId,
        unitsInputToNumber(eventId, perf)
      );
      updatedScore.points = isNaN(calculatedPoints)
        ? '0'
        : calculatedPoints.toString();
    }

    // Calculate performance from points
    else if (points !== undefined) {
      const parsed = parseFloat(points);
      updatedScore.perf = unitsNumberToDisplay(
        eventId,
        calcPerf(eventId, parsed)
      );
      updatedScore.points = isNaN(parsed) ? '' : parsed.toString();
    }

    const updatedState = { ...state };
    updatedState[eventId] = updatedScore;
    return updatedState;
  }

  return state;
};

const HeptathlonScore: FC<HeptathlonScoreProps> = ({ eventScores }) => {
  const [state, dispatch] = useReducer(
    scoresReducer,
    eventScores,
    scoresInitializer
  );

  const totalScore =
    (state?.r100h?.points ? parseInt(state.r100h.points) : 0) +
    (state?.hj?.points ? parseInt(state.hj.points) : 0);

  const updateScore: UpdateIndividualEventScoreFunctionProps = ({
    eventId,
    perf,
    points,
  }) => {
    dispatch({
      eventId,
      perf,
      points,
    });
  };

  return (
    <div className={styles['heptathlon-score']}>
      <div className={styles['total-score']}>TOTAL: {totalScore}</div>
      <TFEventScore
        eventId="r100h"
        eventName="100 Hurdles"
        perf={state?.r100h?.perf}
        points={state?.r100h?.points}
        updateScore={updateScore}
      />
      <TFEventScore
        eventId="hj"
        eventName="High Jump"
        perf={state?.hj?.perf}
        points={state?.hj?.points}
        updateScore={updateScore}
      />
      <TFEventScore
        eventId="sp"
        eventName="Shot Put"
        perf={state?.sp?.perf}
        points={state?.sp?.points}
        updateScore={updateScore}
      />
      <TFEventScore
        eventId="r200m"
        eventName="200 Meters"
        perf={state?.r200m?.perf}
        points={state?.r200m?.points}
        updateScore={updateScore}
      />
      <TFEventScore
        eventId="lj"
        eventName="Long Jump"
        perf={state?.lj?.perf}
        points={state?.lj?.points}
        updateScore={updateScore}
      />
      <TFEventScore
        eventId="jt"
        eventName="Javelin Throw"
        perf={state?.jt?.perf}
        points={state?.jt?.points}
        updateScore={updateScore}
      />
      <TFEventScore
        eventId="r800m"
        eventName="800 Meters"
        perf={state?.r800m?.perf}
        points={state?.r800m?.points}
        updateScore={updateScore}
      />
    </div>
  );
};

export default HeptathlonScore;
