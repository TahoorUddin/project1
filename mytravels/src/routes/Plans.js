import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/1.jpg";
import Footer from "../components/Footer";

function Plans() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImage}
        title="Plans"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Plans;
