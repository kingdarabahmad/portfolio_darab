import React from "react"
import {motion} from "framer-motion"
import {Link} from "react-router-dom"







const SkillCard=(props)=>{

  const animate= {
    initial:{
      opacity:0
    },
  whileInView:{
    opacity:1
  }
  }

  return <motion.div className="eduCard" {...animate} transition={{delay:props.delay}} >
    <img src={props.img} alt="image" style={{objectPosition:"center",objectFit:"contain"}}/>
    <div className="eduCard-data" style={{marginTop:"3rem"}} >

    <h2>{props.title}</h2>
      
    </div>
  
  </motion.div>
}

export default SkillCard