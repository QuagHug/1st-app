import express from 'express';
const app = express();
const PORT = process.env.PORT || 4000;
const user = express.Router();

user.get('/', (req, res) => {
    res.send('User Server sending…');
})

user.get('/profile', (req, res) => {
    res.send('Showing server profile');
})

user.get('/product/:id', (req, res) => {
    res.send('Showing product by id');
})

user.post('/product/login', (req, res) => {
    res.send('Showing login page');
})

user.post('/product/register', (req, res) => {
    res.send('Showing register page');
})

export default user;