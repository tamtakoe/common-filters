'use strict';

var filters = {
    toObject: function toObject(value) {
        return assign({}, value);
    },

    toArray: function toArray(value) {
        if (!isDefined(value)) {
            return [];
        }

        if (isPlainObject(value)) {
            return Object.keys(value).map(function (key) {
                return value[key];
            });
        }

        return Array.prototype.slice.call(value);
    },

    toNumber: toNumber,

    toFinite: toFinite,

    toInteger: function toInteger(value) {
        value = toFinite(value);
        var remainder = value % 1;

        return remainder ? value - remainder : value;
    },

    toString: function toString(value) {
        if (!isDefined(value)) {
            return '';
        }

        var result = String(value);

        return result == '0' && 1 / value == -1 / 0 ? '-0' : result;
    },

    toDate: function toDate(value, format) {
        var date = new Date(isDateTime(value) ? value : 0);
        // use format
        return date;
    },

    toBoolean: toBoolean,

    toUndefined: function toUndefined(value) {
        if (toBoolean(value)) {
            return value;
        }
    },

    //Number
    round: function round(value, _round) {
        if (isNumber(value) && (isNumber(_round) || isString(_round))) {
            value = Number(Math.round(value + 'e' + -_round) + 'e' + _round);
        }

        return value;
    },

    range: function range(value, options) {
        if (!isNumber(value) || value < options.from || value > options.to) {
            return options.default;
        }

        return value;
    },

    //String
    trim: function trim(value) {
        if (isString(value)) {
            return value.trim();
        }

        return value;
    },

    prefix: function prefix(value, _prefix) {
        if (isString(value)) {
            return _prefix + value;
        }

        return value;
    },

    postfix: function postfix(value, _postfix) {
        if (isString(value)) {
            return value + _postfix;
        }

        return value;
    },

    shorten: function shorten(value, length) {
        if (isString(value) && value.length > length) {
            return value.substring(0, length <= 3 ? length : length - 3) + (length <= 3 ? '' : '...');
        }

        return value;
    },

    toLowerCase: function toLowerCase(value) {
        if (isString(value)) {
            return value.toLowerCase();
        }

        return value;
    },

    toUpperCase: function toUpperCase(value) {
        if (isString(value)) {
            return value.toUpperCase();
        }

        return value;
    },

    toCamelCase: function toCamelCase(value) {
        if (isString(value)) {
            return value.replace(/^([A-Z])|[\s\-_](\w)/g, function (match, p1, p2) {
                if (p2) return p2.toUpperCase();
                return p1.toLowerCase();
            });
        }

        return value;
    },

    toSnakeCase: function toSnakeCase(value) {
        //TODO
        return value;
    },

    replace: function replace(value, options) {
        var replacement = typeof options.replacement === 'function' ? options.replacement : function () {
            return options.replacement;
        };

        if (isString(value)) {
            try {
                return value.replace(new RegExp(options.pattern), replacement);
            } catch (e) {
                console.error("replace error", e);
                return value;
            }
        }

        return value;
    },

    split: function split(value, seperator) {
        if (isString(value)) {
            return value.split(seperator);
        }

        return value;
    },

    indexOf: function indexOf(value) {
        if (isString(value)) {
            //TODO
        }

        return value;
    },

    //Format
    format: function format(value) {
        if (isString(value)) {
            //TODO
        }

        return value;
    },

    //Sanitize
    html2string: function html2string(value) {
        if (isString(value)) {
            //TODO
        }

        return value;
    },

    sanitizeEmail: function sanitizeEmail(value) {
        if (isString(value)) {
            //TODO
        }

        return value;
    },

    sanitizeUrl: function sanitizeUrl(value) {
        if (isString(value)) {
            //TODO
        }

        return value;
    },

    sanitizeString: function sanitizeString(value) {
        if (isString(value)) {
            //TODO
        }

        return value;
    },

    //Math
    hex2bin: function hex2bin(value) {
        if (isString(value)) {
            //TODO
        }

        return value;
    },

    //Array
    join: function join(value, seperator) {
        if (isArray(value)) {
            return value.join(seperator);
        }

        return value;
    },

    reverse: function reverse(value) {
        if (isArray(value) || isString(value)) {
            return value.reverse();
        }

        return value;
    },

    compact: function compact(value) {
        //TODO remove empty values
    }
};

/* Utils */
/**
 * Extend objects
 *
 * @param {Object} first argument
 * @param {Any} other arguments
 *
 * @returns {Object}
 */
function assign() {
    for (var i = 1; i < arguments.length; i++) {
        for (var k in arguments[i]) {
            if (arguments[i].hasOwnProperty(k)) arguments[0][k] = arguments[i][k];
        }
    }return arguments[0];
}

function toBoolean(value) {
    if (value === 'false' || value === 'undefined' || value === 'null' || value === 'off' || value === 'no' || toNumber(value) <= 0) {
        return false;
    }

    return Boolean(value);
}

function toNumber(value) {
    return Number(value);
}

function toFinite(value) {
    value = toNumber(value);

    return isNaN(value) ? 0 : value;
}

// Checks if the value is a number. This function does not consider NaN a
// number like many other `isNumber` functions do.
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// Returns false if the object is not a function
function isFunction(value) {
    return typeof value === 'function';
}

// A simple check to verify that the value is an integer. Uses `isNumber`
// and a simple modulo check.
function isInteger(value) {
    return isNumber(value) && value % 1 === 0;
}

// Checks if the value is a boolean
function isBoolean(value) {
    return typeof value === 'boolean';
}

// Uses the `Object` function to check if the given argument is an object.
function isObject(obj) {
    return obj === Object(obj);
}

function isPlainObject(value) {
    return {}.toString.call(value) === '[object Object]';
}

function isArray(value) {
    return {}.toString.call(value) === '[object Array]';
}

// Simply checks if the object is an instance of a date
function isDate(obj) {
    return obj instanceof Date;
}

function isDateTime(value) {
    return !isNaN(Date.parse(value));
}

function isString(value) {
    return typeof value === 'string';
}

// Returns false if the object is `null` of `undefined`
function isDefined(obj) {
    return obj !== null && obj !== undefined;
}

function addFilter(name, filter, params) {
    this[name] = function (value, arg, options) {
        var args = Array.prototype.slice.call(arguments, 2);
        var values = [value];

        if (arguments[1] === undefined || {}.toString.call(arguments[1]) === '[object Object]') {
            options = arguments[1] || {};
        } else {
            options = arguments[2] || {};
            options.arg = arguments[1];
            args.shift();
        }

        if (options.hasOwnProperty('arg')) {
            values.push(options.arg);
        }

        values.push(options);

        return filter.apply(this, values.concat(args));
    };
}

/* Class */

function Filters() {}

Filters.prototype.add = function (filterName, filter, params) {
    var _this = this;

    if (typeof filterName === 'string') {
        addFilter.call(this, filterName, filter, params);
    } else {
        Object.keys(filterName).forEach(function (key) {
            return addFilter.call(_this, key, filterName[key], filter);
        });
    }

    return this;
};

module.exports = new Filters().add(filters);