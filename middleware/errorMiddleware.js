export const errorMiddleware = (err, req, res, next) => {
    // Send a 500 Internal Server Error response
    res.status(500).json({ message: 'Internal server error' });
};
