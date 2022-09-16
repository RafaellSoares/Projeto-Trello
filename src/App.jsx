import {BrowserRouter,Routes,Route,} from "react-router-dom";
import User from './Components/User'
import './App.css'
import Menu from './Components/Menu';
import Lista from './Components/Listas';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Menu/>}>
        <Route path="/" element={<User/>}/>

        <Route path="Lista" element={<Lista/>}>
          <Route path=":IDBOARD" element={<Lista/>} />
        </Route>

      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
