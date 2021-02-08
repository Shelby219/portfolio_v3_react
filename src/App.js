import Nav from './components/nav.js';
import Footer from './components/footer.js';
import Home from './components/home.js';
import Projects from './components/projects.js';
import { BrowserRouter as Router } from "react-router-dom";
import {AppContainer} from './components/styles.js';
import "./App.css";

function App() {
  return (

    <AppContainer>
     <Router>
          <Nav/>
          <Home/>
          <Projects/>
          React app
          <Footer/>
      </Router>
    </AppContainer>
  );
}

export default App;
