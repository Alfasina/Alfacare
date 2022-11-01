import './App.css';
import Navbar from './components/navbar'
import { BrowserRouter, Routes,Route,} from 'react-router-dom'
import Home from './components/Home';
import Error from './components/home components/Error';
import ChoiceDetails from './components/home components/choiceDetails';



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
        <Route path="capacities/:parags" element={<ChoiceDetails/>} />
        <Route path="*" element={<Error/>} />
        </Routes>
        
      </section>
    </div>
    </BrowserRouter>
  );
}

export default App;
