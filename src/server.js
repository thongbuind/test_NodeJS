import express from 'express';
import { engine } from 'express-handlebars';
import route from './routes/index.js';
import db from './config/db/index.js'

const app = express();
const port = 3000;

app.engine('handlebars', engine({
    helpers: {
        getElementByIndex: (array, index) => array[index]
    },
}));
app.set('view engine', 'handlebars');
app.set('views', 'src/resource/views');

route(app);
db.connect();

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})