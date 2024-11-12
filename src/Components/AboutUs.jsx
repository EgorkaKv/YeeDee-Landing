import React from 'react';
import '../Styles/AboutUs.css';

function AboutUs() {
  return (
    <section id="about-us" className="about-us">
      <h2 className="about-title">Проблема і Місія</h2>
      <p className="about-description">
        Мільйони тонн продуктів харчування щорічно викидаються, тоді як багато людей шукають доступну їжу. Це має велике екологічне та економічне
        значення, створюючи навантаження на ресурси і збільшуючи викиди CO₂.
      </p>
      <p className="about-mission">
        Ми створили YeeDee, щоб з'єднати продавців і покупців, допомагаючи знизити харчові відходи та пропонуючи їжу за вигідними цінами. Покупці можуть
        купувати продукти зі знижками, а продавці — скорочувати свої збитки.
      </p>
      <div className="about-values">
        <div className="value">
          <h3>Екологічність</h3>
          <p>Підтримуємо сталість, скорочуючи обсяг відходів.</p>
        </div>
        <div className="value">
          <h3>Доступність</h3>
          <p>Пропонуємо доступ до якісних продуктів за зниженими цінами.</p>
        </div>
        <div className="value">
          <h3>Вигода для всіх</h3>
          <p>Підтримуємо продавців і надаємо покупцям вигідні пропозиції.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
