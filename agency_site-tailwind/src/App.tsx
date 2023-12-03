import { Achivements, Companies, Courses, Hero, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achivements />
    </>
  );
};

export default App;
