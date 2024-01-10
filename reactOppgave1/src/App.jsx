import imageData from "./Data/adjustedImageData.json";
import "./App.css";
import MakeImageContainer from "./components/ImageContainer/ImageContainer.jsx";
import NavBar from "./components/NavBar/NavBar";

function Footer() {
  return (
    <footer>
      <p>This is a p tag inside a footer element.</p>
    </footer>
  );
}

function App() {
  console.log(imageData);
  console.log(Array.isArray(imageData));
  return (
    <>
      <NavBar />
      <MakeImageContainer array={imageData} />
      <Footer />
    </>
  );
}

export default App;
