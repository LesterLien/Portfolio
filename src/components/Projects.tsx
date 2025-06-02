import { projects } from "../data/projects";
import { useState } from "react";

export default function Projects() {
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
    <div className="font-bold text-white text-4xl m-3 flex flex-col justify-center items-center">
      <h1>Projects</h1>
      <div className="flex flex-wrap justify-center items-center m-3 gap-6 cursor-hover w-5/6">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => openModal(project)}
            className="cursor-pointer w-95 h-68 bg-[#181823] outline-1 outline-[#181823] rounded-lg shadow-lg shadow-black px-5 py-6 flex flex-col m-3 transition-all duration-500 ease-in-out hover:-translate-y-2"
          >
            <div className="flex flex-col justify-center text-[#C3C4C5]">
              <div className="flex flex-col">
                <h2 className="text-[24px] mb-1">{project.title}</h2>
                <h3 className="text-[14px] mb-2 text-gray-400 font-normal">{project.date}</h3>
              </div>
              <div className="mb-3 overflow-hidden h-[171px] w-[340px]">
                <img src={project.image} className="rounded-lg" />
              </div>
            </div>
          </div>
        ))}
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
