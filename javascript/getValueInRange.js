export const getValueInRange = (value, min, max) => {
  let valueInRange = min + value * (max - min);
  if (valueInRange > max) {
    valueInRange = valueInRange - min;
  } else if (valueInRange < min) {
    valueInRange = valueInRange + min;
  }
  return valueInRange;
};