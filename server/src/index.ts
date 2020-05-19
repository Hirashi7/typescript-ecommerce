import * as dotenv from 'dotenv';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

dotenv.config();

mongoose.connect(
    'mongodb+srv://typeshopdb:' + process.env.DB_PASSWORD + '@typeshop-5u9aw.mongodb.net/test?retryWrites=true&w=majority',
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
);

const app: express.Application = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hejka')
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});