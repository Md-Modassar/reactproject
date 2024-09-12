import './App.css';
import Cupacake from './components/Cupcake/Cupacake';
import Description from './components/Description/Description';
import Introduce from './components/intro/Introduce';
import Homepage from './pages/homepage/Homepage';
import { Route, Routes } from "react-router-dom"

function App() {


  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/des' element={<Description/>}/>
          <Route path='/intro' element={<Introduce/>}/>
          <Route path='cupcake' element={<Cupacake/>}/>
        </Routes>
    </div>
  );
}

export default App;
