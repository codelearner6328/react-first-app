// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// let name = "coder";
function App() {

  const [modeBootstrap, setMode] = useState('light'); //Whether Dark mode is Enabled or Disabled
  const toggleMode = () => {
    if (modeBootstrap === "light") { //switching on bootstrap class.
      setMode('dark');
      showAlert('Dark mode has been enabled', 'success', 'success');
      document.title = "C-Dark Mode";
      // setTimeout(() => {
      //   document.title = "Its is Amazing";
      // }, 2000);
      // setTimeout(() => {
      //   document.title = "Install our app now.";
      // }, 3000);
    } else {
      setMode("light");
      showAlert('Light mode has been enabled', 'success', 'secondary');
      document.title = "C-Light Mode";
    }
    toggleStyle();
  }
  //darkmode base on css clases except of inline css
  const [darkMode, setDarkMode] = useState(false);
  const toggleStyle = () => {
    document.body.classList.toggle('off', darkMode);
    document.body.classList.toggle('on', !darkMode);  // ! negation operator change true to false and false to true

    setDarkMode(!darkMode); //switching on css class.

  }

  // alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, alertClass) => {
    setAlert({
      type: type,
      msg: message,
      alertClass: alertClass
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    // <>
    //   <h1>abc</h1>
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // </>
    <>
      {/* <nav>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </nav>
      <p>Hi {name}</p>
      <div className="container"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aspernatur veritatis labore. Eius adipisci mollitia iure amet autem, eveniet ducimus totam, vitae rem tempore nostrum dolores. Alias laborum perspiciatis consequatur?</p></div>

      <div className="blank">
        Lovely
      </div> */}

      <Router>
        <Navbar title="Learn" aboutText="About Us" modeBootstrap={modeBootstrap} toggleMode={toggleMode} />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className={`container  my-3 ${darkMode ? "on" : "off"} `}>
          <Routes>
            <Route element={<TextForm />} path="/" eading="Enter text to analyze" darkMode={darkMode} showAlert={showAlert}>
              {/* <TextForm heading="Enter text to analyze" darkMode={darkMode} showAlert={showAlert} /> */}
            </Route>
            <Route path="/about" element={<About />}> </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
