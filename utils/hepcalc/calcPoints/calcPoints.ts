import { config } from '../config';
import { EventIdProps } from '../../../components/03-organisms/HeptathlonScore/HeptathlonScore';

export const calcPoints = (eventId: EventIdProps, perf: string): string => {
  if (eventId == 'r100h') {
    return calcPoints100H(perf);
  }
  if (eventId == 'hj') {
    return calcPointsHJ(perf);
  }
  if (eventId == 'sp') {
    return calcPointsSP(perf);
  }
  if (eventId == 'r200m') {
    return calcPoints200M(perf);
  }
  if (eventId == 'lj') {
    return calcPointsLJ(perf);
  }
  if (eventId == 'jt') {
    return calcPointsJT(perf);
  }
  if (eventId == 'r800m') {
    return calcPoints800M(perf);
  }

  return '0';
};

const calcPointsRunningEvent = (
  time: string,
  a: number,
  b: number,
  c: number
): string => {
  const parsed = parseFloat(time);
  if (!parsed || parsed <= 0 || isNaN(parsed)) {
    return '0';
  }
  const colonPos = time.indexOf(':');
  const minutes = parseFloat(colonPos > 0 ? time.substring(0, colonPos) : '0');
  const seconds = parseFloat(
    colonPos > 0 ? time.substring(colonPos + 1) : time
  );
  const totalSeconds = minutes * 60 + seconds;

  const points = Math.floor(a * Math.pow(b - totalSeconds, c));
  if (isNaN(points)) {
    return '0';
  }
  return points.toString();
};

const calcPointsJumpingEvent = (
  meters: string,
  a: number,
  b: number,
  c: number
): string => {
  const parsed = parseFloat(meters);
  if (!parsed || parsed <= 0 || isNaN(parsed)) {
    return '0';
  }

  const points = Math.floor(a * Math.pow(parsed * 100 - b, c));
  if (isNaN(points)) {
    return '0';
  }
  return points.toString();
};

const calcPointsThrowingEvent = (
  meters: string,
  a: number,
  b: number,
  c: number
): string => {
  const parsed = parseFloat(meters);
  if (!parsed || parsed <= 0 || isNaN(parsed)) {
    return '0';
  }

  const points = Math.floor(a * Math.pow(parsed - b, c));
  if (isNaN(points)) {
    return '0';
  }
  return points.toString();
};

const calcPoints100H = (seconds: string): string => {
  return calcPointsRunningEvent(
    seconds,
    config.r100h.a,
    config.r100h.b,
    config.r100h.c
  );
};

const calcPointsHJ = (centimeters: string): string => {
  return calcPointsJumpingEvent(
    centimeters,
    config.hj.a,
    config.hj.b,
    config.hj.c
  );
};

const calcPointsSP = (centimeters: string): string => {
  return calcPointsThrowingEvent(
    centimeters,
    config.sp.a,
    config.sp.b,
    config.sp.c
  );
};

const calcPoints200M = (seconds: string): string => {
  return calcPointsRunningEvent(
    seconds,
    config.r200m.a,
    config.r200m.b,
    config.r200m.c
  );
};

const calcPointsLJ = (centimeters: string): string => {
  return calcPointsJumpingEvent(
    centimeters,
    config.lj.a,
    config.lj.b,
    config.lj.c
  );
};

const calcPointsJT = (centimeters: string): string => {
  return calcPointsThrowingEvent(
    centimeters,
    config.jt.a,
    config.jt.b,
    config.jt.c
  );
};

const calcPoints800M = (seconds: string): string => {
  return calcPointsRunningEvent(
    seconds,
    config.r800m.a,
    config.r800m.b,
    config.r800m.c
  );
};
