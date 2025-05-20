export default function Navbar() {
  return (
    <div className="h-20 bg-[#191923] grid grid-cols-3 items-center outline-1 outline-white sticky top-0 z-50">
      <div className="flex justify-start ml-5">
        <img 
          src="/assets/images/logo.webp" 
          alt="logo" 
          className="w-auto h-20"
        />
      </div>
      <div className="flex justify-center space-x-8 text-white text-[20px] m-4">
        <a href="#about" className="hover:text-[#854CE6] transition-colors duration-200">About</a>
        <a href="#skills" className="hover:text-[#854CE6] transition-colors duration-200">Skills</a>
        <a href="#projects" className="hover:text-[#854CE6] transition-colors duration-200">Projects</a>
      </div>
    </div>
  )
}
