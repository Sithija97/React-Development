import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "./store/action";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);

  const Increment = () => {
    dispatch(ADD());
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>
        <div className="App-link">
          <button onClick={Increment}>Increment</button>
        </div>
      </header>
    </div>
  );
}

export default App;
