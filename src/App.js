import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import AboutUs from './Components/AboutUs';
// import Alert from './Components/Alert';
// import Github from './Components/Github';
import { useState } from 'react';

// import {
//   BrowserRouter,
//   Routes,
//   Route,


// } from "react-router-dom";

//Router --->//


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)


  const showAlert = (type, message) => {
    setAlert({ type: type, message: message })

    setTimeout(function () {
      setAlert(null)
    }, 1500)
  }


  const handleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('success', 'Dark mode is enabled')
    }

    else {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert('success', 'Dark mode is enabled')
    }
  }

  return (
    <>
      {/* <BrowserRouter> */}

        <Navbar mode={mode} handleMode={handleMode} title="TextUtils" aboutText="About Us" />
        <alert alert={alert} />
        <div className="p-5">
        <TextForm showAlert={showAlert} mode={mode} />
          {/* <Routes> */}
            {/* <Route path="/" element={
              } />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/Github" element={<Github />} /> */}


          {/* </Routes> */}
        </div>
      {/* </ BrowserRouter> */}
    </>

  );
}

export default App;