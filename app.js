// app.js
import express from 'express';
import { PORT, NODE_ENV } from './config/env.js'; 
import auth from './routes/auth.route.js';
import subRoute from './routes/subs.route.js';
import userRoute from './routes/user.route.js';

const app = express();

app.use("app/v1/auth" , auth);
app.use("app/v1/subs" , subRoute);
app.use("app/v1/users" , userRoute);

app.get('/', (req, res) => {
  res.send(`Bienvenue sur le serveur en mode ${NODE_ENV}`);
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT} [${NODE_ENV}]`);
});
