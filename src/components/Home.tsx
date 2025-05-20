import Navbar from "../components/Navbar";

function Home() {

  return (
    <div className="h-full">
        <div>
          <Navbar/>
        </div>
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
          <div className="font-bold text-white text-4xl m-3">
            Projects
          </div>
        </div>
    </div>
  );
}

export default Home;
