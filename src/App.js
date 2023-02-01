import Home from "./pages/home/Home";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/transformer-table" element={<Home />} />
          <Route path="/transformer-table/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
