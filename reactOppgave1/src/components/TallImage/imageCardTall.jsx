import propTypes from "prop-types";
import Style from "./tallImage.module.css";
import SosialLinks from "../SocialLinks/SosialLinks";

/**
 * Returner et TallImageMaker react element
 * @param {*} param0
 * @returns
 */
export default function TallImageMager({ imageData }) {
  /* Destrukturerer ut det jeg trenger fra imageData, det gjør koden mer leslig. */
  const { imageUrl, description, name, creatorName } = imageData;
  return (
    <div className={Style.ImageCard}>
      <div className={Style.ImageContainer}>
        <img src={imageUrl} alt={description} />
      </div>
      <div className={Style.TextContainer}>
        <h3>{name ? name : "Unnamed"}</h3>
        <p>{description}</p>
        <h3>Made by: {creatorName}</h3>
        <SosialLinks imageData={imageData} className={Style.socials} />
      </div>
    </div>
  );
}
TallImageMager.propTypes = {
  imageData: propTypes.object,
};
// <div classname={Style.cssname}
