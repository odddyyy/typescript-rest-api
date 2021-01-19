"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.today = void 0;
const today = () => {
    const temp = new Date().getTime() / 1000 + (7 * 3600);
    return new Date(temp * 1000);
};
exports.today = today;
//# sourceMappingURL=today.js.map