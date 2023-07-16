import express from 'express';
import bodyParser from 'body-parser';
import linestringRoutes from './routes/linestringRoutes.js';
import tokenRoutes from './routes/tokenRoutes.js';
import { errorMiddleware } from './middleware/errorMiddleware.js';
import { verifyToken } from './middleware/authMiddleware.js';

const app = express();

app.use(bodyParser.json());

// Routes for linestring operations, protected by token verification middleware
app.use('/linestring', verifyToken, linestringRoutes);

// Routes for token generation
app.use('/token', tokenRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
