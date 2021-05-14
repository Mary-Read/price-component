const test = require('../Client/src/app.jsx');
const { TestScheduler } = require('@jest/core');

it('App shoudl be a Function', () => {
  expect(typeof test).toBe('function');
});