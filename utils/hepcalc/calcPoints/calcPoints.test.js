const calcPointsModule = require('./calcPoints');

// 100 Hurdles
test('Normal range 100H', () => {
  expect(calcPointsModule.calcPoints('r100h', '13.35')).toBe('1072');
});
test('Blank input 100H', () => {
  expect(calcPointsModule.calcPoints('r100h', '0')).toBe('0');
});
test('Negative input 100H', () => {
  expect(calcPointsModule.calcPoints('r100h', '-15.25')).toBe('0');
});
test('Performance below 0-point threshold', () => {
  expect(calcPointsModule.calcPoints('r100h', '45.00')).toBe('0');
});

// High Jump
test('Normal range High Jump', () => {
  expect(calcPointsModule.calcPoints('hj', '1.81')).toBe('991');
});
test('Blank input High Jump', () => {
  expect(calcPointsModule.calcPoints('hj', '0')).toBe('0');
});
test('Negative input High Jump', () => {
  expect(calcPointsModule.calcPoints('hj', '-1.75')).toBe('0');
});
test('Performance below 0-point threshold', () => {
  expect(calcPointsModule.calcPoints('hj', '0.20')).toBe('0');
});

// Shot Put
test('Normal range Shot Put', () => {
  expect(calcPointsModule.calcPoints('sp', '14.13')).toBe('803');
});
test('Blank input Shot Put', () => {
  expect(calcPointsModule.calcPoints('sp', '0')).toBe('0');
});
test('Negative input Shot Put', () => {
  expect(calcPointsModule.calcPoints('sp', '-13.53')).toBe('0');
});
test('Performance below 0-point threshold', () => {
  expect(calcPointsModule.calcPoints('sp', '1.20')).toBe('0');
});

// 200 Meters
test('Normal range 200M', () => {
  expect(calcPointsModule.calcPoints('r200m', '23.85')).toBe('995');
});
test('Blank input 200M', () => {
  expect(calcPointsModule.calcPoints('r200m', '0')).toBe('0');
});
test('Negative input 200M', () => {
  expect(calcPointsModule.calcPoints('r200m', '-25.32')).toBe('0');
});
test('Performance below 0-point threshold', () => {
  expect(calcPointsModule.calcPoints('r200m', '80.00')).toBe('0');
});

// Long Jump
test('Normal range Long Jump', () => {
  expect(calcPointsModule.calcPoints('lj', '6.39')).toBe('972');
});
test('Blank input Long Jump', () => {
  expect(calcPointsModule.calcPoints('lj', '0')).toBe('0');
});
test('Negative input Long Jump', () => {
  expect(calcPointsModule.calcPoints('lj', '-5.99')).toBe('0');
});
test('Performance below 0-point threshold', () => {
  expect(calcPointsModule.calcPoints('lj', '0.30')).toBe('0');
});

// Javelin Throw
test('Normal range Javelin Throw', () => {
  expect(calcPointsModule.calcPoints('jt', '41.25')).toBe('691');
});
test('Blank input Javelin Throw', () => {
  expect(calcPointsModule.calcPoints('jt', '0')).toBe('0');
});
test('Negative input Javelin Throw', () => {
  expect(calcPointsModule.calcPoints('jt', '-43.53')).toBe('0');
});
test('Performance below 0-point threshold', () => {
  expect(calcPointsModule.calcPoints('jt', '2.00')).toBe('0');
});

// 800 Meters
test('Normal range 800M', () => {
  expect(calcPointsModule.calcPoints('r800m', '2:06.85')).toBe('1011');
});
test('Blank input 800M', () => {
  expect(calcPointsModule.calcPoints('r800m', '0')).toBe('0');
});
test('Negative input 800M', () => {
  expect(calcPointsModule.calcPoints('r800m', '-2:25.32')).toBe('0');
});
test('Performance below 0-point threshold', () => {
  expect(calcPointsModule.calcPoints('r800m', '6:00.00')).toBe('0');
});

// Bad Event Name
test('Bad event name', () => {
  expect(calcPointsModule.calcPoints('this-is-a-bad-event-name', '43.01')).toBe('0');
});
