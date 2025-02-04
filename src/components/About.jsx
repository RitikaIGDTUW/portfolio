import React from 'react'
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion'

import {styles} from '../styles';
import {services} from '../constants'
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ icon, title, post,edu }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-7 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[18px] font-bold text-center">{edu}</h3>
          <p className='text-gray-200 text-center'>{post}</p>
          <p className='text-gray-200 text-center'>{title}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
      className="mt-4 mb-28 text-secondary text-[19px] max-w-5xl leading-[30px]">
        Hello! I’m Ritika, a passionate second-year BTech student specializing in Computer Science and Engineering at IGDTUW (Indira Gandhi Delhi Technical University for Women). My academic journey is focused on developing strong technical foundations, exploring innovative solutions, and making an impact in the tech world. I’m keen on exploring new technologies that will help me build impactful software and systems.
      </motion.p>

      <motion.div variants={textVariant()} >
      <p className={styles.sectionSubText}>Acadmic Performance</p>
      <p className={styles.sectionHeadText}>Education</p>
      </motion.div>
      
      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")