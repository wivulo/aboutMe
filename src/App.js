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

function Icon({ link, icon, color }) {
  return <a href={link} className={'hover-' + color}><i className={'fa fa-' + icon}></i></a>
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
              <Icon link="http://facebook.com/walter_ivulo" icon="facebook" color="blue" />
              {/* <a href="http://web.whatsapp.com"><i className="fa fa-whatsapp"></i></a> */}
              <Icon link="http://web.whatsapp.com" icon="whatsapp" color="green" />
              {/* <a href="http://instagram.com/eclaterbc"><i className="fa fa-instagram"></i></a> */}
              <Icon link="http://instagram.com/eclaterbc" icon="instagram" color="red" />
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}

function SkillContainer({ description, value, icon }) {
  return (
    <div className="skill-container">
      <p className="skill-name"><i className={'fa fa-' + icon} aria-hidden="true"></i> {description} </p>

      <div className="full flex f-center">
        <div role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{ '--value': value }} ></div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="section flex f-column f-center section-black">

      <div className="whatIdo flex f-column f-center">
        <div className="index flex f-center">
          1
        </div>

        <h2>O que posso fazer?</h2>
      </div>
      <div className="grid">
        <SkillContainer description="Back-End (PHP, Nodejs, MySQL)" icon="cogs" value="50" />

        <SkillContainer description="Front-End (HTML, CSS, JS)" icon="picture-o" value="85" />

        <SkillContainer description="Testing (RSpec, Jasmine, PhantomJS)" icon="shield" value="10" />

        <SkillContainer description="Web Design" icon="pencil-square-o" value="90" />

        <SkillContainer description="Learning a new skill" icon="graduation-cap" value="100" />

        <div className="skill-container hidden"></div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="section section-whatIHadDo flex f-column f-center section-black">
      <div className="index flex f-center">
        2
      </div>

      <h2>O que eu já fiz?</h2>

      <div className="full flex f-center">
        <h3>Comming soon...</h3>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="section section-contact flex f-column f-center section-black">
      <div className="index flex f-center">
        3
      </div>

      <div className="contact-body flex f-row f-center">
        <div className="contact-left">
          <h1 className="txt txt-1 contact-title">Contact</h1>
          <br />
          <p className="txt txt-2">if you want, contact me, i'm allways online :)</p>
          <p className="txt txt-4">Whatsapp <i className="fa fa-whatsApp"></i>: (+244) 922232675</p>
          <p className="txt txt-5">Gmail <i className="fa fa-envelope"></i>: walterivulo@gmail.com</p>
        </div>
        <div className="contact-right">
          <p className="txt txt-6">Or fallow me </p>

          <p className="txt txt-7">Facebook <i className="fa fa-facebook"></i>: <a href="https://web.facebook.com/valtercio.ivulo">Walter ivulo</a></p>
          <p className="txt txt-8">Instagram <i className="fa fa-instagram"></i>: @Walter_Ivulo</p>
          <p className="txt txt-9">Linkedin <i className="fa fa-linkedin"></i>: <a href="https://www.linkedin.com/in/walter-ivulo-80398516a/">Walter Ivulo</a></p>
          <p className="txt txt-9">GitHub <i className="fa fa-github"></i>: <a href="https://github.com/wivulo">wivulo</a> </p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="section section-dark flex f-column f-center">
      <div className="bg"></div>
      <div className="txt-content">
        <p> <i className="fontawesome fa fa-copyright"></i> copyright 2022 - all right reserved</p>
        <p>create by @wivulo</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App flex f-column">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
