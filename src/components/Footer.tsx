
import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-white py-6 border-t border-gray-100">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and copyright */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/logo.svg" alt="Liam Logo" className="h-8 mb-2" />
            <p className="text-gray-600 text-sm">
              © {currentYear} Liam. All rights reserved.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a 
              href="https://tryliam.com/terms" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-pulse-500 text-sm transition-colors duration-200"
            >
              Terms and Conditions
            </a>
            <a 
              href="https://tryliam.com/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-pulse-500 text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
