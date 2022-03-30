import { generateBlobPath } from "./blobGenerator.js";
import { generateMeshBackground } from './generateMeshBackground.js'
import { generateBackgroundColor } from "./generateBackgroundColor.js";

const blobSize = 480
const date = 30032022
const path = generateBlobPath({
  size: blobSize,
  growth: 4,
  edges: 10,
  seed: date,
});

const svg = `<svg width=${blobSize} viewBox="0 0 ${blobSize} ${blobSize}"><defs><clipPath id="svgPath"><path d="${path}" /></clipPath></defs></svg>`;

const blob = document.getElementById('blob')
blob.innerHTML = svg
blob.style.clipPath = 'url(#svgPath)'

blob.style.backgroundImage = generateMeshBackground(date)


blob.style.backgroundColor = generateBackgroundColor(date)