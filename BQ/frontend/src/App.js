import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CartScreen from "./screens/CartScreen";

const App = () => {
  return (
    <Router>
      <Header />

      <Container>
        <Route path="/cart" component={CartScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/search/:keyword" component={HomeScreen} />
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
