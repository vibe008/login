
import './App.css';
import Login from './coponents/Login';
import { Routes, Route,  } from "react-router-dom";
import Box from './coponents/Box'
import Area1 from './coponents/area/Area1';
import Area2 from './coponents/area/Area1';
import Area3 from './coponents/area/Area1';
function App() {
  return (
 <>

 <Routes>

 <Route path="/" element={ <Login/>} />
       <Route path="/Box" element={<Box/>} />
       <Route path="/Area1" element={<Area1/>} />
       <Route path="/Area2" element={<Area2/>} />
       <Route path="/Area3" element={<Area3/>} />
      </Routes>
 </>
  );
}

export default App;
