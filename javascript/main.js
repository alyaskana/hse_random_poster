import { generateBlobPath } from "./blobGenerator.js";
import { generateMeshBackground } from "./generateMeshBackground.js";
import { generateBackgroundColor } from "./generateBackgroundColor.js";
import { getCurrentDate } from "./getCurrentDate.js";
import { convertDatetoSeed } from "./convertDatetoSeed.js";
import { Litepicker } from "./litepicker.js";

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
        const queryParams = new URLSearchParams(window.location.search);
        const tzoffset = new Date().getTimezoneOffset() * 60000;
        const localISOTime = new Date(dateInstance - tzoffset)
          .toISOString()
          .slice(0, 10);
        queryParams.set("date", localISOTime);
        history.pushState(null, null, "?" + queryParams.toString());
        window.location.reload();
      });
    },
  });
}
