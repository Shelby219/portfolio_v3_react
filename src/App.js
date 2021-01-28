import Nav from './components/nav.js';
import Footer from './components/footer.js';
import Home from './components/home.js';
import Projects from './components/projects.js';
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (

    <div class="App">
     <Router>
          <Nav/>
          <Home/>
          <Projects/>
          React app
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
