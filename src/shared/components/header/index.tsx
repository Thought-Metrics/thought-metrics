import React, { useEffect, useRef, useState } from 'react';
import './header.style.scss';
import { headerDropdownData, navigationItems } from './header.constant';
import { CurveIcon, Logo } from '@/assets/svgs';

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
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

  const handleNavItemClick = (item: string) => {
    if (activeDropdown === item) {
      setIsDropdownOpen(false);
      setActiveDropdown(null);
    } else {
      setActiveDropdown(item);
      setIsDropdownOpen(true);
    }
  };

  const getActiveSection = () => {
    return headerDropdownData.sections.find(
      (section) => section.title === activeDropdown
    );
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`header ${isDropdownOpen ? 'header--active' : ''}`}
      >
        <nav className="header__nav">
          <Logo className="header__logo" />
          {navigationItems.map((item) => (
            <button
              key={item}
              className={`header__nav-button ${activeDropdown === item ? 'header__nav-button--active' : ''}`}
              onClick={() => handleNavItemClick(item)}
            >
              {item}
              <CurveIcon className="header__nav-arrow" />
              <div className="header__nav-beam"></div>
            </button>
          ))}
          <button className="header__action-button header__action-button--primary">
            Start Your Research
          </button>
          <button className="header__action-button header__action-button--secondary">
            Join a Paid Focus Group
          </button>
        </nav>
      </header>

      {isDropdownOpen && (
        <div ref={dropdownRef} className="dropdown">
          <div className="dropdown__container">
            <div className="dropdown__sidebar">
              <p className="dropdown__sidebar-description">
                {headerDropdownData.description.split('\n').map((line, idx) => (
                  <React.Fragment key={idx + 'label'}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              <p className="dropdown__sidebar-label">
                {headerDropdownData.label}
              </p>
            </div>
            {getActiveSection() && (
              <div className="dropdown__columns">
                {getActiveSection()!.columns.map((column, columnIndex) => (
                  <div
                    key={columnIndex + 'sub_title'}
                    className="dropdown__column"
                  >
                    {'sub_title' in column && column.sub_title != null && (
                      <h4 className="dropdown__column-subtitle">
                        {column.sub_title}
                      </h4>
                    )}
                    {column.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex + item}
                        className="dropdown__list-item"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
