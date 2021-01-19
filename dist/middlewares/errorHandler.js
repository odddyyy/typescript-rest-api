"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (err, req, res, next) => {
    console.log(`ERROR HANDLED\n`, err);
    switch (err.name) {
        case `QueryFailedError`:
            return res.status(400).json({ error: true, message: err.message });
        default:
            break;
    }
    res.status(err.statusCode).json({ error: true, message: err.message, error_data: err.data });
};
//# sourceMappingURL=errorHandler.js.map