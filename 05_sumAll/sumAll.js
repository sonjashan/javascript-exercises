const sumAll = function (a, b) {
    // if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (typeof a !== 'number' || typeof b != 'number' || a <= 0 || b <= 0) return 'ERROR';
    if (a !== Math.floor(a) || b !== Math.floor(b)) return 'ERROR';
    let result = 0;
    let more = b > a ? b : a;
    let less = more === b ? a : b;
    for (let i = less; i <= more; i++) result += i;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
