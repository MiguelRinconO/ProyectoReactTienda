
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";

import Register from "./pages/auth/Register";
import Login from "./pages/auth/login";
import { useSelector } from "react-redux";
import Checkout from "./pages/Chekout";
import PlaceOrder from "./pages/PlaceOrder";
import Quienes from "./pages/Quienes";
import Inicio from "./pages/Inicio"
import Contactenos from "./pages/Contactenos"
import Crud from "./pages/Crud"

function App() {

  const userLoginReducer= useSelector((state)=>state.userLoginReducer)
  const {userInfo} = userLoginReducer

  return (
    <>
      <Router>
      
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/products/:id" element={<ProductDetail />} ></Route>
          <Route exact path="/login" element={userInfo ?<Navigate to="/"></Navigate>: <Login />} ></Route>
          <Route exact path="/register" element={userInfo ?<Navigate to="/"></Navigate>:<Register />} ></Route>
          <Route exact path="/checkcout" element={<Checkout />}></Route>
          <Route exact path="/placeorder" element={<PlaceOrder />}></Route>
          <Route exact path="/quienes" element={<Quienes/>}></Route>
          <Route exact path="/inicio" element={<Inicio/>}></Route>
          <Route exact path="/contactenos" element={<Contactenos/>}></Route>
          <Route exact path="/crud" element={<Crud/>}></Route>


        </Routes>
      </Router>
    </>
  );
}

export default App;


