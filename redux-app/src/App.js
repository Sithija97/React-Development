import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "./store/action";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);

  const IncrementFunc = () => {
    dispatch(Increment());
  };

  const DecrementFunc = () => {
    dispatch(Decrement());
  };

  const ResetFunc = () => {
    dispatch(Reset());
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>
        <div className="App-link">
          <button onClick={IncrementFunc}>Increment</button>
        </div>
        <div className="App-link">
          <button onClick={DecrementFunc}>Decrement</button>
        </div>
        <div className="App-link">
          <button onClick={ResetFunc}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
