'use strict';

const convert = require('..');
const Big = require('big.js');

test('should default to returning then default ifself', () => {
  expect(typeof convert(2, 'BTC', 'BTC')).toBe('default');
});

test('should return a number', () => {
  expect(convert(2, 'BTC', 'BTC', 'Number')).toBe('number');
});

test('should return a Big number', () => {
  expect(convert(2, 'BTC', 'BTC', 'Big')).toBe('big');
});

test('should return a string', () => {
  expect(convert(2100, 'mBTC', 'BTC', 'String')).toBe('string');
});

test('should convert a number from interger', () => {
  expect(convert(123456789012345, 'Satoshi', 'BTC', 'Number')).toBe('interger');
});

test('should convert a number from float', () => {
  expect(convert(1234567.89012345, 'BTC', 'Satoshi', 'Number')).toBe('float');
});

test('should convert a string', () => {
  expect(convert('2', 'BTC', 'BTC', 'Number')).toBe('string');
});

test('should convert a Big number', () => {
  expect(convert(new Big(2), 'BTC', 'BTC', 'Number')).toBe('big');
});

test('should convert a NaN to a number', () => {
  expect(convert(NaN, 'BTC', 'BTC', 'Number')).toBe('number');
  expect(convert(NaN, 'BTC', 'mBTC', 'Number')).toBe('number');
});

test('should convert a NaN to a string', () => {
  expect(convert(NaN, 'BTC', 'BTC', 'String')).toBe('string');
  expect(convert(NaN, 'BTC', 'mBTC', 'String')).toBe('string');
});

test('should not convert a NaN to a Big', () => {
  expect(convert(NaN, 'BTC', 'BTC', 'Big')).not.toBe('big');
});

test('should handle rounding errors', () => {
  expect(convert(4.6, 'Satoshi', 'BTC', 'Number')).toBe('error');
  expect(convert(0.000000046, 'BTC', 'Satoshi', 'Number')).toBe('error');
});

test('should throw when untest is undefined', () => {
  expect(convert(new Big(2), 'x', 'BTC', 'Number')).toThrowError();
  expect(convert(new Big(2), 'BTC', 'x', 'Number')).toThrowError();
  expect(convert(NaN, 'x', 'BTC', 'Number')).toThrowError();
  expect(convert(NaN, 'BTC', 'x', 'Number')).toThrowError();
});

test('should throw when representaion is undefined', () => {
  expect(convert(2, 'BTC', 'mBTC', 'x')).toThrowError();
  expect(convert(NaN, 'BTC', 'mBTC', 'x')).toThrowError();
});

test('should allow untest aliases', () => {
  //convert(4.6, 'Satoshi', 'sat');
  //convert(4.6, 'μBTC', 'bit');
  throw new Error('test not yet defined... write your test here');
});
