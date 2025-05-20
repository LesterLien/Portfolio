import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home() {

  return (
    <div className="min-h-screen">
        <Navbar/>
        <div className="flex flex-col justify-center items-center m-3">
          <div className="font-bold text-white text-4xl m-3" id="about">
            <h1>About Me</h1>
          </div>
          <img 
            src="/assets/images/UCR.JPG" 
            alt="UCR" 
            className="w-auto h-100 rounded-xl outline-1 outline-white"
          />
          <div className="font-bold text-white text-4xl m-3" id="skills">
            <h1>Skills</h1>
            <div className="flex flex-row justify-center items-center m-3">
              
            </div>
          </div>
          <div className="font-bold text-white text-4xl m-3 flex flex-col justify-center items-center" id="projects">
            <h1>Projects</h1>
            <div className="flex flex-row justify-center items-center m-3">
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
