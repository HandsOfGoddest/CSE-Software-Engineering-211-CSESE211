import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import AdminProductScreen from "./screens/AdminProductScreen";
import AdminBrandScreen from "./screens/AdminBrandScreen";
import AddBrandScreen from "./screens/AddBrandScreen";
import AddCateScreen from "./screens/AddCateScreen";
import AddProductScreen from "./screens/AddProductScreen";
import EditProductScreen from "./screens/EditProductScreen";
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
import ListBrand from "./components/ListBrand";
import ListCategory from "./components/ListCategory";
import SearchScreen from "./screens/SearchScreen"
import ForgotPassScreen from "./screens/ForgotPassScreen";
import ClerkScreen from "./screens/ClerkScreen";
import OrderList from "./components/OrderList";
import CartBrandScreen from "./screens/CartBrandScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container style={{ marginTop: "70px" }}>
          <Route path="/clerk" component={ClerkScreen} />
          <Route path="/admin/add/product/:catename/:pathname" component={AddProductScreen} />
          <Route path="/admin/edit/product/:id/:pathname/:catename"  component={EditProductScreen} />
          <Route path="/admin/add/category/:pathname" component={AddCateScreen} />
          <Route path="/admin/add/brand" component={AddBrandScreen} />
          <Route path="/admin/product/:pathname/:catename" component={AdminProductScreen} />
          <Route path="/admin/cate/:name" component={AdminBrandScreen} />
          <Route path="/admin/brand" component={AdminScreen} />
          <Route path="/order/:id/:brandname" component={OrderScreen} />
          <Route path="/search/:keyword" component={SearchScreen} />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/brand/:pathName/list_product/' component={Hello} />
          <Route path='/:brandname/cart' component={CartBrandScreen} />
          <Route path='/brand/:pathName/list_product_sort_by/:catePathName' component={AfterPickCategory} />
          <Route path='/placeorder/:brandname' component={PlaceOrderScreen} />
          <Route path='/payment/:brandname' component={PaymentScreen} />
          <Route path='/shipping/:brandname' component={ShippingScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/listbrand' component={ListBrand} />
          <Route path='/listcate/:brandPathName' component={ListCategory} />
          <Route path='/forgotpass' component={ForgotPassScreen} />
          <Route path='/orderlist' component={OrderList} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
