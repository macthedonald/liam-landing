import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    if (!hasAccepted) {
      // Show the cookie consent after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-700">
            We use cookies to enhance your experience on our website. By continuing to browse this site, you agree to our use of cookies.
            For more information, please visit our{' '}
            <a 
              href="https://tryliam.com/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-pulse-500 hover:underline"
            >
              Privacy Policy
            </a>.
          </p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={acceptCookies}
            className="bg-pulse-500 hover:bg-pulse-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
          >
            Accept
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full transition-colors duration-200"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;