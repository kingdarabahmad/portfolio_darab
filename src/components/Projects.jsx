import React from "react"
import ProjectCard from "./ProjectCard"
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import image1 from "../images/school.jpg"
import image2 from "../images/school2.jpeg"
import image3 from "../images/polytechnic.jpeg"
import image4 from "../images/mewat.png"
import estoreImg from "../images/e-store.png"
import todoappImg from "../images/todoapp.png"
import weatherappImg from "../images/weatherapp.png"
import portfolioImg from "../images/portfolio.png"
// import link1 from "https://kingdarabahmad.github.io/todo-app/"
// import link2 from "e-store-myapp/netlify.app"

const Projects=()=>{
  const animate={
    initial:{
      x:"-100%",
      opacity:0
    },
    whileInView:{
      x:0,
      opacity:1
    }
  }
  return (
    <div className="education">
      <motion.h1 
       {...animate} transition={{delay:0.2}}
        >Projects</motion.h1>
      <div className="card-box">
       <ProjectCard 
         img={portfolioImg}  title="Portfolio" tech="HTML, CSS, React.js" link={"https://portfolioresume.darab-ahmadahma.repl.co/"} delay={0.1}/>
        <ProjectCard
          style={{objectPosition:"top"}}
          img={estoreImg} title="E-Store" tech="HTML, Tailwind CSS, React.js" link={"https://e-store-myapp.netlify.app"} delay={0.1}/>
        <ProjectCard
          img={todoappImg} title="TODO App" tech="HTML, CSS, React.js" link={ "https://kingdarabahmad.github.io/todo-app/" } delay={0.1}/>
        <ProjectCard
          img={weatherappImg} title="Weather App" tech="HTML, CSS, Javascript" link={"https://javascript19wheatherapiproject.darab-ahmadahma.repl.co/"} delay={0.1} />
      
      </div>
      <div style={{marginBottom:"30px"}}>
        <Link to="/">
        <button style={{width:"60px", height:"40px", backgroundColor:"deeppink", color:"white",padding:"3px",borderRadius:"10px", cursor:"pointer",border:"none"}} >Home</button>
        </Link>
        
      </div>
    </div>

    
    
  )
}

export default Projects