
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import About from './Pages/About'
import User from './Pages/User'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import UserLogin from './Pages/UserLogin';

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path='/user' element={<User />}></Route>
          <Route exact path='/contact' element={<Contact />}></Route>
          <Route exact path='/login' element={<UserLogin />}></Route>
      </Routes>
    </Router>    
    </>
  );
}

export default App;
