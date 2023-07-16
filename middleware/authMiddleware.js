import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    let token = req.headers.authorization;
    
    // Check if token exists
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    // Verify the token using the 'jsonwebtoken' library
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Attach the decoded token to the request object
      req.user = decoded;
      
      // Move to the next middleware or route handler
      next();
    } catch (error) {
      console.log(error)
      // Handle token verification error
      return res.status(401).json({ error: 'Unauthorized' });
    }
};
