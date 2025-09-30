import ProductCard from "./ProductCard.tsx";
import Container from "../components/Container";
import './Enticement.css';
import getDefaultProductCardsData from "./DefaultProductCardsData.ts";
import { useTranslation } from "react-i18next";


function Enticement() {
  const { t } = useTranslation();

  return (
    <section className="enticement">
      <Container className="enticement__container">
        <h2>{t('enticement.title')}</h2>
        <div className="cards">
          {getDefaultProductCardsData().map((cardData, index) => (
            <ProductCard
              key={index}
              storeLogo={cardData.storeLogo}
              productImage={cardData.productImage}
              productTitle={cardData.productTitle}
              productAddress={cardData.productAddress}
              productOldPrice={cardData.productOldPrice}
              productNewPrice={cardData.productNewPrice}
              productRating={cardData.productRating}
              productTime={cardData.productTime}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
export default Enticement;