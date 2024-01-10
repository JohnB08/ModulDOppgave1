import propTypes from "prop-types";
import WideImageMaker from "../WideImage/ImageCardWide";
import TallImageMager from "../TallImage/imageCardTall";
import Style from "./ImageContainer.module.css";

export default function MakeImageContainer({ array }) {
  const cardElements = [];
  for (let i = 0; i < array.length; i++) {
    array[i].isWide
      ? cardElements.push(<WideImageMaker object={array[i]} key={i} />)
      : cardElements.push(<TallImageMager object={array[i]} key={i} />);
  }
  return <div className={Style.ImageContainer}>{cardElements}</div>;
}
MakeImageContainer.propTypes = {
  array: propTypes.array,
};
