import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./store/cartSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { cart, total, products } = useSelector((state) => state.cart);
  const purchaseHandler = (e) => {
    const name = e.target.options[e.target.selectedIndex].text;
    const price = parseInt(e.target.value);

    const cartObj = { name, price };
    dispatch(addToCart(cartObj));
  };
  const deleteHandler = (id, price) => {
    const deleteObj = { id, price };
    dispatch(removeFromCart(deleteObj));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <select onChange={(e) => purchaseHandler(e)}>
          {products.map((product, id) => (
            <option key={id} value={product.price}>
              {product.name} : {product.price}
            </option>
          ))}
        </select>
        <p>cart :</p>
        {cart.map((item, id) => (
          <li key={id} onClick={() => deleteHandler(id, item.price)}>
            {item.name}
          </li>
        ))}
        <p>total : {total}</p>
      </header>
    </div>
  );
}

export default App;
