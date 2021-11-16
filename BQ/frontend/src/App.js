import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Hello from "./components/getListProductOfBrand";
import AfterPickCategory from "./components/getListProductByCategoryOfBrand";

const App = () => {
  return (
    
    <Router>
      <Header />
        <main className="py-3">
          <Container>
            <Route path = '/' component={HomeScreen} exact />
            <Route path = '/product/:id' component={ProductScreen}/>
            <Route path = '/brand/:id/list_product/' component={Hello} />
            <Route path = '/brand/:id/list_products_sort_by/:category' component={AfterPickCategory} />
          </Container>
        </main>
      <Footer />
    </Router>
  );
};

export default App;
