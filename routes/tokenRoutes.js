import express from 'express';
import { generateToken } from '../controllers/tokenController.js';

const router = express.Router();

// Handle GET request to generate token
router.get('/', generateToken);

export default router;
