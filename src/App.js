import './App.css';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Project from './Project/Project';
import Skills from './Skills/Skills';
import Footer from './UI/Footer';
import Navbar from './UI/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
