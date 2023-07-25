import Home from "./home";
import Carousel from "./home";
import LoginPage from "./login";
import Productpage from "./productsPage";
import Signin from "./signin";
import {
  BrowserRouter as
    Router,
  Routes,
  Route,
} from "react-router-dom";
import Wishlist from "./wishlistpage";
import Buyinglist from "./buyinglist";


function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route  exact path="/" element={<LoginPage/>} />
          <Route  path="/signin" element={<Signin/>} />
          <Route  path="/home" element={<Home/>} />
          <Route path="/products" element={<Productpage/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/buyinglist" element={<Buyinglist/>}/>
        </Routes>
      </Router>
    </>
  )
}
export default App;
