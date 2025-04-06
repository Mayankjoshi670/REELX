import { BrowserRouter as Router , Route  ,Routes } from 'react-router-dom'
import Admin from "./pages/Admin"
import User from "./pages/user"
import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/admin' element = {<Admin/>}/>
        <Route path= '/' element= {<User/>}/>
      </Routes>
    </Router>
  )
}

export default App
