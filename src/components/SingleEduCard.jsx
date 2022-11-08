import React from "react"
import {motion} from 'framer-motion'

const SingleEduCard=(props)=>{

  const animate= {
    initial:{
      opacity:0
    },
  whileInView:{
    opacity:1
  }
  }

  return <motion.div className="eduCard" {...animate} transition={{delay:props.delay}}>
    <img src={props.img} alt="image"/>
    <div className="eduCard-data">

    <h2>{props.school}</h2>
    <h2>{props.grade}</h2>
      
    <h3>Year:{props.year}</h3>
    <h4>percentage:{props.per}</h4>
    </div>
  
  </motion.div>
}


export default SingleEduCard