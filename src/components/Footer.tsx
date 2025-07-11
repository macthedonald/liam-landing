
import React from "react";
const Footer = () => {
  return <footer className="w-full bg-white py-0">
      <div className="section-container">
        <p className="text-center text-gray-600 text-sm">
          <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
            Terms and Conditions
          </a>
          |
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>;
};
export default Footer;
