'use client';
import { useState } from 'react';

// Add this content array at the top of the file, outside the component
const carouselContent = [
  {
    title: "Cupcake Dreams Do Come True.",
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
    title: "Baked Fresh Every Morning.",
    image: "/cupcakes1.svg",
    prices: [
      { price: "$3", description: "Seasonal Cupcake" },
      { price: "$32", description: "Seasonal Dozen" },
      { price: "$15", description: "Gluten-Free 1/2 Dozen" },
      { price: "$7", description: "Filled Cupcake" },
      { price: "$28", description: "Gluten-Free Dozen" },
      { price: "$8+", description: "Custom Filled Cupcake" }
    ]
  },
  {
    title: "Custom Orders Welcome.",
    image: "/cupcakes40.svg",
    prices: [
      { price: "$35+", description: "Wedding Dozen" },
      { price: "$45", description: "Premium Dozen" },
      { price: "$20", description: "Premium 1/2 Dozen" },
      { price: "$10", description: "Premium Single" },
      { price: "$40+", description: "Event Dozen" },
      { price: "$15+", description: "Custom Design" }
    ]
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselContent.length);
  };

  const handlePrev = () => {
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
            <div className="center-content">
              <h1 className="dream-title">{carouselContent[currentIndex].title}</h1>
              <div className="price-grid">
                {carouselContent[currentIndex].prices.map((item, index) => (
                  <div className="price-item" key={index}>
                    <span className="price">{item.price}</span>
                    <span className="description">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="nav-quadrant nav-center-bottom">
            <img 
              src={carouselContent[currentIndex].image} 
              alt="Cupcakes" 
              className="cupcakes-image" 
            />
          </div>
          <div className="nav-quadrant nav-right" onClick={handleNext}>
            <img src="/arrow-right.svg" alt="Next" className="nav-arrow" />
          </div>
        </div>
      </div>
      <img 
          src="/cloud-footer-1.svg" 
          alt="Cloud Footer" 
          className="hero-cloud-footer"
        />
      <div className="content-section"></div>
    </div>
  );
}
