import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import './Header.css';
import './Header.mobile.css'
import logo from '../assets/logo.svg';
import appStoreLogo from '../assets/appstore_logo.svg';
import googlePlayLogo from '../assets/googleplay_logo.svg';
import triangle from '../assets/triangle_black.svg';

function Header() {
  const { i18n } = useTranslation();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const languageSelectorRef = useRef<HTMLDivElement>(null);

  const currentLanguage = i18n.language === 'en' ? 'EN' : 'UA';

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
  };

  // Закрытие dropdown при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageSelectorRef.current && !languageSelectorRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  return (
    <div className="header">
      <div className="header-left">
        <img className="company-name" src={logo} alt="YeeDee"/>
      </div>
      <div className="header-right">
        <ul className="links">
          <li className="link">
            <a><img src={appStoreLogo} alt="app-store"/></a>
          </li>
          <li className="link">
            <a><img src={googlePlayLogo} alt="google-play"/></a>
          </li>
        </ul>
        <div className="language-selector" ref={languageSelectorRef}>
          <button
            className="languages"
            onClick={toggleLanguageDropdown}
            aria-expanded={isLanguageDropdownOpen}
            aria-haspopup="listbox"
          >
            <span>{currentLanguage}</span>
            <img
              src={triangle}
              alt="arrow down"
              className={isLanguageDropdownOpen ? 'rotated' : ''}
            />
          </button>
          {isLanguageDropdownOpen && (
            <div className="language-dropdown">
              <button
                className={`language-option ${currentLanguage === 'UA' ? 'active' : ''}`}
                onClick={() => changeLanguage('ua')}
              >
                UA
              </button>
              <button
                className={`language-option ${currentLanguage === 'EN' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
