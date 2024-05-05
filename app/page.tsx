import NavBar from "./components/navBar";
import Projects from "./sections/projects/projects";

const Home = () => {
  const red = `#50d71e`;
  const className = `bg-[${red}] shadow-md rounded-lg p-6 mb-4`;

  return (
    <>
      <Projects />
    </>
  );
}

export default Home;
