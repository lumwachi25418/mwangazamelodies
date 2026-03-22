import { useState } from "react";
import { Menu, X } from "lucide-react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-amber-800 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <img src="/src/assets/Images/mwanganza.jpg" alt="Mwangaza Melodies Logo" className="h-20 w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <a href="#home" className="text-white active:bg-yellow-700 hover:text-yellow-400 hover:underline transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-yellow-400 hover:underline transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-yellow-400 hover:underline transition duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-yellow-400 hover:underline transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-amber-700 transition-all duration-300 ${
        isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <ul className="flex flex-col items-center gap-6 py-4">
          <li>
            <a href="#home" className="text-white hover:text-yellow-400 hover:underline transition duration-300" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-yellow-400 hover:underline transition duration-300" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-white hover:text-yellow-400 hover:underline transition duration-300" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-yellow-400 hover:underline transition duration-300" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;