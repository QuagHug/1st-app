"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const seller = express_1.default.Router();
seller.get('/', (req, res) => {
    res.send('seller Server sending…');
});
seller.get('/dashboard', (req, res) => {
    res.send('Showing dashboard');
});
seller.post('/login', (req, res) => {
    res.send('Showing login page');
});
seller.post('/register', (req, res) => {
    res.send('Showing register page');
});
seller.put('/product', (req, res) => {
    res.send('Edit product');
});
seller.post('/product', (req, res) => {
    res.send('New product');
});
seller.delete('/product', (req, res) => {
    res.send('Delete product');
});
exports.default = seller;
