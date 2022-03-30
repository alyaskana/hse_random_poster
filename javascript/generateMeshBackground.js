import { generateMeshCSS } from "./generateMeshCSS.js";
import { generateRandomPoint } from "./generateRandomPoint.js";
import { randomBySeed } from "./randomBySeed.js";

export const generateMeshBackground = (seed) => {
  const random = randomBySeed(seed);
  const schema = [...Array(6)].map(() => {
    return generateRandomPoint(random)
  });
  return generateMeshCSS(schema)
}