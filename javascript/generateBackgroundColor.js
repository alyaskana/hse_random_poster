import { randomBySeed } from "./randomBySeed.js";
import { getValueInRange } from "./getValueInRange.js";

export const generateBackgroundColor = (seed) => {
  const hue = getValueInRange(randomBySeed(seed)(), 0, 360);
  const sat = getValueInRange(randomBySeed(seed)(), 60, 100);
  const lum = getValueInRange(randomBySeed(seed)(), 60, 80)

  return `hsla(${hue},${sat}%,${lum}%,1)`
}