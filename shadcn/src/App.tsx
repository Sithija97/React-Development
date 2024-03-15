import { Home, Layout } from "./components/pages";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Home />
      </Layout>
    </Router>
  );
}

export default App;
