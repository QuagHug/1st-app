"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const user = express_1.default.Router();
user.get('/', (req, res) => {
    res.send('User Server sending…');
});
user.get('/profile', (req, res) => {
    res.send('Showing user profile');
});
user.get('/product/:id', (req, res) => {
    res.send('Showing product by id');
    res.send(req.params);
});
user.post('/login', (req, res) => {
    res.send('Showing login page');
});
user.get('/login/passwordchange', (req, res) => {
    res.send('Showing password changing page');
});
user.post('/register', (req, res) => {
    res.send('Showing register page');
});
exports.default = user;
