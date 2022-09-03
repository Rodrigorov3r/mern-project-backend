import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import rutas from './routes/routes.js';

const app = express();

const puerto = 8000;

app.listen(puerto, () => console.log(`se enconecto al puerto ${puerto} --> http://localhost:8000/`));

app.use(express.json());
app.use(cors());
app.use('/blogs', rutas);

try {
  await db.authenticate();
  console.log('te conectaste al bd mostro...');
} catch (error) {
  console.error('error bd maestro...', error);
}

app.get('/', (req, res) => res.send('test conexion...'));
