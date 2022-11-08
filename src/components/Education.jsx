import React from "react"
import {Link} from "react-router-dom"
import "../styles/Education.css"
import {motion} from 'framer-motion'
import SingleEduCard from "./SingleEduCard"
import image1 from "../images/school.jpg"
import image2 from "../images/school2.jpeg"
import image3 from "../images/polytechnic.jpeg"
import image4 from "../images/mewat.png"

const Education =()=>{
  const animate={
    initial:{
      x:'-100%',
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
        >Education</motion.h1>
      <div className="card-box">
       <SingleEduCard img={image1}  school="Delhi Public School" grade="High School" year="2012" per="91.2%" delay={0}/>
        <SingleEduCard img={image2} school="Akash Model School" grade="Intermediate" year="2014" per="64.2%" delay={0}/>
        <SingleEduCard img={image3} school="Jamia Millia Islamia" grade="Diploma in CSE" year="2019" per="78.64%" delay={0}/>
        <SingleEduCard img={image4} school="Mewat Engineering college" grade="B.Tech in CSE" year="2022" per="74.39%" delay={0} />
      
      </div>
      <div style={{marginBottom:"30px"}}>
        <Link to="/">
        <button style={{width:"60px", height:"40px", backgroundColor:"deeppink", color:"white",padding:"3px",borderRadius:"10px", cursor:"pointer", border:"none"}} >Home</button>
        </Link>
        
      </div>
    </div>

    
    
  )
}

export default Education