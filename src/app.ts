import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes/index';
import db from './config/mongo'

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors()); // Enable CORS

app.use(express.json()); // Enable req.body JSON type

app.use(router)

db().then(() => console.log('Connected to database'))

app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`));
