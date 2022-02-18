import "./App.css";
import "./style.css";
import imageInSrc from "./imageinsrc.png";
import NavbarC from "./Components/Navbar/NavbarC";
import FooterC from "./Components/Footer/FooterC";

function App() {
  return (
    <div>
      <NavbarC />
      <div className="App">
        <h3 className="title">------- Taher KHADHRAOUI ---------</h3>

        <img className="image" src={imageInSrc} alt="imageinsrc" />

        <img className="image" src="/imageInPublic.jpg" alt="imageinpublic" />

        <video width="320" height="240" controls>
          <source src="/video-1549022685.mp4" type="video/mp4" />
        </video>
      </div>
      <FooterC />
    </div>
  );
}

export default App;
