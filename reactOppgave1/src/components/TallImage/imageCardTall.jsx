import propTypes from "prop-types";
import Style from "./tallImage.module.css";
import SosialLinks from "../SocialLinks/SosialLinks";
export default function TallImageMager({ object }) {
  return (
    <div className={Style.ImageCard}>
      <div className={Style.ImageContainer}>
        <img src={object.imageUrl} alt={object.description} />
      </div>
      <div className={Style.TextContainer}>
        <h3>{object.name ? object.name : "Unnamed"}</h3>
        <p>{object.description}</p>
        <h3>Made by: {object.creatorName}</h3>
        <SosialLinks object={object} />
      </div>
    </div>
  );
}
TallImageMager.propTypes = {
  object: propTypes.object,
};
// <div classname={Style.cssname}
