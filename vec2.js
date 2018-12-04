"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_1 = /** @class */ (function () {
    function default_1(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(default_1.prototype, "modulus", {
        get: function () {
            return Math.sqrt(this._x * this._x + this._y * this._y);
        },
        enumerable: true,
        configurable: true
    });
    return default_1;
}());
exports.default = default_1;
//# sourceMappingURL=vec2.js.map