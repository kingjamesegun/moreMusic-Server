import express, { Response, Request } from 'express';
import cors from 'cors';
import SpotifyApi from 'spotify-web-api-node';

const app = express();
const port = 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

const spotifyApi = new SpotifyApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
});

spotifyApi.setAccessToken();

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
