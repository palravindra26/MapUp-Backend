import express from 'express';
import { findIntersectingLines } from '../controllers/linestringController.js';

const router = express.Router();

// Handle POST request to find intersecting lines
router.post('/', findIntersectingLines);

export default router;
