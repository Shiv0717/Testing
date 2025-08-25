import React, { useState, useEffect } from "react";
import { Menu, X, Code, ChevronDown, MessageCircle, Phone, User } from "lucide-react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", to: "/about" },
    { name: "Services", to: "/services",},
    { name: "Contact", to: "/contact" },
    
    
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-2"
            : "bg-white/95 backdrop-blur-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
            <Link to="/"> 
              <div className="flex items-center">
               
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mr-3">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900">Krishna</span>
                  <span className="text-xl font-bold text-blue-600">Software</span>
                </div>
              
              </div>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Link
                  to="#home"
                  className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Home
                </Link>
                
                {navItems.map((item) => (
                  <div 
                    key={item.name} 
                    className="relative group"
                    onMouseEnter={() => setActiveSubmenu(item.name)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <Link
                      to={item.to}
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                    >
                      {item.name}
                      {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                    </Link>
                    
                    {/* Submenu Dropdown */}
                    {item.submenu && activeSubmenu === item.name && (
                      <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.to}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
             
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-xl">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.to}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => item.submenu && setActiveSubmenu(
                      activeSubmenu === item.name ? null : item.name
                    )}
                  >
                    <div className="flex justify-between items-center">
                      {item.name}
                      {item.submenu && (
                        <ChevronDown className={`h-4 w-4 transition-transform ${
                          activeSubmenu === item.name ? 'rotate-180' : ''
                        }`} />
                      )}
                    </div>
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && activeSubmenu === item.name && (
                    <div className="pl-6">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.to}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 rounded-md"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
             
            </div>
          </div>
        )}
      </nav>
      
      {/* Add padding to the top of your content to account for the fixed navbar */}
      <div className="pt-20">
       
      </div>
    </>
  );
};

export default Navbar;