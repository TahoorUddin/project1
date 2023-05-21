import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/2.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

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
      <Trip />
      <Footer />
    </>
  );
}

export default Destinations;
