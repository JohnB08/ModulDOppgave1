import propTypes from "prop-types";
import WideImageMaker from "../WideImage/ImageCardWide";
import TallImageMager from "../TallImage/imageCardTall";
import Style from "./ImageContainer.module.css";

export default function MakeImageContainer({ array }) {
  return (
    <div className={Style.ImageContainer}>
      {array.map((element, i) => {
        return element.isWide ? (
          <WideImageMaker object={element} key={i} />
        ) : (
          <TallImageMager object={element} key={i} />
        );
      })}
    </div>
  );
}
MakeImageContainer.propTypes = {
  array: propTypes.array,
};
