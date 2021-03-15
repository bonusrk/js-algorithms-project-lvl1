import { test, expect } from '@jest/globals';
import engine from '../index.js';

const arr = [
  {
    id: 'doc1',
    text: 'I am one, the only one, not two',
  },
  {
    id: 'doc2',
    text: 'I am two, the only two, and not a three',
  },
  {
    id: 'doc3',
    text: 'I am three, the only the three',
  },
];

test('engine', () => {
  const miniGoogle = engine(arr);
  expect(miniGoogle.search('one').length).toEqual(1);
  expect(miniGoogle.search('one')).toStrictEqual([arr[0].id]);
  expect(miniGoogle.search('two!')).toStrictEqual(['doc2', 'doc1']);
  expect(miniGoogle.search('three')).toStrictEqual(['doc3', 'doc2']);
  expect(miniGoogle.search('duck')).toStrictEqual([]);
  expect(miniGoogle.search('the')).toStrictEqual(['doc3', 'doc1', 'doc2']);
});
