import 'jasmine';
import typeOf from '../src';

describe("typeOf", () => {
    it("should return 'array' for an array value", () => {
        expect(typeOf([])).toBe('array');
        expect(typeOf(['a'])).toBe('array');
    });

    it("should return 'object' for an object value", () => {
        expect(typeOf({})).toBe('object');
        expect(typeOf(new Object())).toBe('object');
        expect(typeOf({'foo': 'bar'})).toBe('object');

        // invalid function should be treated as an object
        const noCall = () => {};
        noCall.call = undefined;
        expect(typeOf(noCall)).toBe('object');
    });

    it("should return 'function' for a function value", () => {
        expect(typeOf(() => {})).toBe('function');
    });

    it("should return 'null' for a null value", () => {
        expect(typeOf(null)).toBe('null');
    });

    it("should return 'undefined' for an undefined value", () => {
        expect(typeOf(undefined)).toBe('undefined');
    });

    it("should return 'boolean' for an boolean value", () => {
        expect(typeOf(true)).toBe('boolean');
        expect(typeOf(false)).toBe('boolean');
    });

    it("should return 'number' for a number value", () => {
        expect(typeOf(5)).toBe('number');
        expect(typeOf(5.55)).toBe('number');
    });

    it("should return 'string' for a string value", () => {
        expect(typeOf('')).toBe('string');
        expect(typeOf('foo')).toBe('string');
    });

    it("should return 'symbol' for a Symbol value", () => {
        expect(typeOf(Symbol())).toBe('symbol');
    });
});
