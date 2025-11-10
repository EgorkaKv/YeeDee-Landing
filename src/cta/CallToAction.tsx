import React from 'react';
import './CallToAction.css'
import CtaCard from "./CtaCard.tsx";
import Container from "../components/Container";

import topImage from '../assets/cta_top_img.png'
import bottomImageMobile from '../assets/mobile/cta-image-mobile.png';
import bottomImageDesktop from '../assets/cta_bottom_img.png';

export interface CtaProps {
  isMobile: boolean
}

export const CallToActionSection: React.FC<CtaProps> = (isMobile) => {
  const bottomImage = isMobile? bottomImageMobile : bottomImageDesktop

  return (
    <section className="cta-section">
      <Container className="cta__container">
        <div className="cta-content">
          <CtaCard className="card_top"/>
          {isMobile ?
          null : (<img src={topImage} alt="Cta Card"/>)}
        </div>
        <div className="cta-content content-bottom">
          <img src={bottomImage} alt="Cta Card"/>
          <CtaCard className="card_bottom"/>
        </div>
      </Container>
    </section>
  );
}
export default CallToActionSection;