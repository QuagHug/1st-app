import express from 'express';
import user from './routes/user';

const app = express();
const PORT = process.env.PORT || 4000;
app.get('/', (req, res) => {
  res.send('Express Server sending…');
});

app.use('/user', user);

app.listen({port: PORT}, (): void => {
  return console.log(`Server is running on port ${PORT}`)
})