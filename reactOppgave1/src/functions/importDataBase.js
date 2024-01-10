import * as fs from "node:fs";
const data = JSON.parse(fs.readFileSync("../Data/imageData.json"));
const imageArray = data.results;
const adjustedData = JSON.parse(fs.readFileSync("../Data/imageData.json"));
export { imageArray };
export { adjustedData };
