import propTypes from "prop-types";
import Style from "./tallImage.module.css";
export default function TallImageMager({ object }) {
  return (
    <div className={Style.ImageCard}>
      <div className={Style.ImageContainer}>
        <img src={object.imageUrl} alt={object.description} />
      </div>
      <div className={Style.TextContainer}>
        <h3>{object.name ? object.name : "Unnamed"}</h3>
        <h3>Made by: {object.creatorName}</h3>
        <p>{object.description}</p>
      </div>
    </div>
  );
}
TallImageMager.propTypes = {
  object: propTypes.object,
};
// <div classname={Style.cssname}
