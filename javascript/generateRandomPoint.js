import { getValueInRange } from "./getValueInRange.js";

export const generateRandomPoint = (random) => {
  const hue = getValueInRange(random(), 0, 360);
  const sat = getValueInRange(random(), 60, 100);
  const lum = getValueInRange(random(), 60, 80)
  const spr = getValueInRange(random(), 40, 60);
  return {
    position: [getValueInRange(random(), 0, 100), getValueInRange(random(), 0, 100)],
    color: 'hsla(' + hue + ',' + sat + '%,' + lum + '%,1)',
    s: [0, spr + '%']
  }
}