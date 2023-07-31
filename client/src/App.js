import './App.css';
import  Navmenu  from './Component/Navbar';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { About } from './Pages/About';
import { Home } from './Pages/Home';
import { AddUsers } from './Users/AddUsers';
import { Contactus } from './Pages/Contactus';
import Viewuser from './Users/Viewuser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navmenu></Navmenu>
       <Routes>
       <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/user' element={<AddUsers></AddUsers>}></Route>
        <Route path='/contact' element={<Contactus></Contactus>}></Route>
        <Route path='/view/:id' element={<Viewuser></Viewuser>} ></Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
