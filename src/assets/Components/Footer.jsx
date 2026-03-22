import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-amber-800 shadow-lg text-gray-300 pt-14 pb-6 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Choir Info */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">
            Mwangaza Melodies
          </h2>
          <p className="text-sm leading-relaxed">
            A vibrant choir dedicated to spreading faith, hope, and joy
            through inspirational music and worship. Our mission is to
            uplift hearts and glorify God through song.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-yellow-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-yellow-500 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="#music" className="hover:text-yellow-500 transition">
                Music
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-yellow-500 transition">
                Events
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <p className="text-sm mb-2">📍 Nairobi, Kenya</p>
          <p className="text-sm mb-2">📞 +254 700 000000</p>
          <p className="text-sm mb-2">📧 mwangazamelodies@gmail.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-red-500 transition"><FaYoutube /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-green-500 transition"><FaWhatsapp /></a>
          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Mwangaza Melodies Choir. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;