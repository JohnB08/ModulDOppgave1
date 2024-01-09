import * as fs from "node:fs";
const fetchApi = async (url, options = null) => {
  const response = options ? await fetch(url, options) : await fetch(url);
  const result = await response.json();
  return result;
};
const URL = "https://api.unsplash.com/search/photos?page=1&query=minimal";
const dataFilePath = "../Data/imageData.json";

const addAuth = (url) => {
  const accessKey = process.env.ACCESS_Key;
  url = `${url}&client_id=${accessKey}`;
  return url;
};

const getImages = async (URL) => {
  const addUser = addAuth(URL);
  const fetchImages = await fetchApi(addUser);
  return fetchImages;
};

const writeData = async (URL) => {
  console.log("fetching images");
  const images = await getImages(URL);
  console.log("writing images");
  fs.writeFileSync(dataFilePath, images, null, 2);
  console.log("writing done");
};

await writeData(URL);
