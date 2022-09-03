import express from 'express';
import cors from 'cors';
import { env } from 'process';
import db from './database/db';

const database = db;
const app = express();
const cors = cors()

const puerto = process.env.PUERTO || 8000;
