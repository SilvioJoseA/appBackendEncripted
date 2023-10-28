import express from 'express';
import { PORT } from './config.js';
import cors from 'cors';
import routerUser from './routes/user.routes.js'

const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(routerUser);

app.listen(PORT,() => console.log(`Listen on port ${PORT}`));
