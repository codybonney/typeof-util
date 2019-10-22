import test from 'ava';
import typeOf from '../src';

test('returns "array" when given an array value', t => {
    t.is('array', typeOf([]));
    t.is('array', typeOf(['a']));
});

test('returns "object" when given an object value', t => {
    t.is('object', typeOf({}));
    t.is('object', typeOf({'foo': 'bar'}));
});

test('returns "function" when given a function value', t => {
    t.is('function', typeOf(() => {}));
});

test('returns "null" when given a null value', t => {
    t.is('null', typeOf(null));
});

test('returns "undefined" when given a undefined value', t => {
    t.is('undefined', typeOf(undefined));
});

test('returns "boolean" when given a boolean value', t => {
    t.is('boolean', typeOf(true));
    t.is('boolean', typeOf(false));
});

test('returns "number" when given a number value', t => {
    t.is('number', typeOf(3));
    t.is('number', typeOf(3.14));
});

test('returns "string" when given a string value', t => {
    t.is('string', typeOf(''));
    t.is('string', typeOf('foo'));
});

test('returns "symbol" when given a Symbol value', t => {
    t.is('symbol', typeOf(Symbol()));
});
