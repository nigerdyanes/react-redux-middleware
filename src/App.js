import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
