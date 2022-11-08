import React from "react"
import { Link } from "react-router-dom"
import {MdCastForEducation,MdSubject} from "react-icons/md"
import {AiFillProject} from "react-icons/ai"
import {GiSkills} from "react-icons/gi"
import {motion} from "framer-motion"

const SideBar=()=>{
  const animate={
    initial:{
      x:"+100%",
      opacity:0
    },
    whileInView:{
      x:0,
      opacity:1
    }
  }
  return (
    <div className="sidebar">
      <div className="sidebar-content">

        <motion.div className="edu-box" {...animate} transition={{delay:0.2}}>
          <span>Education</span>
          <Link to="/education">{<MdCastForEducation/>}</Link>
        
        </motion.div>
        
        <motion.div className="projects-box" {...animate} transition={{delay:0.4}}>
          <span>Projects</span>
          <Link to="/projects">{<AiFillProject/>}</Link>
        </motion.div>
        
        <motion.div className="skill-box" {...animate} transition={{delay:0.6}}>
          <span>Skills</span>
          <Link to="/skills">{<GiSkills/>}</Link>
           
        </motion.div>
        
        
        
        
        
      </div>
    </div>
  )
}

export default SideBar