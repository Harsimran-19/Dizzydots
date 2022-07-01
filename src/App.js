import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import MarketPlace from './components/MarketPlace';
import Creators from './components/Creators';
import Create from './components/Create';
import Footer from './components/Footer';
import Subscribe from './components/Subscribe';
import Community from './components/Community';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <MarketPlace/>
     <Subscribe/>
     <Create/>
     <Creators/>
     <Community/>
     <Footer/>
    </div>
  );
}

export default App;
