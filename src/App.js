
import './App.css';
// import About from './Components/About/About';
import Benefits from './Components/Benefits/Benefits';
import Contact from './Components/Contact/Contact';
import Course from './Components/Courses/Course';
import Footer from './Components/Footer/Footer';
// import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Pricing from './Components/Price/Pricing';
import Stories from './Components/Stories/Stories';
import Team from './Components/Team/Team';
// import { Route,Routes } from 'react-router-dom';
// import About from './Components/About/About';

function App() {
 
  return (
    <div className="App">
      <Home/>
      <Benefits/>
      <Stories/>
     
      <Course/>
      <Pricing/>
      <Team/>
      <Contact/>
      <Footer/>

      {/* <Router> */}
     
   {/* <Routes >
  
   <Route path="/about" element={<About/>}/>
   </Routes> */}
   {/* </Router> */}

    </div>
  );
}

export default App;
