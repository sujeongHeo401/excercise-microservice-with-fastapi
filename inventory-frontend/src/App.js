import {Products} from "./components/Products";
import {ProductsCreate} from "./components/ProductsCreate";
import {Orders} from "./components/Orders";

import {BrowswerRouter, Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/create" element={<ProductsCreate/>}/>
      <Route path="/orders" element={<Orders/>}/>


    </Routes>
  </BrowserRouter>;
}

export default App;
