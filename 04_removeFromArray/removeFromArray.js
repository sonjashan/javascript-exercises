// const removeFromArray = function (arr, ...targets) {
//     for (let t of targets) {
//         let idx = arr.indexOf(t);
//         while (idx !== -1) {
//             arr.splice(idx, 1);
//             idx = arr.indexOf(t);
//         }
//     }
//     return arr;
// };

const removeFromArray = function (arr, ...targets) {
    // return arr.filter(function (item) { return !targets.includes(item); });
    return arr.filter(item => !targets.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
