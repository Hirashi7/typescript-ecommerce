import * as dotenv from 'dotenv';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

import appRoutes from './routes';

dotenv.config();

const app: express.Application = express();

/* ================= DB Connection ================= */
mongoose.connect(
    'mongodb+srv://typeshopdb:' + process.env.DB_PASSWORD + '@typeshop-5u9aw.mongodb.net/test?retryWrites=true&w=majority',
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
);

/* ================= CORS ================= */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

/* ================= File handling ================= */
//app.use('/uploads', express.static('uploads'));


/* ================= JSON Parser ================= */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* ================= Routes ================= */
app.use('/api', appRoutes);

/* ================= Error handler ================= */
app.use((req, res, next) => {
    const error: any = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(error);
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});