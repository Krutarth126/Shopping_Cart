import './App.css';
import {useState} from "react"
import Navbar from "./components/Navbar"
import Body from "./components/body"
import Footer from "./components/footer"
import Cart from "./components/cart"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  let [order, setorder]= useState([]);
  return (
    <Router>
   
    <div className="App">
      <Navbar  orders={order} />
      <Switch>
      <Route path="/" exact>
      <Body setorder={setorder} orders={order}/>
      </Route>
      <Route path ="/cart">
      <Cart orders={order} setorder={setorder}/>
      </Route>
      </Switch>
      
      <Footer/>  
    </div>
    </Router>
    
  );
}

export default App;
