import { test, expect } from '@jest/globals';
import engine from '../index.js';

const arr = [
  {
    id: 1,
    text: 'I am one, the only one',
  },
  {
    id: 2,
    text: 'I am two, the only two',
  },
  {
    id: 2,
    text: 'I am three, the only three',
  },
];

test('engine', () => {
  const miniGoogle = engine(arr);
  expect(miniGoogle.search('one').length).toEqual(1);
  expect(miniGoogle.search('one')).toStrictEqual([arr[0]]);
  expect(miniGoogle.search('duck')).toStrictEqual([]);
  expect(miniGoogle.search('the')).toStrictEqual(arr);
});
