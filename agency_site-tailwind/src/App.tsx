import {
  Achivements,
  CTA,
  Categories,
  Companies,
  Courses,
  Feedbacks,
  Footer,
  Hero,
  Navbar,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achivements />
      <Categories />
      <Feedbacks />
      <CTA />
      <Footer />
    </>
  );
};

export default App;
