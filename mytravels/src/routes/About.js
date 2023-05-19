import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/night.jpg";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImage}
        title="About"
        btnClass="hide"
      />
    </>
  );
}

export default About;
