import React from "react";
import Home from "./components/routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";

// import SignUpForm from "./components/sign-up-form/signup-form.component";
import Authentication from "./components/routes/authentication/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
