import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    console.log(process.env.REACT_APP_BASENAME);
  return (
    <div className="App">
      <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
          <Routes>
              <Route path={'/'} element={<header className="App-header">
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Home Page
                  </a>
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                      This <code>src/App.js</code> is a home page
                  </p>

              </header>}/>
              <Route path={'/about'} element={<header className="App-header">
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      About Page
                  </a>
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                      Its all about  <code>you</code>
                  </p>

              </header>}/>
              <Route path={'/contact'} element={<header className="App-header">
                  <a
                      className="App-link"
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      Contact Page
                  </a>
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                      Do give me a  <code>call</code>
                  </p>

              </header>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
