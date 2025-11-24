import React from 'react';
import './CallToAction.css'
import CtaCard from "./CtaCard.tsx";
import Container from "../components/Container";

import topImage from '../assets/cta_top_img.png'
import bottomImageMobile from '../assets/mobile/cta-image-mobile.png';
import bottomImageDesktop from '../assets/cta_bottom_img.png';
import ctaPcImage from '../assets/cta_pc_img.png';

// Removed CtaProps interface and isMobile prop since visibility is CSS-controlled
export const CallToActionSection: React.FC = () => {
  // Images for different breakpoints are all rendered and visibility is controlled via CSS.
  // Desktop: show `ctaPcImage`.
  // Tablet (768-1028): show `topImage` next to top card and `bottomImageDesktop` next to bottom card.
  // Mobile: show `bottomImageMobile` (existing mobile positioning).

  return (
    <section className="cta-section">
      <Container className="cta__container">
        <div className="cta-content">
          <CtaCard className="card_top"/>
          <img src={topImage} className="cta-top-img" alt="Top Cta"/>
        </div>

        {/* Desktop-wide image placed between the two CTA rows */}
        <img src={ctaPcImage} className="cta-pc-img" alt="Cta Desktop" />

        <div className="cta-content content-bottom">
          <img src={bottomImageDesktop} className="cta-bottom-img" alt="Bottom Cta"/>
          <CtaCard className="card_bottom"/>
          {/* mobile-only bottom image (positioned absolutely in mobile CSS) */}
          <img src={bottomImageMobile} className="cta-bottom-img-mobile" alt="Bottom Cta Mobile"/>
        </div>
      </Container>
    </section>
  );
}
export default CallToActionSection;