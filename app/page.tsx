import NavBar from "./components/navBar";
import Hero from "./sections/hero/hero";
import Projects from "./sections/projects/projects";
import Reads from "./sections/reads/reads";
import Talks from "./sections/talks/talks";
import Contact from "./sections/contact/contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Reads />
      <Talks />
      <Contact />
    </>
  );
}

export default Home;
