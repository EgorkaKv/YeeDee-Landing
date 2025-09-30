import './ProductCard.css'
import { useTranslation } from 'react-i18next';
import type { ProductCardProps } from './DefaultProductCardsData';
import heartIcon from '../assets/product-cards/heart_icon.svg';
import starIcon from '../assets/product-cards/star_icon.svg';
import clockIcon from '../assets/product-cards/clock_icon.svg';


function ProductCard(CardData: ProductCardProps) {
  const { t } = useTranslation();
  return (
    <div className="product-card">
      <div className="heart">
        <img src={heartIcon} alt="heart"/>
      </div>
      <div className="store-logo">
        <img src={CardData.storeLogo} alt="Store Logo" />
      </div>
      <img className="product-image" src={CardData.productImage} alt="Product" />
      <div className="product-info">
        <div className="product-info__description">
          <div className="product-info__title">
            <h3>{CardData.productTitle}</h3>
            <p>{CardData.productAddress}</p>
          </div>
          <div className="product-info__details">
            <span className="info-item">
              <img src={starIcon} alt="star"/>
              <span>{CardData.productRating}</span>
            </span>
            <span className="info-item">
              <img src={clockIcon} alt="clock"/>
              <span>{CardData.productTime}</span>
            </span>
          </div>

        </div>
        <div className="product-info__price">
          <span className="product_old-price">{CardData.productOldPrice}</span>
          <span className="product_new-price">{CardData.productNewPrice}</span>
        </div>
      </div>
      <a className="buy-product">{t('enticement.product_card__button')}</a>
    </div>
  );
}

export default ProductCard;