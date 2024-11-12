import React from 'react';
import '../Styles/Business.css';

function Business() {
  return (
    <section id="business" className="business">
      <h2 className="business-title">Для Бізнесу</h2>
      <p className="business-description">
        Співпраця з YeeDee надає магазинам унікальну можливість привертати покупців і зменшувати надлишкові запаси з мінімальними збитками.
        Продавайте продукти, термін придатності яких закінчується, збільшуючи дохід та зменшуючи втрати.
      </p>
      <p className="business-model">
        Ми пропонуємо прозору і вигідну для бізнесу комісію — всього 8% з кожного продажу, здійсненого через нашу платформу.
      </p>
      <div className="business-stats">
        <h3>Інтерес до YeeDee</h3>
        <p>92% потенційних користувачів хочуть спробувати YeeDee для покупок зі знижкою.</p>
      </div>
      <button className="business-partner-button">Стати партнером</button>
    </section>
  );
}

export default Business;
