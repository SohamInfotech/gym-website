import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componet/About';
import Home from './componet/Home';
import Blog from './componet/Blog';
import Contect from './componet/Contact';
import Join from './componet/Join';

function App() {
  return (
    <>
      {/* <Home/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/About" element={<About />}>
          </Route>
          <Route path="/blog" element={<Blog />}>
          </Route>
          <Route path="/contact" element={<Contect />}>
          </Route>
          
          <Route path="/Joinus" element={<Join />}>
          </Route>
          
          
        </Routes>
      </BrowserRouter>








      {/* <Nav/>

     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Section6/> */}

      {/* <Tr/> */}
      {/* <Section5/> */}
      {/* <About/> */}
      {/* <Footer/> */}
      {/* <Gotop/> */}
    </>
  );
}

export default App;
