import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const generateToken = (req, res) => {
  // Generate a token using jwt.sign() function
  const token = jwt.sign({ id: 123 }, process.env.JWT_SECRET);
  
  // Send the generated token in the response
  res.status(200).json({ token });
};
