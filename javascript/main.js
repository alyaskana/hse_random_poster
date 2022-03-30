import { generateBlobPath } from "./blobGenerator.js";
import { generateMeshBackground } from "./generateMeshBackground.js";
import { generateBackgroundColor } from "./generateBackgroundColor.js";
import { getCurrentDate } from "./getCurrentDate.js";
import { convertDatetoSeed } from "./convertDatetoSeed.js";
import { setDateToQuery } from "./setDateToQuery.js";
import { getQueryDate } from "./getQueryDate.js";
import { Litepicker } from "./litepicker.js";

getQueryDate() || setDateToQuery(getCurrentDate());

const blobSize = 480;
const date = convertDatetoSeed(getCurrentDate());
const path = generateBlobPath({
  size: blobSize,
  growth: 4,
  edges: 10,
  seed: date,
});

const svg = `<svg width=${blobSize} viewBox="0 0 ${blobSize} ${blobSize}"><defs><clipPath id="svgPath"><path d="${path}" /></clipPath></defs></svg>`;

const blob = document.getElementById("blob");
blob.innerHTML = svg;
blob.style.clipPath = "url(#svgPath)";

blob.style.backgroundImage = generateMeshBackground(date);

blob.style.backgroundColor = generateBackgroundColor(date);

const litepickerElem = document.getElementById("litepicker");
if (litepickerElem) {
  const queryParams = new URLSearchParams(window.location.search);

  new Litepicker({
    startDate: getCurrentDate(),
    element: litepickerElem,
    inlineMode: true,
    lang: "ru-RU",
    numberOfMonths: 1,
    numberOfColumns: 1,
    singleMode: true,
    mobileFriendly: true,
    setup: (picker) => {
      picker.on("selected", ({ dateInstance }) => {
        setDateToQuery(dateInstance);
      });
    },
  });
}
