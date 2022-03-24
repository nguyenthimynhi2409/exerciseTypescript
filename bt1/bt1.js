var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fs = require("fs");
var promisify = function (func) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            return func.apply(void 0, __spreadArray(__spreadArray([], args, false), [function (err, result) {
                    return err ? reject(err) : resolve(result);
                }], false));
        });
    };
};
var readFilePromise = promisify(fs.readFile);
readFilePromise("./bt1.ts")
    .then(function (result) { return console.log("success reading file\r\n", String(result)); })["catch"](function (error) { return console.error("error reading file", error); });
