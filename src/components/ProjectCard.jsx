import React from "react"
import {motion} from "framer-motion"
import {Link} from "react-router-dom"

const ProjectCard=(props)=>{

  const animate= {
    initial:{
      opacity:0
    },
  whileInView:{
    opacity:1
  }
  }

  return <motion.div className="eduCard" {...animate} transition={{delay:props.delay}} >
    <img src={props.img} alt="image" style={{objectPosition:'top'}}/>
    <div className="eduCard-data" style={{lineHeight:"26px"}} >

    <h2>{props.title}</h2>
    <h2>Tech-Used:{props.tech}</h2>
    <a href={props.link} target="blank" style={{textDecoration:"none", color:"deeppink"}}>See Live</a>
      
    </div>
  
  </motion.div>
}

export default ProjectCard