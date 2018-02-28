Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// function clone(obj) {
//     // Handle the 3 simple types, and null or undefined
//     if (null == obj || "object" != typeof obj) return obj;

//     // Handle Date
//     if (obj instanceof Date) {
//         var copy = new Date();
//         copy.setTime(obj.getTime());
//         return copy;
//     }

//     // Handle Array
//     if (obj instanceof Array) {
//         var copy = [];
//         for (var i = 0, len = obj.length; i < len; i++) {
//             copy[i] = clone(obj[i]);
//         }
//         return copy;
//     }

//     // Handle Object
//     if (obj instanceof Object) {
//         var copy = {};
//         for (var attr in obj) {
//             if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
//         }
//         return copy;
//     }

//     throw new Error("Unable to copy obj! Its type isn't supported.");
// }

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max+1 - min)) + min; //The maximum is exclusive and the minimum is inclusive
}