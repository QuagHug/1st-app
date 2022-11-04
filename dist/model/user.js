"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    age: 'Number',
    avatar: 'string',
    creditCardNumber: 'string',
    email: 'string',
    firstName: 'string',
    gender: 'string',
    lastName: 'string',
    phoneNumber: 'string',
    ssn: 'Number'
});
const User = mongoose_1.default.model('User', schema);
exports.default = User;
