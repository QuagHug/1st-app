import express from 'express';
const app = express();
const PORT = process.env.PORT || 4000;
const user = express.Router();

user.get('/', (req, res) => {
    res.send('User Server sending…');
})

user.get('/profile/:id', (req, res) => {
    res.send('Showing user profile');
})

user.get('/product/:id', (req, res) => {
    res.send('Showing product by id ' + req.params.id);
})

user.get('/product', (req, res) => {
    res.send('Showing list of product');
})

user.post('/login', (req, res) => {
    res.send('Showing login page');
})

user.post('/login/passwordchange', (req, res) => {
    res.send('Showing password changing page');
})

user.post('/register', (req, res) => {
    res.send('Showing register page');
})

user.post('/cart/:id', (req, res) => {
    res.send('Showing user cart');
})

user.post('/checkout/:id', (req, res) => {
    res.send('Showing user checkout');
})

export default user;