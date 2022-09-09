import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Parallax,ParallaxLayer } from '@react-spring/parallax';
import cheeseburger from "./320px-Cheeseburger.png"
import wine from "./png-clipart-clear-wine-glass-red-wine-wine-glass-cup-red-wine-glass-wine-removebg-preview.png"
import pizza from "./png-transparent-pizza-slice-pizza-italian-cuisine-sicilian-pizza-pizza-margherita-garlic-bread-takeout-pizza-by-the-slice-removebg-preview.png"
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='parallax'>
      <Parallax pages={3}>
        <ParallaxLayer className='first' sticky={{start:0,end:1.2}}>
          <p>BEST THING</p>
          <p>YOU  TASTE</p>
        </ParallaxLayer>

        <ParallaxLayer offset={0.8} speed={1}>
          <img src={cheeseburger} alt="" />
          <img src={pizza} alt="" />
          <img src={wine} alt="" />
        </ParallaxLayer>

      </Parallax>
      </div>
    </div>
  );
}

export default App;
