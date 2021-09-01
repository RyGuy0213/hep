import type { NextPage } from 'next';
import HepPage from '../components/04-templates/Page/HepPage';
import HeptathlonScore from '../components/03-organisms/HeptathlonScore/HeptathlonScore';

const HeptathlonScoring: NextPage = () => {
  const eventScores = {
    r100h: {
      perf: '13.39',
      points: '1066',
    },
    hj: {
      perf: '1.81',
      points: '991',
    },
    sp: {
      perf: '14.13',
      points: '803',
    },
    r200m: {
      perf: '24.20',
      points: '962',
    },
    lj: {
      perf: '6.32',
      points: '949',
    },
    jt: {
      perf: '41.02',
      points: '687',
    },
    r800m: {
      perf: '2:09.97',
      points: '965',
    },
  };
  return (
    <HepPage id={2}>
      <h1>Heptathlon Scoring</h1>
      <p className="line-height-sans-6">
        Scoring in the heptathlon is standardized. That is, the score an athlete
        attains in each discipline (and in total) is based only on the
        performance achieved on that day. It is not based in any fashion on the
        placement of an athlete relative to other athletes in the competition.
      </p>
      <p className="line-height-sans-6">
        As an example, consider two athletes competing head to head. Athlete A
        might achieve higher marks in six of the seven disciplines, but Athlete
        B could still beat Athlete A if her mark in the seventh discipline is
        better by a sufficient margin.
      </p>
      <p className="line-height-sans-6">
        My wife qualified for the Olympics by reaching her personal-best score
        of 6423 at the 2016 Olympic Trials. At the time of her retirement, that
        score made her one of the top-10 American performers of all time.
      </p>
      <p className="line-height-sans-6">
        That score is shown below in an interactive score calculator. You can
        adjust the performances below to get a better feel for how an athlete
        accumulates a final score. The most normal way to use a calculator like
        this is to enter the athlete’s performance (to determine the points
        awarded for that performance).
      </p>
      <p className="line-height-sans-6">
        An interesting alternative, though – and a feature I’ve never seen on
        any other calculator like this - is to adjust the points to see what
        kind of performance is necessary to achieve that many points. It’s fun,
        for instance, to explore what it takes to score 1000 points in each
        event. If an athlete can average that, she’d end up with 7000 points. At
        the time of this writing, only four women have ever achieved that mark.
        Interestingly, though, none of them eclipsed 1000 points in every event.
        As it turns out, almost all heptathletes score much higher in some
        events than the others.
      </p>
      <div className="margin-top-5">
        <HeptathlonScore eventScores={eventScores} />
      </div>
    </HepPage>
  );
};

export default HeptathlonScoring;
