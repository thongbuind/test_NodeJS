import courseModel from '../models/courseModel.js';

class courseController {
    // [GET] /course
    async index(req, res) {
        const data = await courseModel.find({});
        const courses = data.map(course => course.toObject());
        res.render('course/index', { data: courses });
    }
    // [GET] /course/:slug
    async show(req, res) {
        const data = await courseModel.findOne({ slug: req.params.slug });
        const course = data.toObject();
        res.render('course/show', { data: course });
    }
    // [GET] /course/create
    async create(req, res) {
        res.render('course/create');
    }
    // [POST] /course/store
    async store(req, res) {
        try {
            const course = new courseModel({
                title: req.body.title,
                description: req.body.description,
                slug: req.body.slug
            });
            await course.save();
            res.status(201).redirect('/course');
        } catch (error) {
            res.status(500).json({ message: 'Error creating course', error });
        }
    }
}

export default new courseController();
