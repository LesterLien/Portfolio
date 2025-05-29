import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="font-bold text-white text-4xl m-3 flex flex-col justify-center items-center">
      <h1>
        Projects
      </h1>
      <div className="flex flex-wrap justify-center items-center m-3 gap-6 cursor-hover w-5/6">
        {projects.map((projects, index) => (
          <div
            key={index}
            className="w-95 h-68 bg-[#181823] outline-1 outline-[#181823] rounded-lg shadow-lg shadow-black px-5 py-6 flex flex-col m-3 transition-all duration-500 ease-in-out  hover:-translate-y-2"
          >
            <div className="flex flex-col justify-center text-[#C3C4C5]">
              <div className="flex flex-col">
                <h2 className="text-[24px] mb-1">{projects.title}</h2>
                <h3 className="text-[14px] mb-2 text-[#55555B] font-normal">{projects.date}</h3>
              </div>
              <div className="mb-3 overflow-hidden h-[171px] w-[340px]">
                <img src={projects.image} className="rounded-lg"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
