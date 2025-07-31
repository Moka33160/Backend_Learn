// app.js
import express from 'express';
import { PORT, NODE_ENV } from './config/env.js'; // Chemin à adapter

const app = express();

app.get('/', (req, res) => {
  res.send(`Bienvenue sur le serveur en mode ${NODE_ENV}`);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT} [${NODE_ENV}]`);
});
