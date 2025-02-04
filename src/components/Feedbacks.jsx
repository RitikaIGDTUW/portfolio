import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'


const Feedbackcard=({index, testimonial, name, designation, company, image})=>(
  <motion.div variants={fadeIn("","spring",index*0.5,0.75)}
  className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    
    
    <div className>
      
      <div className="mt-1 flex justify-between items-center gap-1" >
        <div className="flex-1 mb-8 flex flex-col">
          <p className="text-white font-medium text-[18px]">
            {name}
          </p>
          
        </div>               
      </div>
      <p className="text-gray-300 tracking-wider text-[16px]">{testimonial}</p>
    </div>

  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}> What I have done so far</p>
          <h2 className={styles.sectionHeadText}>Experience.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial,index)=>(
          <Feedbackcard  key={testimonial.name} index={index}
          {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper (Feedbacks,"feedback")