import type { NextPage } from 'next';
import Page from '../components/04-templates/Page/Page';
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
    <Page id={2}>
      <h1>Heptathlon Scoring</h1>
      <p className="line-height-sans-6">abc</p>
      <HeptathlonScore eventScores={eventScores} />
    </Page>
  );
};

export default HeptathlonScoring;
