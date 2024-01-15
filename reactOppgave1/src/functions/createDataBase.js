import { imageSorter } from "./sortImages.js";

/* Trengte ikke options her likevell. Men greit å inkludere. */
const fetchApi = async (url, options = null) => {
  const response = options ? await fetch(url, options) : await fetch(url);
  const result = await response.json();
  return result;
};
const URL = "https://api.unsplash.com/search/photos?page=1&query=minimal";

/* process.env gir error. Ikke sikker hvordan jeg kan unngå det.
Gir meg mulighet å kjøre scriptet med en env fil som parameter i 
terminal, via node --env-file="filnavn her" "navn på script" */
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

/* Her henter den de ti første bildene fra unsplash under kategorien
minimalist, og sender de til "imagesorter"
Da får jeg ut en mye lettere json fil med akkurat den dataen jeg ville ha for oppgaven.
Hvis jeg vil kan jeg også få dette programmet til å lagre den orginale dataen fra unsplash også,
men i dette tilfellet så jeg ikke grunn for å beholde det. */
const writeData = async (URL) => {
  console.log("fetching images");
  const images = await getImages(URL);
  console.log("writing images");
  imageSorter(images.results);
  console.log("work done");
};

await writeData(URL);
