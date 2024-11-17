import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Ex01 from './pages/ex01';
import Ex02 from './pages/ex02';


const AppRoutes = () => (
  <Router>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/1" element={<Ex01 />} />
      <Route path="/2" element={<Ex02 />} />
    </Routes>
  </Router>
);

export default AppRoutes;