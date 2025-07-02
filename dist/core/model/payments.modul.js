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
exports.Payments_Model = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const user_subscriptions_modul_1 = require("./user_subscriptions.modul");
const user_types_1 = require("../types/user.types");
let Payments_Model = class Payments_Model extends sequelize_typescript_1.Model {
    Id;
    user_subscription_id;
    user_subscription;
    amount;
    payment_method;
    payment_details;
    status;
    external_transaction_id;
};
exports.Payments_Model = Payments_Model;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Payments_Model.prototype, "Id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => user_subscriptions_modul_1.User_Subscriptions_Model),
    (0, sequelize_typescript_1.Column)({ type: sequelize_1.DataTypes.UUID }),
    __metadata("design:type", String)
], Payments_Model.prototype, "user_subscription_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => user_subscriptions_modul_1.User_Subscriptions_Model),
    __metadata("design:type", user_subscriptions_modul_1.User_Subscriptions_Model)
], Payments_Model.prototype, "user_subscription", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
    }),
    __metadata("design:type", Number)
], Payments_Model.prototype, "amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.ENUM(...Object.values(user_types_1.Payment_Method))
    }),
    __metadata("design:type", String)
], Payments_Model.prototype, "payment_method", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.JSON,
    }),
    __metadata("design:type", String)
], Payments_Model.prototype, "payment_details", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.ENUM(...Object.values(user_types_1.Payment_Status))
    }),
    __metadata("design:type", String)
], Payments_Model.prototype, "status", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Payments_Model.prototype, "external_transaction_id", void 0);
exports.Payments_Model = Payments_Model = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "Payments" })
], Payments_Model);
//# sourceMappingURL=payments.modul.js.map