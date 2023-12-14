import "./App.css";
import Header from "./layout/Hearder";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopList from "./component/ShopList";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import { ShopContextProvider } from "./context/ShopContext";
import Ladipage from "./component/Ladipage";

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ShopList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/ladipage' element={<Ladipage/>} />
        </Routes>
        <Footer />
      </Router>
    </ShopContextProvider>
  );
}

export default App;
