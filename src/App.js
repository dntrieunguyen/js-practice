import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Lab301 from './components/Lab301';
import Lab201 from './components/Lab201';
import Lab701 from './components/Lab701/Lab701';
import Lab901 from './components/Lab901/Lab901';
import Lab1001 from './components/Lab10-1/components/Lab1001';
import Lab15 from './components/Lab15/Lab15';
function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/lab201" element={<Lab201 />} />
            <Route path="/lab301" element={<Lab301 />} />
            <Route path="/lab701" element={<Lab701 />} />
            <Route path="/lab901" element={<Lab901 />} />
            <Route path="/lab1001" element={<Lab1001 />} />
            <Route path="/lab15" element={<Lab15 />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
