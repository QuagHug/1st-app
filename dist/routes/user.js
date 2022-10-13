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
user.get('/profile/:id', (req, res) => {
    res.send('Showing user profile');
});
user.get('/product/:id', (req, res) => {
    res.send('Showing product by id' + req.params.id);
});
user.get('/product', (req, res) => {
    res.send('Showing list of product');
});
user.post('/login', (req, res) => {
    res.send('Showing login page');
});
user.post('/login/passwordchange', (req, res) => {
    res.send('Showing password changing page');
});
user.post('/register', (req, res) => {
    res.send('Showing register page');
});
user.post('/cart/:id', (req, res) => {
    res.send('Showing user cart');
});
user.post('/checkout/:id', (req, res) => {
    res.send('Showing user checkout');
});
exports.default = user;
