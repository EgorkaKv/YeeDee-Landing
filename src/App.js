import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Business from './Components/Business';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <AboutUs />
        <Business />
        <Footer />
    </div>
  );
}

export default App;
