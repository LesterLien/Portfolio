import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { skills } from "../data/skills";

function Home() {

  return (
    <div className="min-h-screen">
        <Navbar/>
        <div className="flex flex-col justify-center items-center m-3">
          <div className="text-white text-4xl m-3 flex flex-wrap flex-col justify-center items-center" id="about">
            <h1 className="font-bold">
              About Me
            </h1>
            <div className="text-white text-[16px] max-w-3xl text-center m-4">
                <p>
                  Hi, I am Lester Lien. 
                  I recently graduated from the University of California, Riverside with a Bachelor of Science in Computer Science. 
                  I aspire to be a software engineer and enjoy working on full-stack projects. 
                  I have been learning more about IT support and how it operates.
                  At the moment, I am seeking opportunities to improve my skills, work alongside a team, and contribute towards something intriguing. 
                  Whenever I am coding web apps or providing technical support, I am constantly eager to learn and perform well.
                </p>
            </div>
          </div>

          <img 
            src="/assets/images/UCR.JPG" 
            alt="UCR" 
            className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl outline-1 outline-white"
          />
          
          <div className="text-4xl m-3 flex flex-col justify-center items-center" id="skills">
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
            <div className="flex flex-wrap justify-center items-center m-3">
                <div className="m-3 w-85 h-120 bg-[#181823] outline-1 outline-[#181823] rounded-lg shadow-lg shadow-black px-5 py-6 flex flex-col gap-3 transition-all duration-500 ease-in-out  hover:-translate-y-2">
                  Project 1
                </div>
                 <div className="m-3 w-85 h-120 bg-[#181823] outline-1 outline-[#181823] rounded-lg shadow-lg shadow-black px-5 py-6 flex flex-col gap-3 transition-all duration-500 ease-in-out hover:-translate-y-2">
                  Project 2
                </div>
                 <div className="m-3 w-85 h-120 bg-[#181823] outline-1 outline-[#181823] rounded-lg shadow-lg shadow-black px-5 py-6 flex flex-col gap-3 transition-all duration-500 ease-in-out hover:-translate-y-2">
                  Project 3
                </div>
            </div>
            <a>See More</a>
          </div>

        </div>
        
        <Footer/>
    </div>
  );
}

export default Home;
