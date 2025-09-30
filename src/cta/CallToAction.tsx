import './CallToAction.css'
import CtaCard from "./CtaCard.tsx";
import Container from "../components/Container";

import topImage from '../assets/cta_top_img.png'
import bottomImage from '../assets/cta_bottom_img.png'

function CallToActionSection() {
  return (
    <section className="cta-section">
      <Container>
        <div className="cta-content">
          <CtaCard className="card_top"/>
          <img src={topImage} alt="Cta Card"/>
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