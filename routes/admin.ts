import express from 'express';
const app = express();
const PORT = process.env.PORT || 4000;
const admin = express.Router();

admin.get('/', (req, res) => {
    res.send('admin Server sending…');
})

admin.get('/dashboard', (req, res) => {
    res.send('Showing dashboard');
})

admin.post('/login', (req, res) => {
    res.send('Showing login page');
})

admin.post('/register', (req, res) => {
    res.send('Showing register page');
})

export default admin;