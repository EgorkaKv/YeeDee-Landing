import './FAQ.css'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Container from "../components/Container";

import triangle from '../assets/triangle.svg'

type AccordionItem = {
  question: string;
  answer: string;
};

function FaqSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Динамически формируем массив вопросов из файла локализации
  const items: AccordionItem[] = [];
  const count = Number(t('faq.count'));

  for (let i = 1; i <= count; i++) {
    items.push({
      question: t(`faq.q${i}.question`),
      answer: t(`faq.q${i}.answer`)
    });
  }

  return (
    <section className="faq-section">
      <Container className="faq__container">
        <h2>{t('faq.title')}</h2>
        <div className="accordion">
          {items.map((item, idx) => (
            <div key={idx} className="accordion-item">
              <button
                className="accordion-title"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {item.question}
                <span className={`triangle-icon${openIndex === idx ? ' open' : ''}`}>
                  <img src={triangle} alt="triangel"/>
                </span>
              </button>
              <div className={`accordion-content${openIndex === idx ? ' open' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FaqSection;
