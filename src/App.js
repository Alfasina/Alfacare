import './App.css';
import Navbar from './components/navbar'
import { BrowserRouter, Routes,Route,} from 'react-router-dom'
import Home from './components/Home';



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

        </Routes>
        
      </section>
    </div>
    </BrowserRouter>
  );
}

export default App;
