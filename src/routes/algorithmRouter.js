import AlgorithmController from "../app/controllers/AlgorithmController.js";
import express from 'express';

const router = express.Router();

router.get('/:slug/theory', AlgorithmController.showTheory);
router.get('/:slug/sample', AlgorithmController.showSample);
router.get('/:slug/example/:detail', AlgorithmController.showExampleDetail);
router.get('/:slug/example', AlgorithmController.showExample);
router.get('/:slug/note', AlgorithmController.showNote);
router.get('/', AlgorithmController.index);

export default router;