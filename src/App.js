import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import { CartContextProvider } from "./items/Cart/CartContext";

function App() {
  return (
    <CartContextProvider>
      <div className="app">
        <Navbar />
        <Header />
        <Products />
        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
