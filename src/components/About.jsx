import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {

  const ServiceCard = ({index, title, icon}) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div options={{
            max: 45,
            scale: 1,
            speed: 450
          }} className ="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a student of the tech world, always eager to be on the front lines
        of emerging technologies. I enjoy constantly upskilling and challenging
        myself to do and know more. I take pride in my work and therefore always
        want to be in-line with industry trends and standards. But more
        importantly, I enjoy working with people. I believe that the more
        technological society becomes, the greater the need for human connection
        and understanding. I strive to bridge that gap in order to improve
        people's globally and share whatever knowledge I have along the way.
        Excited for what is, and consistently looking forward for what is to
        come. I hope to see you along the way!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
