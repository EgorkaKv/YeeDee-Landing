import React, {useEffect, useRef, useState} from "react";
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
import qr_code from "./icons/qr_code.png";

const App = () => {
    const headerRef = useRef(null);
    const logoRef = useRef(null);
    const dividerRef = useRef(null);
    const benefitsRef = useRef(null);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 500);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 500);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!isSmallScreen) return;
        // console.log('into useEffect')

        const header = headerRef.current;
        const logo = logoRef.current;
        const divider = dividerRef.current;
        const benefits = benefitsRef.current;

/*        console.log('header: ', header)
        console.log('logo: ', logo)
        console.log('divider: ', divider)
        console.log('benefits: ', benefits)*/


        if (!header || !logo || !divider || !benefits) return;
        // console.log('all const are defined')

        const handleScroll = () => {
            const benefitsTop = benefits.getBoundingClientRect().top;
            const benefitsBottom = benefits.getBoundingClientRect().bottom;
            const headerHeight = header.offsetHeight;

            requestAnimationFrame(() => {
                if (benefitsTop <= headerHeight) {
                    header.style.backgroundColor = "var(--primary)";
                    divider.style.backgroundColor = "#FFFFFF";
                    logo.style.color = "#FFFFFF";
                } else {
                    header.style.backgroundColor = "var(--white)";
                    divider.style.backgroundColor = "var(--primary)";
                    logo.style.color = "var(--primary)";
                }
                if (benefitsBottom - headerHeight <= 0) {
                    header.style.backgroundColor = "var(--white)";
                    divider.style.backgroundColor = "var(--primary)";
                    logo.style.color = "var(--primary)";
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isSmallScreen]);

    return (
        <div className="App">
            {/* Header */}
            <header id="header" ref={headerRef} className="header">
                <h2 ref={logoRef} className="logo">YeeDee</h2>
                <nav id="navigate" className="nav">
                    <ul>
                        <li><a href="#about">Про нас</a></li>
                        <li><a href="#benefits">Вигода</a></li>
                        <li><a href="#partnership">Партнерство</a></li>
                    </ul>
                </nav>
                <a href='https://t.me/YeeStore_Bot' className="bot-button">
                    <img src={telegramLogo} alt='telegram logo'/>
                    <span>Наш Telegram bot</span>
                </a>
            </header>
            <div ref={dividerRef} className="header-div"></div>
            <div className="qr_code">
                <span>Скануй або натискай</span>
                <a href='https://t.me/YeeStore_Bot'>
                    <img src={qr_code} alt="qr link to telegram"/>
                </a>
            </div>

            {/* Hero Section */}
            <section id="about" className="hero">
                <div className="hero-content">
                    <h1>YeeDee — їжа з вигодою для всіх</h1>
                    <h3>Це проект, місія якого боротися з харчовими відходами. Ми створюємо сервіси, що об'єднують людей
                        і бізнес навколо ідеї розумного споживання продуктів харчування.</h3>
                    <img src={yeedeeLogo} alt="Логотип YeeDee - економія на продуктах" className="img_logo"/>
                    <a href="https://t.me/YeeStore_Bot" className="try-tg-btn">
                        <span>Спробувати в Telegram</span>
                        <img src={telegramLogo} alt="Логотип Telegram"/>
                    </a>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="benefits" ref={benefitsRef}>
                <h2>Інноваційна платформа, яка допомагає</h2>
                <div className="benefits-container">
                    <div id="benefits-business" className='benefits-info'>
                        <img src={dollarIcon} alt='dollar переваги для бізнесу' loading="lazy"/>
                        <p>Бізнесам зменшувати втрати продуктів, продаючи товари з наближеним терміном придатності</p>
                    </div>
                    <img className='benefits-phone' src={phoneImg} alt='yeedee phone' loading="lazy"/>
                    <div className='benefits-right'>
                        <div id="benefits-people" className='benefits-info'>
                            <img src={peopleIcon} alt='people переваги для людей' loading="lazy"/>
                            <p>Покупцям знаходити вигідні пропозиції</p>
                        </div>
                        <div id="benefits-planet" className='benefits-info'>
                            <img src={planetIcon} alt='planet переваги для планети' loading="lazy"/>
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
                        <p>Через сервіс YeeDee бізнес виставляє на продаж зі знижкою товари на межі строку
                            придатності</p>
                        <span className="how-it-works-number">2</span>
                        <p>Коли покупець забирає товар в магазині, продавець отримує свої кошти</p>
                    </div>
                    <div className="hiw-mobile-numbers">
                        <span className="how-it-works-number">1</span>
                        <span className="how-it-works-number">2</span>
                        <span className="how-it-works-number">3</span>
                    </div>
                    <div className="how-it-works-center">
                        <img src={clipboardImg} alt="clipboard вибір товара" loading="lazy"/>
                        <div className="how-it-works-line"></div>
                        <img src={cartImg} alt="Cart додати товар в кошик" loading="lazy"/>
                        <div className="how-it-works-line"></div>
                        <img src={orderImg} alt="Package забрати своє замовлення" loading="lazy"/>
                    </div>
                    <div className="hiw-mobile-text">
                        <p>Через сервіс YeeDee бізнес виставляє на продаж зі знижкою товари на межі строку
                            придатності</p>
                        <p>Люди переглядають доступні товари та бронюють їх для себе через нашу платформу.</p>
                        <p>Коли покупець забирає товар в магазині, продавець отримує свої кошти</p>
                    </div>
                    <div className="how-it-works-right">
                        <span className="how-it-works-number">1</span>
                        <p>Люди переглядають доступні товари та бронюють їх для себе через нашу платформу.</p>
                        <span className="how-it-works-number">3</span>
                    </div>
                </div>
            </section>

            {/* Join Us Section */}
            <section id="partnership" className="join">
                <h2>Долучайтеся до спільноти!</h2>
                <h3>
                    Приєднуйтеся до проекту, що змінює підхід до харчування, бізнесу та екології. Разом ми створюємо
                    майбутнє, де виграють всі!
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
                    <img src={mailImg} alt="email електрона пошта" loading="lazy"/>
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
