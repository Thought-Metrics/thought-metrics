import React, { useEffect, useRef, useState } from 'react';
import { headerDropdownData, navigationItems } from './header.constant';
import { CurveIcon, Logo, StackIllustration } from '@/assets';

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isDropdownOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDropdownOpen]);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const handleNavItemClick = (item: string) => {
    if (activeDropdown === item) {
      setIsDropdownOpen(false);
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item);
      setIsDropdownOpen(true);
    }
  };

  const handleMobileNavItemClick = (item: string) => {
    if (activeMobileDropdown === item) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(item);
    }
  };

  // Desktop hover handlers
  const handleNavItemHover = (item: string) => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    setActiveDropdown(item);
    setIsDropdownOpen(true);
  };

  const handleNavLeave = () => {
    // Add a small delay before closing to prevent flickering
    hoverTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
      setActiveDropdown(null);
    }, 500);
  };

  const handleDropdownEnter = () => {
    // Clear timeout if user hovers over dropdown
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
    setActiveDropdown(null);
  };

  const getActiveSection = () => {
    return headerDropdownData.sections.find(
      (section) => section.title === activeDropdown
    );
  };

  const toggleMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      setActiveMobileDropdown(null);
    }
  };

  return (
    <div className='relative'>
      <header ref={headerRef} className="common-component">
        <div
          className={`common-container justify-center transition-colors duration-300 ease-in-out bg-white ${isDropdownOpen ? 'md:bg-white' : 'md:bg-transparent'}`}
        >
          {/* Desktop View */}
          <nav className="flex-nowrap gap-3 xl:gap-4 xxl:gap-6 wide:gap-5 py-2 xl:py-3.5 xxl:py-4 hidden md:flex items-center">
            <Logo className="w-34 xl:w-45 xxl:w-52" />
            {navigationItems.map((item) => (
              <button
                key={item}
                className={`relative text-[12px] xl:text-md xxl:text-lg text-text-dark font-medium cursor-pointer flex items-center gap-[0.3rem] transition-all duration-300 ease-in-out whitespace-nowrap ${activeDropdown !== item && 'hover:underline hover:underline-offset-2'}`}
                onMouseEnter={() => handleNavItemHover(item)}
                onMouseLeave={handleNavLeave}
              >
                {item}
                <CurveIcon
                  className={`w-[8px] xl:w-[10px] xxl:w-[12px] transition-transform duration-300 ease-in-out ${activeDropdown === item ? 'rotate-180' : ''}`}
                />
                <div
                  className={`absolute -bottom-[12px] xl:-bottom-[16px] xxl:-bottom-[20px] -left-[2px] bg-primary h-[3px] xl:h-[4px] xxl:h-[5px] w-full rounded-t ${activeDropdown === item ? 'block animate-fadeIn' : 'hidden animate-fadeOut'}`}
                ></div>
              </button>
            ))}
            <button className="py-0.5 xl:py-[3px] xxl:py-1 px-4 text-[11px] xl:text-sm xxl:text-base border-[1px] xl:border-[1.25px] xxl:border-[1.5px] font-medium cursor-pointer transition-all duration-300 ease-in-out whitespace-nowrap border-primary bg-white text-primary hover:text-custom-blue hover:border-custom-blue">
              Start Your Research
            </button>
            <button className="py-0.5 xl:py-[3px] xxl:py-1 px-4 text-[11px] xl:text-sm xxl:text-base font-medium cursor-pointer transition-all duration-300 ease-in-out whitespace-nowrap bg-primary text-white hover:bg-custom-blue hover:border-custom-blue">
              Join a Paid Focus Group
            </button>
          </nav>

          {/* Mobile view */}
          <nav className="w-full py-4 px-5 items-center justify-between flex md:hidden">
            <Logo className="w-52" />
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex flex-col justify-center items-center z-[1001]"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                  isDropdownOpen
                    ? 'rotate-45 translate-y-1.5 bg-white'
                    : 'bg-gray-800'
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out my-1 ${
                  isDropdownOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                  isDropdownOpen
                    ? '-rotate-45 -translate-y-1.5 bg-white'
                    : 'bg-gray-800'
                }`}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Desktop Dropdown */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 right-0 bg-primary shadow-[0_4px_20px_rgba(0,0,0,0.1)] z-[999] animate-fadeIn hidden md:block text-white"
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          <div className="relative flex px-7 py-8 xl:px-9 xxl:px-10 xl:py-10 xxl:py-12 items-center gap-8 xl:gap-11 xxl:gap-13">
            <div className="flex flex-col gap-1 xl:gap-3.5">
              <p className="text-xxs xl:text-sm xxl:text-lg leading-[1.25] font-light whitespace-nowrap tracking-wider">
                {headerDropdownData.description.split('\n').map((line, idx) => (
                  <React.Fragment key={idx + 'label'}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              <p className="text-xs xl:text-md xxl:text-lg font-medium underline tracking-wider">
                {headerDropdownData.label}
              </p>
            </div>
            {getActiveSection() && (
              <div className="flex gap-7 xl:gap-10 xxl:gap-13">
                {getActiveSection()!.columns.map((column, columnIndex) => (
                  <div
                    key={columnIndex + 'sub_title'}
                    className="flex flex-col gap-0.5 xl:gap-2"
                  >
                    {'sub_title' in column && column.sub_title != null && (
                      <h4 className="text-sm xl:text-md xxl:text-xl font-medium hover:underline cursor-pointer tracking-wider">
                        {column.sub_title}
                      </h4>
                    )}
                    {column.items.length > 0 &&
                      column.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex + item}
                          className="text-xxs xl:text-sm xxl:text-lg font-medium hover:underline cursor-pointer tracking-wider"
                        >
                          {item}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            )}
            <div className="absolute right-0 pr-13">
            <StackIllustration className='w-21 xl:w-25 xxl:w-32' />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isDropdownOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[998] md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 z-[1000] bg-primary h-full w-[300px] transform transition-transform duration-300 ease-in-out md:hidden ${
          isDropdownOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto pt-20 pb-6">
            {/* Navigation Items */}
            <div className="px-6">
              {navigationItems.map((item) => {
                const section = headerDropdownData.sections.find(
                  (s) => s.title === item
                );

                return (
                  <div
                    key={item}
                    className="border-b border-white/20 last:border-0"
                  >
                    <button
                      className="w-full py-4 text-white font-medium text-left flex items-center justify-between"
                      onClick={() => handleMobileNavItemClick(item)}
                    >
                      <span>{item}</span>
                      {section && (
                        <CurveIcon
                          className={`text-white transition-transform duration-300 ${
                            activeMobileDropdown === item ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>

                    {/* Mobile Dropdown Content */}
                    {section && activeMobileDropdown === item && (
                      <div className="pb-4">
                        {section.columns.map((column, columnIndex) => (
                          <div key={columnIndex} className="mb-4">
                            {'sub_title' in column && column.sub_title && (
                              <h5 className="text-white/80 text-sm font-semibold mb-2 px-4">
                                {column.sub_title}
                              </h5>
                            )}
                            {column.items.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href="#"
                                className="block px-4 py-2 text-white/70 hover:text-white text-sm"
                              >
                                {subItem}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="px-6 mt-8 space-y-3">
              <button className="w-full py-3 px-4 border border-white text-white font-medium rounded hover:bg-white/10 transition-colors">
                Start Your Research
              </button>
              <button className="w-full py-3 px-4 bg-white text-primary font-medium rounded hover:bg-white/90 transition-colors">
                Join a Paid Focus Group
              </button>
            </div>

            {/* Footer Info */}
            <div className="px-6 mt-8">
              <p className="text-white/60 text-sm">
                {headerDropdownData.description}
              </p>
              <p className="text-white underline text-sm mt-2">
                {headerDropdownData.label}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;