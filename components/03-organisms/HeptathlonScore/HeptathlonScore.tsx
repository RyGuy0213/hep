import { useReducer, FC } from 'react';
import styles from './HeptathlonScore.module.scss';
import TFEventScore from '../../02-molecules/TFEventScore/TFEventScore';
import { calcPoints } from '../../../utils/hepcalc/calcPoints/calcPoints';
import { calcPerf } from '../../../utils/hepcalc/calcPerf/calcPerf';

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
      updatedScore.points = calcPoints(eventId, perf);
    }

    // Calculate performance from points
    else if (points !== undefined) {
      const calculatedPerf = calcPerf(eventId, points);
      if (parseFloat(calculatedPerf) < 0) {
        updatedScore.perf = '0';
        updatedScore.points = '0';
      } else {
        updatedScore.perf = calculatedPerf;
        updatedScore.points = points;
      }
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
    (state?.hj?.points ? parseInt(state.hj.points) : 0) +
    (state?.sp?.points ? parseInt(state.sp.points) : 0) +
    (state?.r200m?.points ? parseInt(state.r200m.points) : 0) +
    (state?.lj?.points ? parseInt(state.lj.points) : 0) +
    (state?.jt?.points ? parseInt(state.jt.points) : 0) +
    (state?.r800m?.points ? parseInt(state.r800m.points) : 0);

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

  const eventWrapClass = 'margin-top-2';

  return (
    <div className="maxw-mobile-lg">
      <div className="border-05 bg-base-dark text-base-lightest radius-lg padding-3 bg-dark text-uppercase display-flex flex-row flex-no-wrap flex-align-center flex-justify">
        <label htmlFor="total-score">Total Points</label>
        <input
          className="bg-transparent text-base-lightest border-0 padding-1 font-sans-xl text-align-right text-heavy maxw-mobile"
          name="total-score"
          disabled={true}
          value={totalScore}
        />
      </div>
      <div className={eventWrapClass}>
        <TFEventScore
          eventId="r100h"
          eventName="100 Hurdles"
          perf={state?.r100h?.perf}
          points={state?.r100h?.points}
          updateScore={updateScore}
        />
      </div>
      <div className={eventWrapClass}>
        <TFEventScore
          eventId="hj"
          eventName="High Jump"
          perf={state?.hj?.perf}
          points={state?.hj?.points}
          updateScore={updateScore}
        />
      </div>
      <div className={eventWrapClass}>
        <TFEventScore
          eventId="sp"
          eventName="Shot Put"
          perf={state?.sp?.perf}
          points={state?.sp?.points}
          updateScore={updateScore}
        />
      </div>
      <div className={eventWrapClass}>
        <TFEventScore
          eventId="r200m"
          eventName="200 Meters"
          perf={state?.r200m?.perf}
          points={state?.r200m?.points}
          updateScore={updateScore}
        />
      </div>
      <div className={eventWrapClass}>
        <TFEventScore
          eventId="lj"
          eventName="Long Jump"
          perf={state?.lj?.perf}
          points={state?.lj?.points}
          updateScore={updateScore}
        />
      </div>
      <div className={eventWrapClass}>
        <TFEventScore
          eventId="jt"
          eventName="Javelin Throw"
          perf={state?.jt?.perf}
          points={state?.jt?.points}
          updateScore={updateScore}
        />
      </div>
      <div className={eventWrapClass}>
        <TFEventScore
          eventId="r800m"
          eventName="800 Meters"
          perf={state?.r800m?.perf}
          points={state?.r800m?.points}
          updateScore={updateScore}
        />
      </div>
    </div>
  );
};

export default HeptathlonScore;
