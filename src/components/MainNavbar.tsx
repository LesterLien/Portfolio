import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="h-20 bg-[#191923] grid grid-cols-3 items-center outline-1 outline-white">
      <div className="flex justify-start ml-5">
        <Link to="/" className="cursor-hover">
          <img 
            src="/assets/images/logo.webp" 
            alt="logo" 
            className="w-auto h-20 duration-300 ease-in-out hover:scale-125"
          />
        </Link>
      </div>
      <div className="flex justify-center space-x-8 text-white text-[20px] m-4">
        <Link to="/projects" className="hover:text-[#854CE6] transition-colors duration-200">Projects</Link>
        <Link to="/credentials" className="hover:text-[#854CE6] transition-colors duration-200">Credentials</Link>
        <a href="#contact" className="hover:text-[#854CE6] transition-colors duration-200">Contact</a>
      </div>
    </div>
  )
}
