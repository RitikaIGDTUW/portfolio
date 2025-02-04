import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { scale } from 'maath/vector2';
import { p } from 'framer-motion/client'
import { FaGlobe } from "react-icons/fa";


const ProjectCard=({index, name, description, tags, image, source_code_link, site_link})=>{
  return(
    <motion.div variants={fadeIn("up", "spring",index*0.5,0.75)}>
      <Tilt options={{
        max:45, scale:1, speed:450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img-hover">
            <div onClick={()=>window.open
               (source_code_link, "blank")} className="black-gradient w-10 h-10 flex justify-center items-center cursor-pointer rounded-full">
                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
                
               </div>
               <div onClick={()=>window.open
               (site_link, "blank")} className="black-gradient ml-1 w-10 h-10 flex justify-center items-center cursor-pointer rounded-full">
                <FaGlobe className='w-1/2 h-1/2' />                
               </div>
               
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {
            tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))
          }
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
     <>
           <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>My Work</p>
               <h2 className={styles.sectionHeadText}>Projects.</h2>
           </motion.div>

           <div className="w-full flex">
            <motion.p variants={fadeIn("","",0.1,1)} className="mt-3 text-secondary text-[17px]
            max-w-3xl leading-[30px]">
              I have worked on diverse projects that leverage technology to drive social impact and enhance user experiences. My projects focus on real-world problem-solving, integrating AI, web development, and data-driven solutions to create meaningful applications.              
            </motion.p>
           </div>

           <div className="mt-20 flex flex-wrap items-center justify-center gap-7">
             {projects.map((project,index)=>(
              <ProjectCard key={`project-${index}`}
                index={index} {...project}
              />
             ))}
           </div>
     </>
  )
}

export default SectionWrapper(Works,"");