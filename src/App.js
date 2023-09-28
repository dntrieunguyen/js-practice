import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Lab301 from './components/Lab301';
import Lab201 from './components/Lab201';
import Lab701 from './components/Lab701/Lab701';
import Lab901 from './components/Lab901/Lab901';
function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/lab201" element={<Lab201 />} />
            <Route path="/lab301" element={<Lab301 />} />
            <Route path="/lab701" element={<Lab701 />} />
            <Route path="/lab901" element={<Lab901 />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
