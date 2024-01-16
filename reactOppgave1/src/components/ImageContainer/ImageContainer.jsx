import propTypes from "prop-types";
import WideImageMaker from "../WideImage/ImageCardWide";
import TallImageMager from "../TallImage/imageCardTall";
import Style from "./ImageContainer.module.css";

/**
 * Leverer en "ImageContainer" fylt med enten wideimage eller tallimage om element.isWide
 * @param {{
 * imageDataArray: 
 * }} param0
 * @returns
 */
export default function MakeImageContainer({ imageDataArray }) {
  return (
    <div className={Style.ImageContainer}>
      {/* Det er viktig at alt inni {} leverer noe som er gyldig i et reactElement, er derfor array.map må returne selv om arrow functions tradisjonelt sett har implied return. */}
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
/* det er lurt å definere hvilken Type propertien har.  */
MakeImageContainer.propTypes = {
  imageDataArray: propTypes.array,
};
