import algorithmModel from '../models/algorithmModel.js'

class AlgorithmController {
    async index(req, res) {
        try {
            const data = await algorithmModel.find({});
            const algorithms = data.map(algorythm => algorythm.toObject());
            res.render('home', { data: algorithms });
        } catch (error) {
            res.status(500).json({ message: 'ERROR' });
        }
    }
    async showTheory(req, res) {
        try {
            const data = await algorithmModel.findOne({ slug: req.params.slug});
            res.render('algorithm/showTheory', { data: JSON.stringify(data) });
        } catch (error) {
            res.status(500).json({ message: 'ERROR' });
        }
    }
    async showSample(req, res) {
        try {
            const data = await algorithmModel.findOne({ slug: req.params.slug});
            res.render('algorithm/showSample', { data: JSON.stringify(data) });
        } catch (error) {
            res.status(500).json({ message: 'ERROR' });
        }
    }
    async showExample(req, res) {
        try {
            const data = await algorithmModel.findOne({ slug: req.params.slug});
            res.render('layouts/showExample', { data: JSON.stringify(data) });
        } catch (error) {
            res.status(500).json({ message: 'ERROR' });
        }
    }
    async showExampleDetail(req, res) {
        try {
            const data = await algorithmModel.findOne({ slug: req.params.slug});
            const path = `${req.params.slug}/example/${req.params.detail}`;
            res.render('layouts/showExample', { 
                data: JSON.stringify(data),
                path: path
            });
        } catch (error) {
            res.status(500).json({ message: 'ERROR' });
        }
    }
    async showNote(req, res) {
        try {
            const data = await algorithmModel.findOne({ slug: req.params.slug});
            const algorythm = data.toObject();
            res.render('algorithm/showNote', { data: algorythm });
        } catch (error) {
            res.status(500).json({ message: 'ERROR' });
        }
    }
}

export default new AlgorithmController();