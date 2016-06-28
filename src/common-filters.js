const filters = {
    toObject: function(value) {
        return Object.assign({}, value);
    },

    toArray: function(value) {
        if (!isDefined(value)) {
            return [];
        }
        
        if (isPlainObject(value)) {
            return Object.keys(value).map(key => value[key]);
        }
        
        return Array.prototype.slice.call(value);
    },

    toNumber: function(value) {
        return Number(value);
    },

    toFinite: function(value) {
        value = this.toNumber(value) ;
        
        return isNaN(value) ? 0 : value;
    },

    toInteger: function(value) {
        value = this.toFinite(value);
        var remainder = value % 1;

        return remainder ? value - remainder : value;
    },

    toString: function(value) {
        if (!isDefined(value)) {
            return '';
        }

        var result = String(value);

        return (result == '0' && (1/value) == -1/0) ? '-0' : result;
    },

    toDate: function(value, format) {
        var date = new Date(isDateTime(value) ? value : 0);
        // use format
        return date;
    },

    toBoolean: function(value) {
        if (value === 'false' || value === 'undefined' || value === 'null' || value === 'off' || value === 'no' || this.toNumber(value) <= 0) {
            return false;
        }

        return Boolean(value);
    },

    toUndefined: function(value) {
        if (this.toBoolean(value)) {
            return value;
        }
    },

    //Number
    round: function(value, round) {
        if (isNumber(value) && (isNumber(round) || isString(round))) {
            value = Number(Math.round(value + 'e' + -round) + 'e' + round);
        }

        return value;
    },

    range: function(value, options) {
        if (!isNumber(value) || value < options.from || value > options.to) {
            return options.default
        }

        return value;
    },

    //String
    trim: function(value) {
        if (isString(value)) {
            return value.trim();
        }

        return value;
    },

    prefix: function(value, prefix) {
        if (isString(value)) {
            return prefix + value;
        }

        return value;
    },

    postfix: function(value, postfix) {
        if (isString(value)) {
            return value + postfix;
        }

        return value;
    },

    shorten: function(value, length) {
        if (isString(value) && value.length > length) {
            return value.substring(0, length <= 3 ? length : length - 3) + (length <= 3 ? '' : '...');
        }

        return value;
    },

    toLowerCase: function(value) {
        if (isString(value)) {
            return value.toLowerCase();
        }

        return value;
    },

    toUpperCase: function(value) {
        if (isString(value)) {
            return value.toUpperCase();
        }

        return value;
    },

    toCamelCase: function(value) {
        if (isString(value)) {
            return value.replace(/^([A-Z])|[\s\-_](\w)/g, function(match, p1, p2) {
                if (p2) return p2.toUpperCase();
                return p1.toLowerCase();
            });
        }

        return value;
    },

    toSnakeCase: function(value) {
        //TODO
        return value;
    },

    replace: function(value, options) {
        var replacement = typeof options.replacement === 'function' ? options.replacement : function() {
            return options.replacement;
        };

        if (isString(value)) {
            try {
                return value.replace(new RegExp(options.pattern), replacement);
            } catch(e) {
                console.error("replace error", e);
                return value;
            }
        }

        return value;
    },

    split: function(value, seperator) {
        if (isString(value)) {
            return value.split(seperator);
        }

        return value;
    },

    indexOf: function(value) {
        if (isString(value)) {
            //TODO
        }

        return value;
    },

    //Format
    format: function(value) {
        if (isString(value)) {
            //TODO
        }

        return value;
    },

    //Sanitize
    html2string: function(value) {
        if (isString(value)) {
            //TODO
        }

        return value;
    },

    sanitizeEmail: function(value) {
        if (isString(value)) {
            //TODO
        }

        return value;
    },

    sanitizeUrl: function(value) {
        if (isString(value)) {
            //TODO
        }

        return value;
    },

    sanitizeString: function(value) {
        if (isString(value)) {
            //TODO
        }

        return value;
    },

    //Math
    hex2bin: function(value) {
        if (isString(value)) {
            //TODO
        }

        return value;
    },

    //Array
    join: function(value, seperator) {
        if (isArray(value)) {
            return value.join(seperator);
        }

        return value;
    },

    reverse: function(value) {
        if (isArray(value) || isString(value)) {
            return value.reverse();
        }

        return value;
    }
};


/* Utils */

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

/* Class */

function Filters() {}

Filters.prototype.add = function(name, filter) {
    this[name] = function(value, arg, options) {
        var args = Array.prototype.slice.call(arguments, 2);
        var values = [value];

        if (arguments[1] === undefined || ({}).toString.call(arguments[1]) === '[object Object]') {
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

    return this;
};

Filters.prototype.load = function(filtersObj) {
    Object.keys(filtersObj).forEach(key => this.add(key, filtersObj[key]));

    return this;
};

module.exports = (new Filters()).load(filters);