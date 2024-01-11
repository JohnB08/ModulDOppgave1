import propTypes from "prop-types";
import WideImageMaker from "../WideImage/ImageCardWide";
import TallImageMager from "../TallImage/imageCardTall";
import Style from "./ImageContainer.module.css";

export default function MakeImageContainer({ imageDataArray }) {
  return (
    <div className={Style.ImageContainer}>
      {imageDataArray.map((element, i) => {
        return element.isWide ? (
          <WideImageMaker imageData={element} key={i} />
        ) : (
          <TallImageMager imageData={element} key={i} />
        );
      })}
    </div>
  );
}
MakeImageContainer.propTypes = {
  imageDataArray: propTypes.array,
};
