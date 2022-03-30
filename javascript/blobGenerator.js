import { randomBySeed } from "./randomBySeed.js";
import { getValueInRange } from './getValueInRange.js'

export const generateBlobPath = ({
  size = 400,
  growth = 6,
  edges = 6,
  seed,
} = {}) => {
  const destPoints = createPoints(size, growth, edges, seed);
  const path = createSvgPath(destPoints);

  return path;
};

const divide = (count) => {
  const deg = 360 / count;
  return [...Array(count)].map((_, i) => i * deg);
};

const toRad = (deg) => deg * (Math.PI / 180.0);

const point = (origin, radius, degree) => {
  const x = origin + radius * Math.cos(toRad(degree));
  const y = origin + radius * Math.sin(toRad(degree));
  return [Math.round(x), Math.round(y)];
};

const createPoints = (
  size,
  minGrowth,
  edgesCount,
  seed
) => {
  let outerRad = size / 2;
  let innerRad = minGrowth * (outerRad / 10);
  let center = size / 2;

  let slices = divide(edgesCount);

  let randVal = randomBySeed(seed);

  let destPoints = [];

  slices.forEach((degree) => {
    let O = getValueInRange(randVal(), innerRad, outerRad);
    let end = point(center, O, degree);
    destPoints.push(end);
  });
  return destPoints;
};

const createSvgPath = (points) => {
  let svgPath = "";
  let mid = [
    (points[0][0] + points[1][0]) / 2,
    (points[0][1] + points[1][1]) / 2,
  ];
  svgPath += "M" + mid[0] + "," + mid[1];

  for (let i = 0; i < points.length; i++) {
    let p1 = points[(i + 1) % points.length];
    let p2 = points[(i + 2) % points.length];
    mid = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
    svgPath += "Q" + p1[0] + "," + p1[1] + "," + mid[0] + "," + mid[1];
  }
  svgPath += "Z";
  return svgPath;
};
