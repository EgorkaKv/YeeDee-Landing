import BenefitCard from "./BenefitCard.tsx";
import {useTranslation} from "react-i18next";
import './Benefits.css';

import walletIcon from '../assets/wallet_icon.png';
import giftIcon from '../assets/gift_icon.png';
import clockIcon from '../assets/clock_icon.png';
import earthIcon from '../assets/earth_icon.png';
import discountIcon from '../assets/discount_icon.png';
import Container from "../components/Container";

function BenefitsSection() {
  const {t} = useTranslation();
  return (
    <section className="benefits">

      <Container className="benefits__container">
        <h2>{t('benefits.title')}</h2>
        <div className='benefits__grid'>
          <BenefitCard
            title={t('benefits.title-economy')}
            description={t('benefits.description-economy')}
            imageSrc={walletIcon}
            imageAlt='wallet'
          />
          <BenefitCard
            title={t('benefits.title-surprise')}
            description={t('benefits.description-surprise')}
            imageSrc={giftIcon}
            imageAlt='gift'
          />
          <BenefitCard
            title={t('benefits.title-time')}
            description={t('benefits.description-time')}
            imageSrc={clockIcon}
            imageAlt='clock'
          />
          <BenefitCard
            title={t('benefits.title-ecology')}
            description={t('benefits.description-ecology')}
            imageSrc={earthIcon}
            imageAlt='earth'
          />
          <BenefitCard
            title={t('benefits.title-discount')}
            description={t('benefits.description-discount')}
            imageSrc={discountIcon}
            imageAlt='discount'
            className='benefits__card--wide'
          />
        </div>
      </Container>
    </section>

  );
}

export default BenefitsSection