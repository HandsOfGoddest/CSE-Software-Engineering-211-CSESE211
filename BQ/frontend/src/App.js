import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Hello from "./components/hello";

const App = () => {
  return (
    
    <Router>
      <Header />
        <main className="py-3">
          <Container>
            <Route path = '/' component={HomeScreen} exact />
            <Route path = '/product/:id' component={ProductScreen}/>
            <Route path = '/brand/:id' component={Hello} />
          </Container>
        </main>
      <Footer />
    </Router>
  );
};

export default App;
