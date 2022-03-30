import { generateMeshCSS } from "./generateMeshCSS.js";
import { generateRandomPoint } from "./generateRandomPoint.js";

export const generateMeshBackground = (random, pointsCount) => {
  const schema = [...Array(pointsCount)].map(() => {
    return generateRandomPoint(random)
  });
  return generateMeshCSS(schema)
}