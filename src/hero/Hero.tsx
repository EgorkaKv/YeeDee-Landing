import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react'
import Header from './Header';
import Container from '../components/Container';
import './Hero.css';
import './Hero.mobile.css'
import mainImageDesktop from '../assets/hero_img.png'
import mainImageMobile from '../assets/hero_img_mobile.png'
import QRCodeBackground from '../assets/qr-code-bg.svg';

function HeroSection() {
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <section className="hero">
      <Container className="hero__container">
        <Header />
        <div className="hero-content">
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.subtitle')}</p>
          <button>{t('hero.button')}</button>
        </div>
        {!isMobile && (
          <div className='qr-code'>
            <img id="qr-code-bg" src={QRCodeBackground} alt="qr-code-background"/>
            <QRCodeSVG id='qr-code-content' value="https://forms.gle/paQH5E6vDLpwFTcB9"/>
          </div>
        )}
        <picture className="hero__image" id="hero-img">
          <source media="(min-width: 768px)" srcSet={mainImageDesktop}/>
          <source media="(max-width: 767px)" srcSet={mainImageMobile}/>
          <img src={mainImageMobile} alt="food package" />
        </picture>
      </Container>
    </section>
  );
}

export default HeroSection;