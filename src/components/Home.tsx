import { skills } from "../data/skills";
import { projects } from "../data/projects";
import SideNavbar from "./SideNavbar";
import { Link } from "react-router-dom";
import { bio } from "../data/bio";
import { useState } from "react";

function Home() {
    const [selectedProject, setSelectedProject] = useState<
    {
      id: number;
      title: string;
      date: string;
      image: string;
      tags: string[];
      github: string;
    } | null>(null);
  
    const [showModal, setShowModal] = useState(false);
  
    const openModal = (project: {
      id: number;
      title: string;
      date: string;
      image: string;
      tags: string[];
      github: string;
    }) => {
      setSelectedProject(project);
      setShowModal(true);
    };
  
    const closeModal = () => {
      setSelectedProject(null);
      setShowModal(false);
    };

  return (
    <div className="min-h-screen">
    <SideNavbar/>
        <div className="flex flex-col justify-center items-center m-3">
          <div className="text-white text-4xl m-3 flex flex-wrap flex-col justify-center items-center" id="about">
            <h1 className="font-bold">
              About Me
            </h1>
            <div className="flex flex-col lg:flex-row w-4/5 m-3 gap-3">
              <div className="flex-1 max-w-full md:max-w-xl text-white text-[16px]">
                {bio.map((info) => (
                  <div className="h-auto flex flex-col gap-5">
                    <p className="leading-relaxed">
                      {info.description}
                    </p>
                    
                    <div className="flex justify-center items-center">
                      <a
                      href={info.resume}
                      target="display"
                      className="w-30 h-10 bg-[#191923] shadow-md shadow-black outline-1 outline-white hover:text-[#854CE6] transition duration-200 flex justify-center items-center rounded-md hover:-translate-y-1 hover:transition-all hover:duration-300"
                      >
                      View Resume
                      </a>
                    </div>

                  </div>

                ))}
              </div>
              <div className="flex-1 max-w-full md:max-w-xl">
                    <img 
                src="/assets/images/UCR.JPG" 
                alt="UCR" 
                className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl outline-1 outline-white"
              />
              </div>
            </div>
          </div>
          
          <div className="text-4xl m-3 flex flex-col justify-center items-center w-2/3" id="skills">
            <h1 className="font-bold text-white">Skills</h1>
            <div className="flex flex-wrap justify-center items-start m-3">
              {skills.map((skillCategory, index) => (
                <div
                  key={index}
                  className="m-3 w-80 min-h-70 bg-[#181823] outline-1 outline-[#181823] rounded-lg shadow-lg shadow-black px-5 py-6 flex flex-col gap-3 transition-all duration-500 ease-in-out  hover:-translate-y-2"
                >
                  <h2 className="text-xl font-semibold mb-3 flex justify-center items-center text-white">{skillCategory.title}</h2>
                  <div className="flex flex-wrap justify-center items-center gap-3 text-[#84858A]">
                    {skillCategory.skills.map((item, index) => {
                      const Icon = item.image;
                      return (
                        <div key={index} className="flex flex-row items-center w-auto border-1 rounded-lg p-3">
                          <Icon className="w-[24px] h-[24px] mr-2 text-[#854CE6]"/>
                          <span className="text-[16px] text-white">
                            {item.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>



          <div className="font-bold text-white text-4xl m-3 flex flex-col justify-center items-center" id="projects">
            <h1>
              Projects
            </h1>
            <div className="flex flex-wrap justify-center items-center m-3 cursor-hover">
              {projects.slice(0,3).map((project, index) => (
                <div
                  key={index}
                  onClick={() => openModal(project)}
                  className="m-3 w-95 h-68 bg-[#181823] outline-1 outline-[#181823] rounded-lg shadow-lg shadow-black px-5 py-6 flex flex-col gap-3 transition-all duration-500 ease-in-out  hover:-translate-y-2"
                >
                  <div className="flex flex-col justify-center text-[#C3C4C5]">
                    <div className="flex flex-col">
                      <h2 className="text-[24px] mb-1">{project.title}</h2>
                      <h3 className="text-[14px] mb-2 text-[#55555B] font-normal">{project.date}</h3>
                    </div>
                    <div className="mb-3 overflow-hidden h-[171px] w-[340px]">
                      <img src={project.image} className="rounded-lg"/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link 
            to="/projects" 
            className="w-35 h-15 text-[24px] bg-[#191923] shadow-lg shadow-black outline-1 outline-white hover:text-[#854CE6] transition duration-200 flex justify-center items-center rounded-md hover:-translate-y-1 hover:transition-all hover:duration-300"
            >
            See More
            </Link>
          </div>
        </div>

        {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-[#181823] p-6 rounded-xl w-11/12 max-w-xl text-white relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-2xl font-bold hover:text-[#854CE6] cursor-hover"
            >
              ×
            </button>
            <h2 className="text-[24px] font-semibold mb-1">{selectedProject.title}</h2>
            <p className="text-[14px] text-gray-400 mb-2">{selectedProject.date}</p>
            <div className="mb-3 overflow-hidden h-[171px]">
                <img src={selectedProject.image} className="rounded-lg" />
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#2a2a2e] text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mb-4">
                <p className="text-[14px] text-normal font-normal leading-relaxed">{selectedProject.description}</p>
            </div>
            <div className="w-full bg-[#2a2a2e] rounded-md p-1">
              <a
              href={selectedProject.github}
              className="flex justify-center items-center text-[24px] text-white hover:text-[#854CE6]"
            >
              View Code
            </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
