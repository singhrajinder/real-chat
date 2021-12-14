/* eslint-disable no-undef */
import React from "react";
import SignUp from "./Component/SignUp";
import { Routes, Route } from "react-router-dom";
import Login from "../src/login";
import RealChat from "./RealChat/real-chat";
import PrivateRoute from "./Component/PrivateRoute";
import Header from "./Component/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route
          path="/chat"
          exact
          element={
            <PrivateRoute>
              <RealChat />
            </PrivateRoute>
          }
        />
        <Route path="/" exact element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
