import { getIntersectingLines } from '../utils/lineUtils.js';

export const findIntersectingLines = (req, res) => {
  try {
    const { coordinates } = req.body.geometry;

    // Check if coordinates is a valid linestring
    if (!Array.isArray(coordinates) || coordinates.length < 2) {
      return res.status(400).send({ error: 'Invalid linestring' });
    }

    // Call the getIntersectingLines function to find intersecting lines
    const intersectingLines = getIntersectingLines(coordinates);

    // Send the intersecting lines in the response
    res.send(intersectingLines);
  } catch (err) {
    console.log(err)
    // Handle any errors that occur during the processing
    res.status(500).json({ message: 'Internal server error' });
  }
};
