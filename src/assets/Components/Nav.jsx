function Nav() {
    return ( 
<nav className="bg-amber-800 shadow-lg sticky top-0 z-50">   
    <ul className="flex justify-center items-center gap-8 px-6 py-4"> 
        <li><a href="#home" className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300">Home</a></li>
        <li><a href="#about" className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300">About</a></li>
        <li><a href="#services" className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300">Services</a></li>
        <li><a href="#contact" className="text-white font-semibold hover:text-yellow-300 transition-colors duration-300">Contact</a></li>
    </ul>
    
</nav>
       )
}
export default Nav;