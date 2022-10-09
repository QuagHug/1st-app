"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
    res.send('Express Server sending…');
});
app.use('/user', user_1.default);
app.listen({ port: PORT }, () => {
    return console.log(`Server is running on port ${PORT}`);
});
