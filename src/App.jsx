
import { Routes,Route } from "react-router-dom"
import Product from "./Pages/Product"
import Service from "./Pages/Service"
import Parent from "./Pages/Parent"
import Attendence from "./Pages/Attendence"
import Dashboard from "./Pages/Dashboard"
import Sidenav from "./Components/Sidenav"


function App(){
     return  <Sidenav>
     <Routes>
       <Route path="/" element={<Dashboard/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/parent" element={<Parent/>}/>
          <Route path="/attendence" element={<Attendence/>}/>
     </Routes>
     </Sidenav>
}
export default App