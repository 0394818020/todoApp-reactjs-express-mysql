import express from 'express'
import db from './db.js';
import cors from 'cors'
import dotenv from 'dotenv'
import taskRouter from './routes/taskRouts.js';

dotenv.config({ path : '.env'});

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5173']
}))

app.use(taskRouter);

db.getConnection((err, result) => {
    if (err) {
        console.log(err)
        process.exit(1);
    }

    app.listen(PORT, () => {
        console.log('server đang chạy!')
    })
})