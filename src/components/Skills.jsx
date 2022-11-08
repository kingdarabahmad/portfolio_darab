import React from "react"
import SkillCard from "./SkillCard"
import {motion} from "framer-motion"
import htmlImg from "../images/html.png"
import cssImg from "../images/css.png"
import javascriptImg from "../images/javascript.png"
import reactImg from "../images/react.png"
import tailwindImg from "../images/tailwind.jpg"
import reduxImg from "../images/redux.jpg"
import gitGithubImg from "../images/gitGithub.png"
import { Link } from "react-router-dom"


const Skills=()=>{
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
        >Skills</motion.h1>
      <div className="card-box">
       <SkillCard 
         img={htmlImg}  title="HTML" delay={0.1}/>
        <SkillCard
          style={{objectPosition:"top"}}
          img={cssImg} title="CSS" tech="CSS" delay={0.1}/>
        <SkillCard
          img={tailwindImg} title="Tailwind CSS"  delay={0.1}/>
        <SkillCard
          img={javascriptImg} title="Javascript" delay={0.1} />
        
        <SkillCard
          img={reactImg} title="React.js" delay={0.1} />

          <SkillCard
            img={reduxImg} title="Redux" delay={0.1} />
        
          <SkillCard
            img={gitGithubImg} title="Git and Github" delay={0.1} />
        
      
      </div>
      <div style={{marginBottom:"30px"}}>
        <Link to="/">
        <button style={{width:"60px", height:"40px", backgroundColor:"deeppink", color:"white",padding:"3px",borderRadius:"10px", cursor:"pointer",border:"none"}} >Home</button>
        </Link>
        
      </div>
    </div>

    
    
  )
}

export default Skills