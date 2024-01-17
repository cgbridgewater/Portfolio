import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/syncopate"; 
import Origin from './Views/Origin';
import Index from './Views/Index';



function App() {
  return (
      <div className="main-container">
          <BrowserRouter>
          <Routes>
            <Route element={<Index/>} path="/" default />
            <Route element={<Origin/>} path="/origin"/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
