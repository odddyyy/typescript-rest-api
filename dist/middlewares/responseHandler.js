"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (res, statusCode, message, data) => {
    return res.status(statusCode).json({ error: false, message, data });
};
//# sourceMappingURL=responseHandler.js.map