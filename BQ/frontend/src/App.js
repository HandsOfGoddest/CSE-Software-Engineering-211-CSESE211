import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Hello from "./components/getListProductOfBrand";
import AfterPickCategory from "./components/getListProductByCategoryOfBrand";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import CategoryScreen from "./screens/CategoryScreen"


const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container style={{ marginTop: "70px" }}>
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/search/:keyword" component={HomeScreen} />
          <Route path='/' component={CategoryScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/brand/:id/list_product/' component={Hello} />
          <Route path='/brand/:id/list_product_sort_by/:category' component={AfterPickCategory} />
          <Route path='/search/:keyword' component={HomeScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
