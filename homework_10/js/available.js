"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addAvailable(val) {
    return function (myClass) {
        return /** @class */ (function () {
            function class_1() {
                this.available = val;
            }
            return class_1;
        }());
    };
}
exports.addAvailable = addAvailable;
