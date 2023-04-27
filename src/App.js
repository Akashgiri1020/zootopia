import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx"
import Navbar from './Components/Navbar.jsx';
import TradingCard from './Pages/TradingCard.jsx';
import Rabbit from './TradingCards/Rabbit.jsx';
import Elephant from './TradingCards/Elephant.jsx';
import Fox from './TradingCards/Fox.jsx';
import Giraffe from './TradingCards/Giraffe.jsx';
import Goat from './TradingCards/Goat.jsx';
import Kangaroo from './TradingCards/Kangaroo.jsx';
import Leapord from './TradingCards/Leapord.jsx';
import Lion from './TradingCards/Lion.jsx';
import Mongoose from './TradingCards/Mongoose.jsx';
import Platypus from './TradingCards/Platypus.jsx';
import Rat from './TradingCards/Rat.jsx';
import Tiger from './TradingCards/Tiger.jsx';
import Zebra from './TradingCards/Zebra.jsx';


const App = () => {
  return (
    <div>
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rabbit" element={<Rabbit />} />
            <Route path="/elephant" element={<Elephant />} />
            <Route path="/fox" element={<Fox />} />
            <Route path="/giraffe" element={<Giraffe />} />
            <Route path="/goat" element={<Goat />} />
            <Route path="/kangaroo" element={<Kangaroo />} />
            <Route path="/leapord" element={<Leapord />} />
            <Route path="/lion" element={<Lion />} />
            <Route path="/mongoose" element={<Mongoose />} />
            <Route path="/platypus" element={<Platypus />} />
            <Route path="/rabbit" element={<Rabbit />} />
            <Route path="/rat" element={<Rat />} />
            <Route path="/tiger" element={<Tiger />} />
            <Route path="/zebra" element={<Zebra />} />





            <Route path="/TradingCard" element={<TradingCard />} />
        </Routes>
    </BrowserRouter>
    </div>

  )
}

export default App
