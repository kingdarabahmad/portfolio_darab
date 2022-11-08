import React from "react"
import { motion } from "framer-motion"
import {Link} from "react-router-dom"
import {AiFillGithub, AiFillInstagram, AiFillFacebook, AiFillYoutube, AiFillLinkedin} from "react-icons/ai"
import ownerImg from '../images/owner.jpeg'

const Home =()=>{

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
  const animate2={
    initial:{
      y:"100%",
      opacity:0
    },
    whileInView:{
      y:0,
      opacity:1
    }
  }
  const animate3={
    initial:{
      y:"50%",
      opacity:0
    },
    whileInView:{
      y:0,
      opacity:1
    }
  }
  return <div className="home">

    <div className="home-content">
      <motion.div className='owner-img' {...animate3} transition={{delay:0.1}}>
        <img src={ownerImg} alt="ownerImage"/>
        
      </motion.div>
    
       <motion.h1 {...animate} transition={{delay:0.5}}>
        WELCOME 
       </motion.h1 >
       <motion.div className="text" {...animate} transition={{delay:0.6}}>
        <span>Hi! I'm Darab Ahmad khan, A Front-end Developer. </span>
         <span>Explore this website to know more about me.</span>
       </motion.div>
      <motion.div className="home-footer" {...animate2} transition ={{delay:0.9}}>
        <a href="https://github.com/kingdarabahmad" target="blank"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/darab-ahmad-khan
" target="blank"><AiFillLinkedin/></a>
        <a><AiFillFacebook/></a>
        <a><AiFillYoutube/></a>
      </motion.div>
    </div> 
    
  </div>
}

export default Home