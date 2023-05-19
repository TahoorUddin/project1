import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/6.jpg";

function Gallery() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImage}
        title="Gallery"
        btnClass="hide"
      />
    </>
  );
}

export default Gallery;
