import {useState} from "react";
import Steps from "./Steps.tsx";
import Container from "../components/Container";
import './HowItWorks.css';
import imgStep1 from '../assets/mobile_app_step1.png';
import imgStep2 from '../assets/mobile_app_step2.png';
import imgStep3 from '../assets/mobile_app_step3.png';
import {useTranslation} from "react-i18next";

function HowItWorks () {
  const {t} = useTranslation();

  const images = {
    'step1': imgStep1,
    'step2': imgStep2,
    'step3': imgStep3
  }

  const [currentImage, setCurrentImage] = useState<'step1' | 'step2' | 'step3'>('step1');

  return (
    <section className="how-it-works">
      <Container className="hiw__container">
        <h2>{t('hiw.title')}</h2>
        <div className="hiw-content">
          <img src={images[currentImage]} alt="mobile application"/>
          <div className={"hiw-content__right"}>
            <Steps onStateChange={setCurrentImage}/>
            <span>{t('hiw.summary')}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;