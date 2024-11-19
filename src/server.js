import express from 'express';
import { engine } from 'express-handlebars';
import route from './routes/index.js';
import db from './config/db/index.js'

const app = express();
const port = 3000;

// Middleware để parse JSON và URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Idea for new Algorithm web
// 0. Sử dụng NodeJS, ReactJS, MySQL.
// 1. Lý thuyết kèm slide.
// 2. Vẫn giữ lại 1 số minh hoạ hay đã phát triển, thêm mô tả xịn xò.
// 3. Thêm CRUD.
// 4. Sử dụng JWT để xác thực, cho thêm tính năng tạo tài khoản sử dụng.
