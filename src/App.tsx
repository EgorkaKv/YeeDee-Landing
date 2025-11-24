import {lazy, Suspense} from "react";
import './App.css'
import Layout from "./components/Layout/Layout";
import HeroSection from "./hero/Hero.tsx";
import Loading from "./components/Loading";
const HowItWorks = lazy(() => import('./how-it-works/HowItWorks'));
const Benefits = lazy(() => import('./benefits/Benefits'));
const Enticement = lazy(() => import('./enticement/Enticement'));
const FaqSection = lazy(() => import('./faq/FAQ'));
const Footer = lazy(() => import('./footer/Footer'));
const CallToActionSection = lazy(() => import('./cta/CallToAction'));
import ScrollToTop from "./ScrollToTop.tsx";


function App() {

  return (
    <Suspense fallback={<Loading />}>
    <Layout>
      <HeroSection/>
      <HowItWorks/>
      <Benefits/>
      <Enticement/>
      <FaqSection/>
      <CallToActionSection/>
      <Footer/>
      <ScrollToTop/>
      {/*<div
        style={{
          position: "fixed",
          left: 0,
          width: "100vw",
          top: "calc(60vh - 1px)", // минус половина толщины линии
          height: "2px",
          background: "blue",
          zIndex: 1000,
          pointerEvents: "none",
        }}
      />*/}
    </Layout>
    </Suspense>
  )
}

export default App
