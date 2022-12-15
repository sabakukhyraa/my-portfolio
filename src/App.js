import { useState } from 'react';
import './css/index.css';
import Navbar from './components/Navbar';
import Burger from './components/Burger';

function App() {

  const [navbarToggle, setNavbarToggle] = useState(false);

  const navbarToggler = () => {
    setNavbarToggle(!navbarToggle)
  }
 
  return (
    <div className="relative">
      <button className='fixed top-12 right-12 object-cover px-6 py-2 rounded-full text-4xl font-bold bg-back-fronter text-semigray z-[999]'>Ali Kerem Ata</button>
      <Burger handleChange={navbarToggler}/>
      <Navbar isOn={navbarToggle}/>
    </div>
  );
}

export default App;
