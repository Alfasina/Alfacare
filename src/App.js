import './App.css';
import Navbar from './components/navbar'
import { BrowserRouter, Routes,Route,} from 'react-router-dom'
import Home from './components/Home';
import Error from './components/home components/Error';
import Footer from './components/Footer';
import About from './pages/About';
import Project from './pages/Project';
import SingleProject from './pages/SingleProject';



function App() {
  return (
    <BrowserRouter>
    <div className="App" >
      <div>
        <Navbar/>
      </div>
      <section>
        <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path="about" element={<About/>} />
        <Route path="projects" element={<Project/>} />
        <Route path="project/:parags" element={<SingleProject/>} />
        <Route path="*" element={<Error/>} />
        </Routes>
        
      </section>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
