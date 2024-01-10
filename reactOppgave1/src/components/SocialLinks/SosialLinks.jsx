import propTypes from "prop-types";
import Styles from "./SosialLinks.module.css";
export default function SosialLinks({ object }) {
  return (
    <div className={Styles.sosialContainer}>
      <p>Likes: {object.likeCount}</p>
      <div className={Styles.socials}>
        {object.portFolioUrl ? (
          <a href={object.portFolioUrl} target="_blank" rel="noreferrer">
            Visit their PortFolio
          </a>
        ) : (
          <p>No Portfolio Available</p>
        )}
        {object.twitterURL ? (
          <a
            href={`https://twitter.com/${object.twitterURL}`}
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
  object: propTypes.object,
};
