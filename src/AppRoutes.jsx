import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Ex01 from './pages/Ex01';
import Ex02 from './pages/Ex02';
import Ex03 from './pages/Ex03';
import Ex04 from './pages/Ex04';
import Ex05 from './pages/Ex05';
import Ex06 from './pages/Ex06';




const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/1" element={<Ex01 />} />
      <Route path="/2" element={<Ex02 />} />
      <Route path="/3" element={<Ex03 />} />
      <Route path="/4" element={<Ex04 />} />
      <Route path="/5" element={<Ex05 />} />
      <Route path="/6" element={<Ex06 />} />
    </Routes>
  </Router>
);

export default AppRoutes;