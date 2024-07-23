
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Service from './Components/Service';
import About from './Components/About';
import Testimonial from './Components/Testimonial';
import Product from './Components/Product';
import Myfooter from './Components/Myfooter';
function App() {
  return (
    <div className="App">
    <Navbar />
     <Home/>
     <Service/>
     <About/>
     <Product/>
     <Testimonial/>
     <Myfooter/>

    </div>
  );
}

export default App;
