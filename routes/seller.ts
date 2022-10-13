import express from 'express';
const app = express();
const PORT = process.env.PORT || 4000;
const seller = express.Router();

seller.get('/', (req, res) => {
    res.send('seller Server sending…');
})

seller.get('/dashboard', (req, res) => {
    res.send('Showing dashboard');
})

seller.post('/login', (req, res) => {
    res.send('Showing login page');
})

seller.post('/register', (req, res) => {
    res.send('Showing register page');
})

seller.put('/product', (req, res) => {
    res.send('Edit product');
})

seller.post('/product', (req, res) => {
    res.send('New product');
})

seller.delete('/product', (req, res) => {
    res.send('Delete product');
})

export default seller;