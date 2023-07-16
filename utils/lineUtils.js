import * as turf from '@turf/turf';
import { lines } from '../data/data.js';

export const getIntersectingLines = (coordinates) => {
  // Create a lineString object from the given coordinates
  const lineString = turf.lineString(coordinates);
  
  // Initialize an array to store the intersecting lines
  const intersectingLines = [];

  // Iterate over the lines and check for intersections
  for (const [id, line] of Object.entries(lines)) {
    // Create a lineString object from the line's coordinates
    const lineStringObj = turf.lineString(line.geometry.coordinates);
    
    // Find the intersection between the lineString and lineStringObj
    const intersection = turf.lineIntersect(lineStringObj, lineString);

    // If an intersection is found, add it to the intersectingLines array
    if (intersection.features.length > 0) {
      intersectingLines.push({
        id: line.properties.id,
        intersectionPoint: intersection.features[0].geometry.coordinates,
      });
    }
  }

  // Return the array of intersecting lines
  return intersectingLines;
};
