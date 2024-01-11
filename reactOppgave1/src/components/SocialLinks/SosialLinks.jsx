import propTypes from "prop-types";
import Styles from "./SosialLinks.module.css";
export default function SosialLinks({ imageData }) {
  const { likeCount, portFolioUrl, twitterURL } = imageData;
  return (
    <div className={Styles.sosialContainer}>
      <p>Likes: {likeCount}</p>
      <div className={Styles.socials}>
        {portFolioUrl ? (
          <a href={portFolioUrl} target="_blank" rel="noreferrer">
            Visit their PortFolio
          </a>
        ) : (
          <p>No Portfolio Available</p>
        )}
        {twitterURL ? (
          <a
            href={`https://twitter.com/${twitterURL}`}
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        ) : (
          <p>No twitter</p>
        )}
      </div>
    </div>
  );
}
SosialLinks.propTypes = {
  imageData: propTypes.object,
};
