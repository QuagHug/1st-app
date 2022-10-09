import express from 'express';
const app = express();
const PORT = process.env.PORT || 4000;
const seller = express.Router();

seller.get('/', (req, res) => {
    res.send('seller Server sending…');
})

seller.get('/product/dashboard', (req, res) => {
    res.send('Showing dashboard');
})

seller.post('/product/login', (req, res) => {
    res.send('Showing login page');
})

seller.post('/product/register', (req, res) => {
    res.send('Showing register page');
})

export default seller;