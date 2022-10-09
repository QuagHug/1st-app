import express from 'express';
const app = express();
const PORT = process.env.PORT || 4000;
const user = express.Router();

user.get('/', (req, res) => {
    res.send('User Server sending…');
})

export default user;