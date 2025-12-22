import express from 'express'
import db from './db.js';
import cors from 'cors'
import dotenv from 'dotenv'
import taskRouter from './routes/taskRouts.js';
import path from 'path'
import { fileURLToPath } from 'url';

dotenv.config({ path : '.env'});

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173']
}))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/api/tasks', taskRouter);

const buildPath = path.join(__dirname, '../client/dist');
app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

db.getConnection((err, result) => {
    if (err) {
        console.log(err)
        process.exit(1);
    }

    app.listen(PORT, () => {
        console.log('server đang chạy!')
    })
})