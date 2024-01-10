import * as fs from "node:fs";
const data = JSON.parse(fs.readFile("../Data/imageData.json"));
const imageArray = data.results;
const adjustedData = JSON.parse(fs.readFile("../Data/imageData.json"));
export { imageArray };
export { adjustedData };
