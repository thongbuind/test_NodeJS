import express from 'express';
import courseController from '../app/controllers/courseController.js';

const router = express.Router();

router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);
router.get('/', courseController.index);

export default router;
