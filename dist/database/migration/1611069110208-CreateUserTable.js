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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1611069110208 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserTable1611069110208 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: `users`,
                columns: [{
                        name: `id`,
                        type: `integer`,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: `increment`
                    }, {
                        name: `name`,
                        type: `text`,
                        isNullable: false
                    }, {
                        name: `email`,
                        type: `text`,
                        isNullable: false,
                        isUnique: true
                    }, {
                        name: `password`,
                        type: `text`,
                        isNullable: false
                    }, {
                        name: `registered_date`,
                        type: `timestamp`,
                        isNullable: false,
                        default: `now()`
                    }]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable(`users`);
        });
    }
}
exports.CreateUserTable1611069110208 = CreateUserTable1611069110208;
//# sourceMappingURL=1611069110208-CreateUserTable.js.map