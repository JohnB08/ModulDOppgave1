import * as fs from "node:fs";
const data = JSON.parse(fs.readFileSync("../Data/imageData.json"));
const imageArray = data.results;
export { imageArray };
const adjustedData = JSON.parse(fs.readFileSync("../Data/imageData.json"));
export { adjustedData };
