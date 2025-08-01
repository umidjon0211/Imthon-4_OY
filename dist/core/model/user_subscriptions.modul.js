"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_Subscriptions_Model = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const user_modul_1 = require("./user.modul");
const subscription_plans_modul_1 = require("./subscription_plans.modul");
const user_types_1 = require("../types/user.types");
const payments_modul_1 = require("./payments.modul");
let User_Subscriptions_Model = class User_Subscriptions_Model extends sequelize_typescript_1.Model {
    Id;
    user_id;
    user;
    plan_id;
    subscriptions;
    start_date;
    end_date;
    status;
    auto_renew;
    payments;
};
exports.User_Subscriptions_Model = User_Subscriptions_Model;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], User_Subscriptions_Model.prototype, "Id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_modul_1.UserModel),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.DataTypes.UUID }),
    __metadata("design:type", String)
], User_Subscriptions_Model.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_modul_1.UserModel),
    __metadata("design:type", user_modul_1.UserModel)
], User_Subscriptions_Model.prototype, "user", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => subscription_plans_modul_1.Subscriptions_Plans_Model),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.DataTypes.UUID }),
    __metadata("design:type", String)
], User_Subscriptions_Model.prototype, "plan_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => subscription_plans_modul_1.Subscriptions_Plans_Model),
    __metadata("design:type", subscription_plans_modul_1.Subscriptions_Plans_Model)
], User_Subscriptions_Model.prototype, "subscriptions", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    }),
    __metadata("design:type", Date)
], User_Subscriptions_Model.prototype, "start_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.DATE,
    }),
    __metadata("design:type", Date)
], User_Subscriptions_Model.prototype, "end_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.ENUM(...Object.values(user_types_1.Status)),
        defaultValue: user_types_1.Status.PENDING_PAYMENT
    }),
    __metadata("design:type", String)
], User_Subscriptions_Model.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    }),
    __metadata("design:type", Boolean)
], User_Subscriptions_Model.prototype, "auto_renew", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => payments_modul_1.Payments_Model),
    __metadata("design:type", Array)
], User_Subscriptions_Model.prototype, "payments", void 0);
exports.User_Subscriptions_Model = User_Subscriptions_Model = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "User_Subscriptions" })
], User_Subscriptions_Model);
//# sourceMappingURL=user_subscriptions.modul.js.map