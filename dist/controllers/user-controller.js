"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsers = exports.CreateUser = void 0;
const models_1 = require("../database/models");
const helpers_1 = require("../helpers");
const responseHandler_1 = __importDefault(require("../middlewares/responseHandler"));
const CreateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const exist = yield models_1.Users.findOne({ where: { email } });
        if (exist)
            throw new Object({ statusCode: 400, message: `EMAIL_ALREADY_REGISTERED` });
        const user = new models_1.Users();
        user.name = name;
        user.email = email;
        user.password = yield helpers_1.bcrypt.hashPassword(String(password));
        user.registered_date = helpers_1.today();
        yield user.save();
    }
    catch (error) {
        return next(error);
    }
    responseHandler_1.default(res, 201, `NEW_USER_CREATED`, null);
});
exports.CreateUser = CreateUser;
const GetUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let users;
    try {
        users = yield models_1.Users.find();
    }
    catch (error) {
        return next(error);
    }
    responseHandler_1.default(res, 200, `GET_ALL_USERS`, users);
});
exports.GetUsers = GetUsers;
//# sourceMappingURL=user-controller.js.map