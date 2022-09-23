
import { useState } from 'react';
import './App.css';
import AllGun from './Components/AllGun/AllGun';
import Header from './Components/Header/Header';

function App() {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(prev => prev + 1);
    alert('Product is added to the cart');
  }

  return (
    <div className="App w-[1200px] mx-auto">
      <Header count={count}></Header>
      <AllGun countHandler={countHandler}></AllGun>
    </div>
  );
}

export default App;
