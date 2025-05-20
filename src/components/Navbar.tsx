const Navbar = () => {
  return (
    <div className="h-20 bg-[#191923] flex justify-center items-center outline-1 outline-white sticky top-0 z-50">
      <div className="flex space-x-8 text-white text-2 font-medium m-4">
        <a href="#about" className="hover:text-[#854CE6] transition-colors duration-200">About</a>
        <a href="#skills" className="hover:text-[#854CE6] transition-colors duration-200">Skills</a>
        <a href="#projects" className="hover:text-[#854CE6] transition-colors duration-200">Projects</a>
      </div>
    </div>
  )
}

export default Navbar