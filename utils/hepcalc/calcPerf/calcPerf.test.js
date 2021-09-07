const calcPerfModule = require('./calcPerf');

// 100 Hurdles
test('Normal range 100H', () => {
  expect(calcPerfModule.calcPerf('r100h', '1072')).toBe('13.36');
});
test('Blank input 100H', () => {
  expect(calcPerfModule.calcPerf('r100h', '0')).toBe('0');
});
test('Negative input 100H', () => {
  expect(calcPerfModule.calcPerf('r100h', '-125')).toBe('0');
});

// High Jump
test('Normal range High Jump', () => {
  expect(calcPerfModule.calcPerf('hj', '991')).toBe('1.81');
});
test('Blank input High Jump', () => {
  expect(calcPerfModule.calcPerf('hj', '0')).toBe('0');
});
test('Negative input High Jump', () => {
  expect(calcPerfModule.calcPerf('hj', '-175')).toBe('0');
});

// Shot Put
test('Normal range Shot Put', () => {
  expect(calcPerfModule.calcPerf('sp', '803')).toBe('14.13');
});
test('Blank input Shot Put', () => {
  expect(calcPerfModule.calcPerf('sp', '0')).toBe('0');
});
test('Negative input Shot Put', () => {
  expect(calcPerfModule.calcPerf('sp', '-353')).toBe('0');
});

// 200 Meters
test('Normal range 200M', () => {
  expect(calcPerfModule.calcPerf('r200m', '995')).toBe('23.86');
});
test('Blank input 200M', () => {
  expect(calcPerfModule.calcPerf('r200m', '0')).toBe('0');
});
test('Negative input 200M', () => {
  expect(calcPerfModule.calcPerf('r200m', '-502')).toBe('0');
});

// Long Jump
test('Normal range Long Jump', () => {
  expect(calcPerfModule.calcPerf('lj', '972')).toBe('6.39');
});
test('Blank input Long Jump', () => {
  expect(calcPerfModule.calcPerf('lj', '0')).toBe('0');
});
test('Negative input Long Jump', () => {
  expect(calcPerfModule.calcPerf('lj', '-599')).toBe('0');
});

// Javelin Throw
test('Normal range Javelin Throw', () => {
  expect(calcPerfModule.calcPerf('jt', '691')).toBe('41.21');
});
test('Blank input Javelin Throw', () => {
  expect(calcPerfModule.calcPerf('jt', '0')).toBe('0');
});
test('Negative input Javelin Throw', () => {
  expect(calcPerfModule.calcPerf('jt', '-453')).toBe('0');
});

// 800 Meters
test('Normal range 800M', () => {
  expect(calcPerfModule.calcPerf('r800m', '1011')).toBe('2:06.90');
});
test('Blank input 800M', () => {
  expect(calcPerfModule.calcPerf('r800m', '0')).toBe('0');
});
test('Negative input 800M', () => {
  expect(calcPerfModule.calcPerf('r800m', '-832')).toBe('0');
});

// Bad Event Name
test('Bad event name', () => {
  expect(calcPerfModule.calcPerf('this-is-a-bad-event-name', '-832')).toBe('0');
});
