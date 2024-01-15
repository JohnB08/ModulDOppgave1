import propTypes from "prop-types";
import Style from "./wideImage.module.css";
import SosialLinks from "../SocialLinks/SosialLinks";

/**
 * Returnerer et "WideImageMaker" react element
 * @param {*} param0
 * @returns
 */
export default function WideImageMaker({ imageData }) {
  /* For ryddighets skyld destrukturerer jeg ut det jeg trenger fra imageData. Det gjør koden mye mer leslig. */
  const { imageUrl, description, name, creatorName } = imageData;
  return (
    <div className={Style.ImageCard}>
      <div className={Style.ImageContainer}>
        <img src={imageUrl} alt={description} />
      </div>
      <div className={Style.TextContainer}>
        <div className={Style.infoContainer}>
          <h3 className={Style.Title}>{name ? name : "Untitled Image"}</h3>
          <p className={Style.descText}>{description}</p>
          <h3>Made by: {creatorName}</h3>
        </div>
        <SosialLinks imageData={imageData} className={Style.socials} />
      </div>
    </div>
  );
}
WideImageMaker.propTypes = {
  imageData: propTypes.object,
};
