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
        <img 
          src="/hero-cloud-footer.svg" 
          alt="Cloud Footer" 
          className="hero-cloud-footer"
        />
      </div>
      <div className="content-section"></div>
    </div>
  );
}
