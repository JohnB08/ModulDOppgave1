import Style from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={Style.footer}>
      <div className={Style.links}>
        <a href="https://github.com/JohnB08" target="_blank" rel="noreferrer">
          Github
        </a>
        <a href="#">LinkedIn</a>
      </div>
      <div className={Style.textContainer}>
        <p>Made by: JohnB08</p>
        <p>Image and data from Unsplash</p>
      </div>
    </footer>
  );
}
