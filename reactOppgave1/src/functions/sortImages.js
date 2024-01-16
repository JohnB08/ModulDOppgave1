import * as fs from "node:fs";
let adjustedImageArray = [];
let filePath = "../Data/adjustedImageData.json";

/* Dette var litt overkill, men ville prøve å leke lett med classConstructor. */
class ImageClass {
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

/* Datastrukturen ble valgt ut etter å ha sett hva data jeg egentlig trengte
for å lage en lett og enkel react oppgave. Jeg følte mengden data
som egentlig følger med når du caller til unsplash sin api var alt for mye*/
export const imageSorter = (array) => {
  console.log("Making data smaller");
  array.forEach((element) => {
    const adjustedElement = new ImageClass(
      element.description,
      element.user.name,
      element.alt_description,
      /* Litt gøy at du kan bruke en ternary her */
      element["width"] > element["height"] ? true : false,
      element.urls.small,
      element.likes,
      element.user.portfolio_url,
      element.user.twitter_username
    );
    adjustedImageArray.push(adjustedElement);
  });
  console.log("Writing to file");
  fs.writeFileSync(filePath, JSON.stringify(adjustedImageArray, null, 2));
  console.log("Writing done");
};
