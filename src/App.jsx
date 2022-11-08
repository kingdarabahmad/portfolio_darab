import './styles/App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import SideBar from "./components/SideBar"
import Home from "./components/Home"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


export default function App() {
  return (
    <BrowserRouter>

      <section className='main'>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>} />
        
        
      
      </Routes>
    
    
    <SideBar/>
      </section>

    </BrowserRouter>
    
    
  )
}
