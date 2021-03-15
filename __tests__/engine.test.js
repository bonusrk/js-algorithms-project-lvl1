import { test, expect } from '@jest/globals';
import engine from '../index.js';

const arr = [
  {
    id: 'doc1',
    text: 'I am one, the only one!',
  },
  {
    id: 'doc2',
    text: 'I am two, the only two',
  },
  {
    id: 'doc3',
    text: 'I am three, the only three',
  },
];

test('engine', () => {
  const miniGoogle = engine(arr);
  expect(miniGoogle.search('one').length).toEqual(1);
  expect(miniGoogle.search('one')).toStrictEqual([arr[0].id]);
  expect(miniGoogle.search('two!')).toStrictEqual([arr[1].id]);
  expect(miniGoogle.search('duck')).toStrictEqual([]);
  expect(miniGoogle.search('the')).toStrictEqual(['doc1', 'doc2', 'doc3']);
});
