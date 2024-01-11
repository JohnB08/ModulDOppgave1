import imageData from "./Data/adjustedImageData.json";
import "./App.css";
import MakeImageContainer from "./components/ImageContainer/ImageContainer.jsx";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer";

function App() {
  console.log(imageData);
  console.log(Array.isArray(imageData));
  return (
    <>
      <NavBar />
      <MakeImageContainer imageDataArray={imageData} />
      <Footer />
    </>
  );
}

export default App;
