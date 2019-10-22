/**
 * Acts as an enhancement to the typeof operator by adding support for returning 'array' and 'null'
 * Based on typeOf util found in https://github.com/google/closure-library
 */
export default value => {
    let type = typeof value;
    if (type === 'object') {
        if (value) {
            if (value instanceof Array) {
                return 'array';
            } else if (value instanceof Object) {
                return type;
            }
            let name = Object.prototype.toString.call(value);
            if (name === '[object Window]') {
                return 'object';
            }
            if ((name === '[object Array]' ||
                typeof value.length === 'number' &&
                typeof value.splice !== 'undefined' &&
                typeof value.propertyIsEnumerable !== 'undefined'
                        && !value.propertyIsEnumerable('splice')
            )) {
                return 'array';
            }
            if ((name === '[object Function]' ||
                typeof value.call !== 'undefined' &&
                typeof value.propertyIsEnumerable !== 'undefined'
                        && !value.propertyIsEnumerable('call'))) {
                return 'function';
            }
        } else {
            return 'null';
        }
    } else if (type === 'function' && typeof value.call === 'undefined') {
        return 'object';
    }
    return type;
};
