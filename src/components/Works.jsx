import React, {useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, link } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  site_link, 
}) => {
  return (
    <motion.div >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(site_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={link}
                alt="github"
                className="w-1/2 h-1/2 object-contain rounded-full"
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};



const Works = () => {
  
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setData(projects);
    setFilteredData([... new Set(projects.map((item) => item.filter))])
  }, [])
  
  const projectFilter = (projectData) => {
    const filterData = projects.filter((item) => item.filter === projectData)
    setData(filterData);
    console.log(filterData)
  }
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>


      <div className="mt-20 flex flex-wrap gap-7">
        <div className="justify-center ">
          <ul className="flex rounded-xl">
            <li><button onClick={() => setData(projects)} className="bg-tertiary py-3 px-3 outline-none w-fit text-white font-bold shadow-md shadow-primary ">All</button></li>
            {filteredData.map((item) => <li><button onClick={() => {projectFilter(item)}} className="bg-tertiary py-3 px-3 outline-none w-fit text-white font-bold shadow-md shadow-primary ">{item}</button></li>)}
          </ul>
        </div>

        {/* Works new:
        {data.map((item) => (
          <div className="" key={item.id}><img src={item.image} alt="" /></div>
        ))} */}
        </div>

          {/* Current in trial: */}
      <div className="mt-5 flex flex-wrap gap-7">
        {data.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      
          {/* Works old:
      <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(Works, "");
