import { Route, Routes } from "react-router-dom"
import UpdateEmployee from "./components/update"
import Home from "./components/Home"
 
function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/update" element={<UpdateEmployee />} />

    </Routes>
  )
}

export default App