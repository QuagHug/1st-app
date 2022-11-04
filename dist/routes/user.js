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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../model/user"));
const mongodb_1 = require("mongodb");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const user = express_1.default.Router();
user.get('/', (req, res) => {
    res.send('User Server sending…');
});
user.get('/profile/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user_ = yield user_1.default.findOne({ _id: new mongodb_1.ObjectId(req.params.id) });
    if (user_ != null) {
        res.send(user_.firstName);
    }
    else {
        res.status(404).send('user not found');
    }
}));
user.get('/product/:id', (req, res) => {
    res.send('Showing product by id ' + req.params.id);
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
