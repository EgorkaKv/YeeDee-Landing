import {useEffect, useState} from "react";
import Steps from "./Steps.tsx";
import Container from "../components/Container";
import './HowItWorks.css';
import imgStep1 from '../assets/mobile_app_step1.png';
import imgStep2 from '../assets/mobile_app_step2.png';
import imgStep3 from '../assets/mobile_app_step3.png';
import {useTranslation} from "react-i18next";
import StepsMobile from "./Steps.mobile.tsx";

function HowItWorks () {
  const {t} = useTranslation();

  const images = {
    'step1': imgStep1,
    'step2': imgStep2,
    'step3': imgStep3
  }

  const [currentImage, setCurrentImage] = useState<'step1' | 'step2' | 'step3'>('step1');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="how-it-works">
      <Container className="hiw__container">
        <h2>{t('hiw.title')}</h2>
        <div className="hiw-content">
          <img src={images[currentImage]} alt="mobile application"/>
          {windowWidth >= 768 ? (
            <div className={"hiw-content__right"}>
              <Steps onStateChange={setCurrentImage}/>
              <span>{t('hiw.summary')}</span>
            </div>
          ) : (
            <div className={'hiw-content__bottom'}>
              <StepsMobile onStateChange={setCurrentImage}/>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;