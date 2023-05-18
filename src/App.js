import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";

import Navigation from "./components/routes/navigation/navigation.component";
// Pages
import Home from "./components/routes/home/home.component";
import Shop from "./components/routes/shop/shop.component";
import Checkout from "./components/routes/checkout/checkout.component";

// firebase authentication
import Authentication from "./components/routes/authentication/authentication.component";

import { checkUserSession } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
