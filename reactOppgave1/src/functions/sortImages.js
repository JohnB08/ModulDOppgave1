import { imageArray } from "./importDataBase.js";
import * as fs from "node:fs";
let adjustedImageArray = [];
let filePath = "../Data/adjustedImageData.json";

class ImageClass {
  name;
  creatorName;
  description;
  isWide;
  imageUrl;
  likeCount;
  portfolio;
  twitterUserName;
  constructor(
    name,
    creatorName,
    description,
    isWide,
    imageUrl,
    likeCount,
    portfolio,
    twitterUserName
  ) {
    this.name = name;
    this.creatorName = creatorName;
    this.description = description;
    this.isWide = isWide;
    this.imageUrl = imageUrl;
    this.likeCount = likeCount;
    this.portFolioUrl = portfolio;
    this.twitterURL = twitterUserName;
  }
}

const imageSorter = (array) => {
  array.forEach((element) => {
    if (element["width"] > element["height"]) {
      const adjustedElement = new ImageClass(
        element.description,
        element.user.name,
        element.alt_description,
        true,
        element.urls.small,
        element.likes,
        element.user.portfolio_url,
        element.user.twitter_username
      );
      adjustedImageArray.push(adjustedElement);
    } else {
      const adjustedElement = new ImageClass(
        element.description,
        element.user.name,
        element.alt_description,
        false,
        element.urls.small,
        element.likes,
        element.user.portfolio_url,
        element.user.twitter_username
      );
      adjustedImageArray.push(adjustedElement);
    }
  });
};
console.log("Making data smaller");
imageSorter(imageArray);
console.log("Writing to file");
fs.writeFileSync(filePath, JSON.stringify(adjustedImageArray, null, 2));
console.log("Writing done");
