<svelte:head>
  <title>Portfolio - Fuel Mechanical LLC</title>
  <meta name="description" content="View our portfolio of heating and cooling projects. See the quality workmanship and precision engineering that Fuel Mechanical LLC delivers." />
</svelte:head>

<section class="hero-section">
  <div class="container">
    <h1 class="hero-title">Our Portfolio</h1>
    <p class="hero-subtitle">Quality workmanship and precision</p>
  </div>
</section>

<section class="portfolio-section">
  <div class="container">
    <div class="intro-text">
      <h2>See Our Work in Action</h2>
      <p>Take a look at some of our recent HVAC installations, repairs, and maintenance projects. Each project showcases our commitment to precision and quality craftsmanship.</p>
    </div>

    <!-- Placeholder for Facebook Gallery -->
    <div class="gallery-container">
      <div class="gallery-notice">
        <h3>Project Gallery Coming Soon</h3>
        <p>We're currently setting up our project gallery to showcase our recent work. In the meantime, follow us on Facebook to see our latest projects and updates.</p>
        <a href="https://www.facebook.com/fuelmechanical" target="_blank" rel="noopener noreferrer" class="facebook-link">
          Visit Our Facebook Page
        </a>
      </div>
    </div>

    <!-- Sample project cards for now -->
    <div class="projects-grid">
      <div class="project-card">
        <div class="project-image-placeholder">
          <span>HVAC Installation</span>
        </div>
        <div class="project-info">
          <h3>Residential HVAC System</h3>
          <p>Complete system installation with precision ductwork and energy-efficient components.</p>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image-placeholder">
          <span>Heating Repair</span>
        </div>
        <div class="project-info">
          <h3>Commercial Heating Service</h3>
          <p>Emergency repair and maintenance on commercial heating system, restoring optimal performance.</p>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image-placeholder">
          <span>AC Maintenance</span>
        </div>
        <div class="project-info">
          <h3>Air Conditioning Tune-Up</h3>
          <p>Comprehensive maintenance service ensuring peak efficiency and extending system lifespan.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
    color: white;
    padding: 4rem 0;
    text-align: center;
  }

  .hero-title {
    font-family: 'Oswald', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    font-style: italic;
    letter-spacing: 0.5px;
    transform: skewX(-8deg);
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
  }

  .portfolio-section {
    padding: 4rem 0;
    background-color: #f9fafb;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .intro-text {
    text-align: center;
    margin-bottom: 3rem;
  }

  .intro-text h2 {
    color: var(--primary-blue);
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  .intro-text p {
    color: var(--text-light);
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
  }

  .gallery-container {
    background: white;
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-bottom: 3rem;
  }

  .gallery-notice h3 {
    color: var(--primary-blue);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .gallery-notice p {
    color: var(--text-light);
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .facebook-link {
    display: inline-block;
    background: #1877f2;
    color: white;
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .facebook-link:hover {
    background: #166fe5;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(24, 119, 242, 0.3);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  .project-image-placeholder {
    height: 200px;
    background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .project-info {
    padding: 1.5rem;
  }

  .project-info h3 {
    color: var(--text-dark);
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  .project-info p {
    color: var(--text-light);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1.1rem;
    }

    .container {
      padding: 0 1rem;
    }

    .gallery-container {
      padding: 2rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>