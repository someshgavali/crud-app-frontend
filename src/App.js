
import './App.css';
import Home from './Pages/Home/Home';
import NewUser from "./Pages/NewUser/NewUser"
import EditUser from "./Pages/EditUser/EditUser"
import {BrowserRouter,Routes,Route} from "react-router-dom";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/addUser' element={<NewUser />}/>
        <Route path="/editUser/:userId" element={<EditUser />}/>

      </Routes>
    </BrowserRouter>
  );
};

export default App;

 




