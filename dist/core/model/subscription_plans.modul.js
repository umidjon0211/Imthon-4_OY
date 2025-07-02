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
exports.Subscriptions_Plans_Model = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const user_subscriptions_modul_1 = require("./user_subscriptions.modul");
let Subscriptions_Plans_Model = class Subscriptions_Plans_Model extends sequelize_typescript_1.Model {
    Id;
    name;
    price;
    duration_days;
    features;
    is_active;
    user_subscriptions;
};
exports.Subscriptions_Plans_Model = Subscriptions_Plans_Model;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    }),
    __metadata("design:type", String)
], Subscriptions_Plans_Model.prototype, "Id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Subscriptions_Plans_Model.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.DECIMAL(10, 2)
    }),
    __metadata("design:type", Number)
], Subscriptions_Plans_Model.prototype, "price", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Subscriptions_Plans_Model.prototype, "duration_days", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.JSON
    }),
    __metadata("design:type", String)
], Subscriptions_Plans_Model.prototype, "features", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true
    }),
    __metadata("design:type", Boolean)
], Subscriptions_Plans_Model.prototype, "is_active", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => user_subscriptions_modul_1.User_Subscriptions_Model),
    __metadata("design:type", Array)
], Subscriptions_Plans_Model.prototype, "user_subscriptions", void 0);
exports.Subscriptions_Plans_Model = Subscriptions_Plans_Model = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: "Subscriptions_Plan" })
], Subscriptions_Plans_Model);
//# sourceMappingURL=subscription_plans.modul.js.map