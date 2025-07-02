"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lang = exports.Subscription_type = exports.Payment_Status = exports.Payment_Method = exports.Status = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["SUPERADMIN"] = "SUPERADMIN";
    UserRole["USER"] = "USER";
})(UserRole || (exports.UserRole = UserRole = {}));
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status["EXPIRED"] = "expired";
    Status["CANCELED"] = "canceled";
    Status["PENDING_PAYMENT"] = "pending_payment";
})(Status || (exports.Status = Status = {}));
var Payment_Method;
(function (Payment_Method) {
    Payment_Method["CARD"] = "card";
    Payment_Method["PAYPAL"] = "paypal";
    Payment_Method["BANK_TRANSFER"] = "bank_transfer";
    Payment_Method["CRYPTO"] = "crypto";
})(Payment_Method || (exports.Payment_Method = Payment_Method = {}));
var Payment_Status;
(function (Payment_Status) {
    Payment_Status["PENDING"] = "pending";
    Payment_Status["COMPLETED"] = "completed";
    Payment_Status["FAILED"] = "failed";
    Payment_Status["REFUNDED"] = "refunded";
})(Payment_Status || (exports.Payment_Status = Payment_Status = {}));
var Subscription_type;
(function (Subscription_type) {
    Subscription_type["FREE"] = "free";
    Subscription_type["PREMIUM"] = "premium";
})(Subscription_type || (exports.Subscription_type = Subscription_type = {}));
var Lang;
(function (Lang) {
    Lang["UZB"] = "uzb";
    Lang["EN"] = "eng";
    Lang["RU"] = "rus";
})(Lang || (exports.Lang = Lang = {}));
//# sourceMappingURL=user.types.js.map