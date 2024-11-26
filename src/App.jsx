import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./assets/pages/Home"
import Login from "./assets/pages/Login"
import NotFound from "./assets/pages/NotFound"
import SignUp from "./components/SignUP"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/Login" element={<Login />}/>
        <Route  path="*" element={<NotFound/>}/>
        <Route  path="/SignUp" element={<SignUp/>}/>
        
      </Routes>
    </Router>
  )
}

export default App