import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Parallax,ParallaxLayer } from '@react-spring/parallax';
import cheeseburger from "./320px-Cheeseburger.png"
import wine from "./png-clipart-clear-wine-glass-red-wine-wine-glass-cup-red-wine-glass-wine-removebg-preview.png"
import pizza from "./png-transparent-pizza-slice-pizza-italian-cuisine-sicilian-pizza-pizza-margherita-garlic-bread-takeout-pizza-by-the-slice-removebg-preview.png"
import { useRef } from 'react';
function App() {
  const ref=useRef();
  return (
    <div className="App">
      
      <div className='parallax'>
      <Parallax pages={3}  ref={ref}>
        <ParallaxLayer className='first' sticky={{start:0,end:0.3}} speed={1}>
          <p>BEST THING <br /> YOU TASTE</p>
        </ParallaxLayer>

        <ParallaxLayer offset={0.8} speed={1} className="images">
          <img src={cheeseburger} alt="" />
          <img src={pizza} alt="" />
          <img src={wine} alt="" />
        </ParallaxLayer>

        <ParallaxLayer>

        </ParallaxLayer>

      </Parallax>
      </div>
    </div>
  );
}

export default App;
