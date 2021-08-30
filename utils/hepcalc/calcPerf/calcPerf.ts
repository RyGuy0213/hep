import { config } from '../config';
import { EventIdProps } from '../../../components/03-organisms/HeptathlonScore/HeptathlonScore';

export const calcPerf = (eventId: EventIdProps, points: string): string => {
  if (eventId == 'r100h') {
    return calcPerf100H(points);
  }
  if (eventId == 'hj') {
    return calcPerfHJ(points);
  }
  if (eventId == 'sp') {
    return calcPerfSP(points);
  }
  if (eventId == 'r200m') {
    return calcPerf200M(points);
  }
  if (eventId == 'lj') {
    return calcPerfLJ(points);
  }
  if (eventId == 'jt') {
    return calcPerfJT(points);
  }
  if (eventId == 'r800m') {
    return calcPerf800M(points);
  }

  return '0';
};

const calcPerfRunningEvent = (
  points: string,
  a: number,
  b: number,
  c: number
): string => {
  const parsed = parseInt(points);
  if (!parsed || parsed <= 0 || isNaN(parsed)) {
    return '0';
  }

  const perf = b - Math.pow(parsed / a, 1 / c);
  const minutes = Math.floor(perf / 60);
  const seconds = perf % 60;
  let secondsDisplay = seconds.toFixed(2);
  if (seconds < 10) {
    secondsDisplay = `0${secondsDisplay}`;
  }
  if (minutes > 0) {
    return `${minutes}:${secondsDisplay}`;
  }
  return `${secondsDisplay}`;
};

const calcPerfJumpingEvent = (
  points: string,
  a: number,
  b: number,
  c: number
): string => {
  const parsed = parseInt(points);
  if (!parsed || parsed <= 0 || isNaN(parsed)) {
    return '0';
  }

  return ((b + Math.pow(parsed / a, 1 / c)) / 100).toFixed(2);
};

const calcPerfThrowingEvent = (
  points: string,
  a: number,
  b: number,
  c: number
): string => {
  const parsed = parseInt(points);
  if (!parsed || parsed <= 0 || isNaN(parsed)) {
    return '0';
  }

  return (b + Math.pow(parsed / a, 1 / c)).toFixed(2);
};

const calcPerf100H = (points: string): string => {
  return calcPerfRunningEvent(
    points,
    config.r100h.a,
    config.r100h.b,
    config.r100h.c
  );
};

const calcPerfHJ = (points: string): string => {
  return calcPerfJumpingEvent(points, config.hj.a, config.hj.b, config.hj.c);
};

const calcPerfSP = (points: string): string => {
  return calcPerfThrowingEvent(points, config.sp.a, config.sp.b, config.sp.c);
};

const calcPerf200M = (points: string): string => {
  return calcPerfRunningEvent(
    points,
    config.r200m.a,
    config.r200m.b,
    config.r200m.c
  );
};

const calcPerfLJ = (points: string): string => {
  return calcPerfJumpingEvent(points, config.lj.a, config.lj.b, config.lj.c);
};

const calcPerfJT = (points: string): string => {
  return calcPerfThrowingEvent(points, config.jt.a, config.jt.b, config.jt.c);
};

const calcPerf800M = (points: string): string => {
  return calcPerfRunningEvent(
    points,
    config.r800m.a,
    config.r800m.b,
    config.r800m.c
  );
};
