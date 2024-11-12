import React from 'react';
import '../Styles/Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <h2 className="home-title">YeeDee - їжа з вигодою для всіх</h2>
      <p className="home-description">
        YeeDee — це мобільний додаток, який допомагає вам отримувати їжу за зниженими цінами, знижуючи збитки для продавців та підтримуючи екологію.
        Придбайте якісні продукти, які могли б бути утилізовані!
      </p>
      <button className="home-download-button">Download</button>
    </section>
  );
}

export default Home;
