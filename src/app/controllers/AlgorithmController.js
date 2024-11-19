import algorithmModel from '../models/algorithmModel.js'

class AlgorithmController {
    // [GET] /
    async index(req, res) {
        try {
            const data = await algorithmModel.find({});
            const algorithms = data.map(algorythm => algorythm.toObject());
            res.render('home', { data: algorithms });
        } catch (error) {
            res.status(500).json({ message: 'ERROR' });
        }
    }
    // [GET] /:slug/theory
    async showTheory(req, res) {
        try {
            const data = await algorithmModel.findOne({ slug: req.params.slug });
            res.render('algorithm/showTheory', { data: JSON.stringify(data) });
        } catch (error) {
            res.status(500).json({ message: 'ERROR' });
        }
    }
    // [GET] /:slug/sample
    async showSample(req, res) {
        try {
            const data = await algorithmModel.findOne({ slug: req.params.slug });
            res.render('algorithm/showSample', { data: JSON.stringify(data) });
        } catch (error) {
            res.status(500).json({ message: 'ERROR' });
        }
    }
    // [GET] /:slug/example
    async showExample(req, res) {
        try {
            const data = await algorithmModel.findOne({ slug: req.params.slug });
            res.render('layouts/showExample', { data: JSON.stringify(data) });
        } catch (error) {
            res.status(500).json({ message: 'ERROR' });
        }
    }
    // [GET] /:slug/example/:detail
    async showExampleDetail(req, res) {
        try {
            const data = await algorithmModel.findOne({ slug: req.params.slug });
            const path = `${req.params.slug}/example/${req.params.detail}`;
            res.render('layouts/showExample', {
                data: JSON.stringify(data),
                path: path
            });
        } catch (error) {
            res.status(500).json({ message: 'ERROR' });
        }
    }
    // [GET] /:slug/note
    async showNote(req, res) {
        try {
            const data = await algorithmModel.findOne({ slug: req.params.slug });
            const algorythm = data.toObject();
            res.render('algorithm/showNote', { data: algorythm });
        } catch (error) {
            res.status(500).json({ message: 'ERROR' });
        }
    }
    // [GET] /create
    async create(req, res) {
        try {
            res.render('algorithm/create');
        } catch (error) {
            res.status(500).json({ message: 'ERROR' });
        }
    }
    // [POST] /store
    async store(req, res) {
        try {
            // tạo những array options, theory, examples lấy dữ liệu từ form để cho vào algorithm
            const options = ["theory", "sample-code", "example", "note"];
            const theory = [];
            document.querySelectorAll('.theory-item').forEach(function(e) {
                
            });

            const algorithm = new algorithmModel({
                name: req.body.name,
                options: options,
                theory: theory,
                examples: examples,
                slug: req.body.slug
            });
            await algorithm.save();
            res.status(200).redirect(`/${req.body.slug}/theory`);
        } catch (error) {
            res.status(500).json({ message: 'ERROR' });
        }
    }
}
2
export default new AlgorithmController();