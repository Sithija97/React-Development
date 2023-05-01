import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, RemoveFromCart } from "./store/action";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartReducer);
  const { cart, products, total } = state;

  const purchaseHandler = (e) => {
    const name = e.target.options[e.target.selectedIndex].text;
    const price = parseInt(e.target.value);

    const cartObj = { name, price };
    dispatch(AddToCart(cartObj));
  };

  const deleteHandler = (id, price) => {
    const deleteObj = { id, price };
    dispatch(RemoveFromCart(deleteObj));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>{count}</p>*/}
        <div className="App-link">
          {/* <button onClick={ResetFunc}>Reset</button> */}
          <p>products :</p>
          <select onChange={(e) => purchaseHandler(e)}>
            {products.map((product, id) => (
              <option key={id} value={product.price}>
                {product.name} :{product.price}
              </option>
            ))}
          </select>
          <p>
            cart :{" "}
            {cart.map((item, id) => (
              <li key={id} onClick={() => deleteHandler(id, item.price)}>
                {item.name}
              </li>
            ))}
          </p>
          <p>total : {total}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
