import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/2.jpg";

function Destinations() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImage}
        title="Destinations"
        btnClass="hide"
      />
    </>
  );
}

export default Destinations;
