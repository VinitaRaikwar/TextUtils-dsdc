// import logo from './logo.svg';
import './App.css';
import AboutUs from './Components/AboutUs';
import Navbar from './Components/Navbar';
import Textform from './Components/TextForm';

function App() {
  return (
    <>
    < Navbar title="Textutils" aboutText="About Us" />
    <div className='p-5'>
      <Textform/>
      <AboutUs />
    </div>
    </>
  );
}

export default App;
