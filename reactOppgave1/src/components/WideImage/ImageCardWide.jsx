import propTypes from "prop-types";
import Style from "./wideImage.module.css";
import SosialLinks from "../SocialLinks/SosialLinks";
export default function WideImageMaker({ imageData }) {
  const { imageUrl, description, name, creatorName } = imageData;
  return (
    <div className={Style.ImageCard}>
      <div className={Style.ImageContainer}>
        <img src={imageUrl} alt={description} />
      </div>
      <div className={Style.TextContainer}>
        <div className={Style.infoContainer}>
          <h3>{name ? name : "Untitled Image"}</h3>
          <p>{description}</p>
          <h3>Made by: {creatorName}</h3>
        </div>
        <SosialLinks imageData={imageData} />
      </div>
    </div>
  );
}
WideImageMaker.propTypes = {
  imageData: propTypes.object,
};
