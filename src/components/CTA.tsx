import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

// TypeForm type declaration
declare global {
  interface Window {
    tf?: {
      push: (fn: () => void) => void;
      createPopup: (id: string, options: any) => void;
      popup?: {
        open: () => void;
      };
    };
  }
}

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    // Initialize Typeform popup configuration
    window.tf = window.tf || [];
    window.tf.push(function() {
      window.tf.createPopup("01JZVMGHZ0ERD8907A2MCRC0VG", {
        hideHeaders: true,
        hideFooter: true,
        opacity: 95,
        buttonText: "Request Early Access",
        buttonColor: "#6366F1",
        buttonTextColor: "#FFFFFF"
      });
    });
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
      // Clean up script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative" id="get-access" ref={ctaRef}>
      {/* Background gradient at the top has been removed */}
      
      <div className="section-container relative z-10 opacity-0 animate-fade-in px-4 sm:px-6">
        <div className="max-w-4xl mx-auto glass-card p-6 sm:p-8 md:p-10 lg:p-14 text-center overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-pulse-100/30 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gray-100/50 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl"></div>
          
          <div className="pulse-chip mx-auto mb-4 sm:mb-6">
            <span>Limited Access</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Join the Future of <br className="hidden sm:inline" />
            <span className="text-pulse-500">Independent Music</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Liam is launching with limited early access. Apply today and be one of the first to transform how you release, market, and grow.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => window.tf?.popup?.open()}
              className="button-primary group flex items-center justify-center w-full sm:w-auto cursor-pointer"
            >
              Request Early Access
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;