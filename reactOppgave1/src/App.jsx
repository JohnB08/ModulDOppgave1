import imageData from "./Data/adjustedImageData.json";
import "./App.css";
import MakeImageContainer from "./components/ImageContainer/ImageContainer.jsx";
import NavBar from "./components/NavBar/NavBar";
function App() {
  console.log(imageData);
  console.log(Array.isArray(imageData));
  return (
    <>
      <NavBar />
      <MakeImageContainer array={imageData} />
    </>
  );
}

export default App;
