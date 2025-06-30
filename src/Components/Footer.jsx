import React from 'react';
import logo from '../../public/assets/logo.png'

const Footer = () => {
  return (
    <div className="bg-[#111] text-white rounded-3xl pt-8 pb-4 sm:pt-10 sm:pb-6 my-6 sm:my-10 text-center font-sans overflow-hidden mx-2 sm:mx-0">
      {/* Logo and Name */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col xs:flex-row justify-center items-center gap-2 xs:gap-3">
          <img src={logo} alt="Profast Logo" className="w-10 h-10 object-contain" />
          <span className="font-semibold text-xl sm:text-2xl tracking-wider mt-2 xs:mt-0">Profast</span>
        </div>
      </div>
      {/* Description */}
      <div className="text-[#bdbdbd] text-xs sm:text-sm mt-3 sm:mt-4 leading-snug max-w-xs sm:max-w-xl mx-auto px-2">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to<br className="hidden sm:block" />
        business shipments — we deliver on time, every time.
      </div>
      {/* Dotted Line */}
      <div className="border-b border-dotted border-[#1de9b6] w-[95%] sm:w-[90%] max-w-3xl mx-auto mt-6 sm:mt-8" />
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 sm:mt-6 text-sm sm:text-base text-[#e0e0e0] font-normal">
        <a href="#services" className="hover:text-[#B6FF6C] transition-colors">Services</a>
        <a href="#coverage" className="hover:text-[#B6FF6C] transition-colors">Coverage</a>
        <a href="#about" className="hover:text-[#B6FF6C] transition-colors">About Us</a>
        <a href="#pricing" className="hover:text-[#B6FF6C] transition-colors">Pricing</a>
        <a href="#blog" className="hover:text-[#B6FF6C] transition-colors">Blog</a>
        <a href="#contact" className="hover:text-[#B6FF6C] transition-colors">Contact</a>
      </div>
      {/* Dotted Line */}
      <div className="border-b border-dotted border-[#1de9b6] w-[95%] sm:w-[90%] max-w-3xl mx-auto mt-4 sm:mt-6" />
      {/* Social Icons */}
      <div className="flex flex-wrap justify-center gap-5 sm:gap-7 mt-6 sm:mt-8">
        {/* LinkedIn */}
        <a href="#" aria-label="LinkedIn" className="inline-block">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#1A7EC5" />
            <path d="M11.5 13.5V21H9V13.5h2.5zm-1.25-1.8c-.8 0-1.25-.53-1.25-1.2 0-.68.46-1.2 1.28-1.2.81 0 1.25.52 1.26 1.2 0 .67-.45 1.2-1.29 1.2zM23 21h-2.5v-3.7c0-.88-.32-1.48-1.12-1.48-.61 0-.97.41-1.13.8-.06.15-.08.36-.08.57V21H15v-7.5h2.5v1.02c.33-.51.92-1.24 2.25-1.24 1.64 0 2.75 1.07 2.75 3.37V21z" fill="#fff" />
          </svg>
        </a>
        {/* X (Twitter) */}
        <a href="#" aria-label="X" className="inline-block">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#fff" />
            <path d="M12.5 11h2.1l2.1 2.7 2.1-2.7h2.1l-3.1 3.9 3.2 4.1h-2.1l-2.2-2.8-2.2 2.8h-2.1l3.2-4.1-3.1-3.9z" fill="#111" />
          </svg>
        </a>
        {/* Facebook */}
        <a href="#" aria-label="Facebook" className="inline-block">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#1877F3" />
            <path d="M18.5 16H20l.5-2h-2V12.5c0-.58.16-.97 1-.97H20V10.1c-.17-.02-.75-.07-1.43-.07-1.42 0-2.07.7-2.07 2V14H15v2h1.5v5h2v-5z" fill="#fff" />
          </svg>
        </a>
        {/* YouTube */}
        <a href="#" aria-label="YouTube" className="inline-block">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#FF0000" />
            <path d="M20.5 16l-6 3.5V12.5L20.5 16z" fill="#fff" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;