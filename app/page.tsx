export default function Home() {
  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <div className="cloud-banner cloud-banner-fg">
          <img 
            src="/cupcake-dream-logo.svg" 
            alt="Cupcake Dream Logo" 
            className="cloud-banner-logo"
          />
        </div>
      </nav>
      <div className="hero-container">
        <div className="hero-nav-grid">
          <div className="nav-quadrant nav-left">
            <img src="/arrow-left.svg" alt="Previous" className="nav-arrow" />
          </div>
          <div className="nav-quadrant nav-center-top">
            <div className="center-content">
              <h1 className="dream-title">Cupcake Dreams Do Come True.</h1>
              <div className="price-grid">
                <div className="price-item">
                  <span className="price">$2.5</span>
                  <span className="description">Standard Cupcake</span>
                </div>
                <div className="price-item">
                  <span className="price">$30</span>
                  <span className="description">Custom Dozen</span>
                </div>
                <div className="price-item">
                  <span className="price">$13</span>
                  <span className="description">Standard 1/2 Dozen</span>
                </div>
                <div className="price-item">
                  <span className="price">$6</span>
                  <span className="description">Jumbo Cupcake</span>
                </div>
                <div className="price-item">
                  <span className="price">$26</span>
                  <span className="description">Standard Dozen</span>
                </div>
                <div className="price-item">
                  <span className="price">$6+</span>
                  <span className="description">Custom Jumbo Cupcake</span>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-quadrant nav-center-bottom">
            <img src="/cupcakes2.svg" alt="Cupcakes" className="cupcakes-image" />
          </div>
          <div className="nav-quadrant nav-right">
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
