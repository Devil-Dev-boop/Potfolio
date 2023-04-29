import Navbar from "./Navbar";
import Hero from "./About";
import Content from "./Work";
import About from "./Skills";
import Contact from "./Contact";


const Home = ({onShowPic}) => {
  return (
    <div className="flex">
      <Navbar Pic={onShowPic} />
      <div className="flexed-component">
        <Hero />
        <Content />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
