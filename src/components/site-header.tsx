"use client";

import { useState } from "react";
import { nav, site } from "@/lib/content";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-paper/80 border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8 md:py-6">
          <a href="#topo" className="font-serif text-2xl italic hover:opacity-70 transition-opacity">
            {site.name}
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted">
            {nav.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="hover:text-ink transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label="Menu"
          >
            <span 
              className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span 
              className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span 
              className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-ink/95 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleLinkClick}
      >
        <nav 
          className={`flex flex-col items-center justify-center h-full gap-8 transition-all duration-300 delay-75 ${
            isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          {nav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="font-serif text-4xl text-paper hover:text-paper/70 transition-colors duration-200"
              style={{ 
                transitionDelay: isMenuOpen ? `${index * 50 + 100}ms` : "0ms" 
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
