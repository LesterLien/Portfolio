import Navbar from "../components/Navbar";

function Home() {

  return (
    <div className="min-h-screen">
          <Navbar/>
        <div className="flex flex-col justify-center items-center m-3">
          <div className="font-bold text-white text-4xl m-3">
            About Me
          </div>
          <img 
            src="/assets/images/UCR.JPG" 
            alt="UCR" 
            className="w-auto h-100 rounded-xl outline-1 outline-white"
          />
          <div className="font-bold text-white text-4xl m-3">
            Skills
          </div>
          <div className="font-bold text-white text-4xl m-3 flex flex-col justify-center items-center">
            <a>Projects</a>
            <div className="flex flex-row justify-center items-center m-3">
                <div className="m-3">
                  Project 1
                </div>
                <div className="m-3">
                  Project 2
                </div>
                <div className="m-3">
                  Project 3
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
