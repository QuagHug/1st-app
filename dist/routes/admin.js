"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const admin = express_1.default.Router();
admin.get('/', (req, res) => {
    res.send('admin Server sending…');
});
admin.get('/dashboard', (req, res) => {
    res.send('Showing dashboard');
});
admin.post('/login', (req, res) => {
    res.send('Showing login page');
});
admin.post('/register', (req, res) => {
    res.send('Showing register page');
});
exports.default = admin;
