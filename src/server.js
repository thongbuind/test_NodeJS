import express from 'express';
import { engine } from 'express-handlebars';
import route from './routes/index.js';
import db from './config/db/index.js';

const app = express();
const port = 3000;

// // Middleware để parse JSON và URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'src/resource/views');

route(app);
db.connect();

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})