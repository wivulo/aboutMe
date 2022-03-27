import './App.css';
import './fontawesome.css';

function Navbar(){
  return (
    <nav className='navBar flex f-row'>
      <div className="logo flex f-row f-left-center">
          <div>
            <h2><span>&#10096; &#10097;</span></h2>
          </div>
          <div>
            <h2>WIVULO</h2>
            <small>Walter Ivulo - Pipocas ideias developers</small>
          </div>
        </div>

        <div className="menu-content flex f-right-center">
          <ul className="menu flex f-row">
            <li><a href="#me" className="locale-anchor">Me</a></li>
            <li><a href="#skills" className="locale-anchor">Skills</a></li>
            <li><a href="#projects" className="locale-anchor">Projects</a></li>
            <li> <a href="#contact" className="locale-anchor">Contact</a></li>
          </ul>
        </div>
    </nav>
  );
}



function App() {
  return (
    <div className="App flex f-column">
      <Navbar />

    </div>
  );
}

export default App;
