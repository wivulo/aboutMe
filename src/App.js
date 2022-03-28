import './App.css';
import './fontawesome.css';
import MyVideocomponent from './MyVideoComponent';

function Navbar() {
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

function Icon({ link, icon, color }){
  return <a href={link} className={'hover-'+color}><i className={'fa fa-'+icon}></i></a>
}

function Header() {
  return (
    <header className="v-header container">
      <div className="fullscreen-video-wrap">
        <MyVideocomponent />
      </div>

      <div className="header-overlay"></div>

      <div className="header-content flex f-column">
        <div className="line-1 flex f-row"></div>

        <div className="line-2 flex f-column f-left-bottom">
          <div className="me-content flex f-column f-center">
            <h1 className="roboto-bold">Valtércio O. Ivulo</h1>
            <h5 className="roboto-thin">Hello! I am a student. 3rd year of the Telecommunications Engineering course
              and freelance programmer<br />Website and Desktop</h5>

            <div className="full flex f-center">
              <button className="btn btn-border">Saber mais...</button>
            </div>

            <div className="socialNetwork flex f-row f-center">
              {/* <a href="http://facebook.com/walter_ivulo"><i className="fa fa-facebook"></i></a> */}
              <Icon link="http://facebook.com/walter_ivulo" icon="facebook" color="blue"/>
              {/* <a href="http://web.whatsapp.com"><i className="fa fa-whatsapp"></i></a> */}
              <Icon link="http://web.whatsapp.com" icon="whatsapp" color="green"/>
              {/* <a href="http://instagram.com/eclaterbc"><i className="fa fa-instagram"></i></a> */}
              <Icon link="http://instagram.com/eclaterbc" icon="instagram" color="red"/>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <div className="App flex f-column">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
