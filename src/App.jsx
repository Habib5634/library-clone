
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Homepage from './components/HomePage/homepage'
import Subjects from "./components/HomePage/sections/browse-sections/Subjects";
import Trending from "./components/HomePage/sections/browse-sections/Trending";
import Login from './components/HomePage/sections/Login'
import Signup from './components/HomePage/sections/Signup'

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/sections/browse-sections/Subjects" element={<Subjects/>} />
      <Route path="/sections/browse-sections/Trending" element={<Trending/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  </BrowserRouter> 
  );
}
 
export default App;
