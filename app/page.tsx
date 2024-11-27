'use client';
import { useState } from 'react';

interface CarouselItem {
  titleTop: React.ReactNode;
  titleBottom: React.ReactNode;
  image: string;
  prices: Array<{ price: string; description: string }>;
  notice?: {
    row1: string;
    row2: string;
    row3: string;
  };
}

const carouselContent: CarouselItem[] = [
  {
    titleTop: <><strong className="serif-bold">CUPCAKE</strong> Dreams</>,
    titleBottom: "Do Come True.",
    image: "/cupcakes2.svg",
    prices: [
      { price: "$2.5", description: "Standard Cupcake" },
      { price: "$30", description: "Custom Dozen" },
      { price: "$13", description: "Standard 1/2 Dozen" },
      { price: "$6", description: "Jumbo Cupcake" },
      { price: "$26", description: "Standard Dozen" },
      { price: "$6+", description: "Custom Jumbo Cupcake" }
    ]
  },
  {
    titleTop: "Sweeten your day",
    titleBottom: <>with a <strong className="serif-bold">POP</strong></>,
    image: "/cake-pops-5.png",
    prices: [
      { price: "$2.5", description: "Each" },
      { price: "$13", description: "1/2 Dozen" },
      { price: "$26", description: "Dozen" },
      { price: "$2.5+", description: "Custom Cake Pop " }
    ]
  },
  {
    titleTop: "Heart beats and",
    titleBottom: <><strong className="serif-bold">DIPPED TREATS</strong></>,
    image: "/dipped-treats-1.png",
    prices: [
      { price: "$2+", description: "Pretzel Rod" },
      { price: "$1", description: "Marshmallow" },
      { price: "$2.5", description: "Rice Crispy Square" },
      { price: "$3+", description: "Rice Crispy Custom Shape" },
      { price: "$9", description: "Strawberries 1/2 Dozen." },
      { price: "$18", description: "Strawberries Dozen" }
    ]
  },
  {
    titleTop: "Me count",
    titleBottom: <><strong className="serif-bold">COOKIES</strong> to sleep.</>,
    image: "/cookies.png",
    prices: [
      { price: "$3", description: "2 Standard" },
      { price: "$3", description: "Double Stuff" },
      { price: "$2.5", description: "Decorated Small" },
      { price: "$4", description: "Decorated Medium" },
      { price: "$6+", description: "Decorated Large" }
    ]
  },
  {
    titleTop: "Have your dream",
    titleBottom: <><strong className="serif-bold">CAKE</strong> and eat it too.</>,
    image: "/cake-1.png",
    notice: {
      row1: "Cakes are made to order and require 3 days notice. Fondant cakes require 1 week.",
      row2: "50% DEPOSIT REQUIRED TO SECURE AND BEGIN ALL ORDERS.",
      row3: "Cake tastings: $20 fee includes 4 cupcakes and consultation (by appointment only)."
    },
    prices: []
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'top' | 'right' | 'bottom'>('right');

  const handleNext = () => {
    setSlideDirection('right');
    setCurrentIndex((prev) => (prev + 1) % carouselContent.length);
  };

  const handlePrev = () => {
    setSlideDirection('bottom');
    setCurrentIndex((prev) => (prev - 1 + carouselContent.length) % carouselContent.length);
  };

  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <div className="cloud-banner">
          <img 
            src="/cupcake-dream-logo.svg" 
            alt="Cupcake Dream Logo" 
            className="cloud-banner-logo"
          />
        </div>
      </nav>
      <div className="hero-container">
        <div className="hero-nav-grid">
          <div className="nav-quadrant nav-left" onClick={handlePrev}>
            <img src="/arrow-left.svg" alt="Previous" className="nav-arrow" />
          </div>
          <div className="nav-quadrant nav-center-top">
            <div className={`center-content ${carouselContent[currentIndex].notice ? 'notice-layout' : ''}`}>
              <div className="dream-title-container">
                <h1 className="dream-title-top">{carouselContent[currentIndex].titleTop}</h1>
                <h1 className="dream-title-bottom">{carouselContent[currentIndex].titleBottom}</h1>
              </div>
              <div className={`price-grid ${carouselContent[currentIndex].notice ? 'notice-grid' : ''}`}>
                {carouselContent[currentIndex].notice ? (
                  <div className="notice-message">
                    <div className="notice">{carouselContent[currentIndex].notice?.row1}</div>
                    <div className="notice-emphasis">{carouselContent[currentIndex].notice?.row2}</div>
                    <div className="notice">{carouselContent[currentIndex].notice?.row3}</div>
                  </div>
                ) : (
                  carouselContent[currentIndex].prices.map((item, index) => (
                    <div className="price-item" key={index}>
                      <span className="price">{item.price}</span>
                      <span className="description">{item.description}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="nav-quadrant nav-center-bottom">
            <div 
              key={currentIndex} 
              className={`image-container slide-${slideDirection}`}
            >
              <img 
                src={carouselContent[currentIndex].image} 
                alt="Cupcakes" 
                className="cupcakes-image" 
              />
            </div>
          </div>
          <div className="nav-quadrant nav-right" onClick={handleNext}>
            <img src="/arrow-right.svg" alt="Next" className="nav-arrow" />
          </div>
        </div>
      </div>
      <img 
        src="/cloud-footer-1.svg" 
        alt="Cloud Footer" 
        className="cloud-footer"
      />
      <div className="content-section"></div>
    </div>
  );
}
