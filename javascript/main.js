import { generateBlobPath } from "./blobGenerator.js";
import { generateMeshBackground } from "./generateMeshBackground.js";
import { generateBackgroundColor } from "./generateBackgroundColor.js";
import { getCurrentDate } from "./getCurrentDate.js";
import { convertDatetoSeed } from "./convertDatetoSeed.js";
import { setDateToQuery } from "./setDateToQuery.js";
import { getQueryDate } from "./getQueryDate.js";
import { Litepicker } from "./litepicker.js";

getQueryDate() || setDateToQuery(getCurrentDate(), false);

const queryParams = new URLSearchParams(window.location.search);
console.log(getCurrentDate());

const blobSize = 480;
const date = convertDatetoSeed(getCurrentDate());
import { randomBySeed } from "./randomBySeed.js";

const random = randomBySeed(date);

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
blob.style.backgroundImage = generateMeshBackground(random, 8)
blob.style.backgroundColor = generateBackgroundColor(date)

const poster = document.getElementById('poster')
poster.style.backgroundImage = generateMeshBackground(random, 3)


const litepickerElem = document.getElementById("litepicker");
if (litepickerElem) {
  new Litepicker({
    startDate: getCurrentDate(),
    element: litepickerElem,
    lang: "ru-RU",
    numberOfMonths: 1,
    numberOfColumns: 1,
    singleMode: true,
    mobileFriendly: true,
    format: 'DD.MM.YYYY',
    setup: (picker) => {
      picker.on("selected", ({ dateInstance }) => {
        setDateToQuery(dateInstance);
      });
    },
  });
}

console.log(getCurrentDate()
  .toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
  })
);

const dayMonthDiv = document.getElementById('day_month')
dayMonthDiv.innerHTML = getCurrentDate()
  .toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
  })

const yearDiv = document.getElementById('year')
yearDiv.innerHTML = getCurrentDate()
  .toLocaleDateString("en-GB", {
    year: "numeric",
  })
