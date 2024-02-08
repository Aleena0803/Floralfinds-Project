import './App.css';
// import LoginSignup from './Components/LoginSignup/LoginSignup';
// import Home from './Components/Page/Home';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Contacts from './Pages/Contacts'
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      {/* <LoginSignup/> */}
      {/* <Home/> */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/categories' element={<ShopCategory category="categories"/>}/>
        {/* <Route path='/contacts' element={<ShopCategory category="contacts"/>}/> */}
        <Route path='/contacts' element={<Contacts/>}/>
        {/* <Route path='/messages' element={<ShopCategory category="messages"/>}/> */}
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>

  );
};

export default App;