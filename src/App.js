import React from "react";
import "./App.css";
import "./styles/Header.css";
import "./styles/Main.css";
import "./styles/Footer.css";
import telegramLogo from "./icons/telegram_logo.svg";
import yeedeeLogo from "./icons/yeedee_logo.svg";
import dollarIcon from "./icons/dollar_icon.svg";
import peopleIcon from "./icons/people_icon.svg";
import planetIcon from "./icons/planet_icon.svg";
import phoneImg from "./icons/phone_img.png";
import clipboardImg from "./icons/clipboard_icon.svg";
import cartImg from "./icons/cart_icon.svg";
import orderImg from "./icons/order_icon.svg";
import mailImg from "./icons/mail_icon.svg";

const App = () => {
    return (
        <div className="App">
            {/* Header */}
            <header className="header">
                <h2 className="logo">YeeDee</h2>
                <nav className="nav">
                    <ul>
                        <li><a href="#about">Про нас</a></li>
                        <li><a href="#benefits">Вигода</a></li>
                        <li><a href="#partnership">Партнерство</a></li>
                    </ul>
                </nav>
                <a href='https://t.me/YeeStore_Bot' className="bot-button">
                    <img src={telegramLogo} alt='telegram logo' />
                    Наш Telegram bot
                </a>
            </header>

            {/* Hero Section */}
            <section className="hero">
                <h1>YeeDee — їжа з вигодою для всіх</h1>
                <h3>Це проект, місія якого боротися з харчовими відходами. Ми створюємо сервіси, що об'єднують людей і бізнес навколо ідеї розумного споживання продуктів харчування.</h3>
                <img src={yeedeeLogo} alt="YeeDee logo" className="img_logo" />
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="benefits">
                <h1>Інноваційна платформа, яка допомагає</h1>
                <div className="benefits-container">
                    <div className='benefits-info'>
                        <img src={dollarIcon} alt='dollar icon'/>
                        <p>Бізнесам зменшувати втрати продуктів, продаючи товари з наближеним терміном придатності</p>
                    </div>
                    <img className='benefits-phone' src={phoneImg} alt='yedee phone'/>
                    <div className='benefits-right'>
                        <div className='benefits-info'>
                            <img src={peopleIcon} alt='people icon'/>
                            <p>Покупцям знаходити вигідні пропозиції</p>
                        </div>
                        <div className='benefits-info'>
                            <img src={planetIcon} alt='planet icon'/>
                            <p>Суспільству зменшувати харчові відходи та дбати про довкілля</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it Works Section */}
            <section id="how-it-works" className="how-it-works">
                <h2>Як це працює?</h2>
                <div className="how-it-works-container">
                    <div className="how-it-works-left">
                        <p>Через сервіс YeeDee бізнес виставляє на продаж зі знижкою товари на межі строку придатності</p>
                        <span className="how-it-works-number">2</span>
                        <p>Коли покупець забирає товар в магазині, продавець отримує свої кошти</p>
                    </div>

                    <div className="how-it-works-center">
                        <img src={clipboardImg} alt="clipboard"/>
                        <div className="how-it-works-line"></div>
                        <img src={cartImg} alt="Cart"/>
                        <div className="how-it-works-line"></div>
                        <img src={orderImg} alt="Package"/>
                    </div>

                    <div className="how-it-works-right">
                        <span className="how-it-works-number">1</span>
                        <p>Люди переглядають доступні товари та бронюють їх для себе через нашу платформу.</p>
                        <span className="how-it-works-number">3</span>
                    </div>
                </div>
            </section>

            {/* Join Us Section */}
            <section id="join" className="join">
                <h2>Долучайтеся до спільноти!</h2>
                <h3>
                    Приєднуйтеся до проекту, що змінює підхід до харчування, бізнесу та екології. Разом ми створюємо майбутнє, де виграють всі!
                </h3>
                <button className="join-button">Доєднатися</button>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="branding">
                    <h3 className="logo">YeeDee</h3>
                    <p>© 2025 YeeDee. Всі права захищені.</p>
                </div>
                <div className="mailing">
                    <img src={mailImg} alt="Main" />
                    <a href="mailto:info@yeedee.com.ua">info@yeedee.com.ua</a>
                </div>
                <div className="links">
                    <a href="#privacy">Політика конфіденційності</a>
                    <a href="#terms">Умови використання</a>
                </div>
            </footer>
        </div>
    );
};

export default App;
