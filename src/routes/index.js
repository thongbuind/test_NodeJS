import courseRouter from './courseRouter.js';

export default function route(app) {
    
    app.use('/course', courseRouter);

    app.get('/', (req, res) => {
        res.render('home');
    })

}
