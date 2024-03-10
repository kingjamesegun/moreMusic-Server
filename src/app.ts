import express from 'express';
import cors from 'cors';
const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
