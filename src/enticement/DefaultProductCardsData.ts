import { useTranslation } from "react-i18next";

import storeLogo1 from '../assets/product-cards/store_logo_1.png';
import productImage1 from '../assets/product-cards/card_image_1.png';
import storeLogo2 from '../assets/product-cards/store_logo_2.png';
import productImage2 from '../assets/product-cards/card_image_2.png';

export type ProductCardProps = {
  storeLogo: string;
  productImage: string;
  productTitle: string;
  productAddress: string;
  productOldPrice: string;
  productNewPrice: string;
  productRating: string;
  productTime: string;
}
function DefaultProductCardProps (): ProductCardProps[] {
  const { t } = useTranslation();

  return [
    {
      storeLogo: storeLogo1,
      productImage: productImage1,
      productTitle: t('enticement.product_card_1__title'),
      productAddress: t('enticement.product_card_1__address'),
      productOldPrice: t('enticement.product_card_1__old_price'),
      productNewPrice: t('enticement.product_card_1__new_price'),
      productRating: '4.8',
      productTime: '16:00-18:00',
    },
    {
      storeLogo: storeLogo2,
      productImage: productImage2,
      productTitle: t('enticement.product_card_2__title'),
      productAddress: t('enticement.product_card_2__address'),
      productOldPrice: t('enticement.product_card_2__old_price'),
      productNewPrice: t('enticement.product_card_2__new_price'),
      productRating: '4.8',
      productTime: '16:00-18:00',
    },
    {
      storeLogo: storeLogo1,
      productImage: productImage1,
      productTitle: t('enticement.product_card_1__title'),
      productAddress: t('enticement.product_card_1__address'),
      productOldPrice: t('enticement.product_card_1__old_price'),
      productNewPrice: t('enticement.product_card_1__new_price'),
      productRating: '4.8',
      productTime: '16:00-18:00',
    }
  ];
}

export default DefaultProductCardProps;