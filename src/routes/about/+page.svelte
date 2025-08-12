<svelte:head>
  <title>About Us - Fuel Mechanical LLC</title>
  <meta name="description" content="Learn about Fuel Mechanical LLC, your trusted heating and cooling professionals with years of experience serving the community." />
</svelte:head>

<section class="hero-section">
  <div class="container">
    <h1 class="hero-title">About Fuel Mechanical</h1>
    <p class="hero-subtitle">Your trusted heating and cooling professionals</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="content-grid">
      <div class="content-block">
        <h2>Our Story</h2>
        <p>
          Fuel Mechanical LLC has been serving the community with reliable heating and cooling solutions. 
          We pride ourselves on delivering precision workmanship and exceptional quality in every project 
          for both residential and commercial clients.
        </p>
        <p>
          Our team of certified technicians brings years of experience and meticulous attention to detail 
          to every installation, ensuring your comfort systems operate with optimal efficiency and reliability.
        </p>
      </div>

      <div class="content-block" id="our-services">
        <h2>Our Services</h2>
        <ul class="service-list">
          <li>HVAC Installation & Repair</li>
          <li>Heating System Maintenance</li>
          <li>Air Conditioning Services</li>
          <li>Water Heater Installation</li>
          <li>Ductwork Installation</li>
          <li>Emergency Repairs</li>
          <li>System Inspections</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>Why Choose Us</h2>
        <div class="features-grid">
          <div class="feature">
            <h3>Experienced Team</h3>
            <p>Certified technicians with years of industry experience</p>
          </div>
          <div class="feature">
            <h3>Quality Work</h3>
            <p>We stand behind our work with comprehensive warranties</p>
          </div>
          <div class="feature">
            <h3>Fair Pricing</h3>
            <p>Transparent pricing with no hidden fees or surprises</p>
          </div>
          <div class="feature">
            <h3>Licensed & Insured</h3>
            <p>Fully licensed and insured for your peace of mind and protection</p>
          </div>
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

  .content-section {
    padding: 4rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .content-grid {
    display: grid;
    gap: 3rem;
  }

  .content-block {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .content-block h2 {
    color: var(--primary-blue);
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .content-block h3 {
    color: var(--text-dark);
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .content-block p {
    color: var(--text-light);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .service-list {
    list-style: none;
    padding: 0;
  }

  .service-list li {
    color: var(--text-light);
    padding: 0.75rem 0;
    border-bottom: 1px solid #e5e7eb;
    position: relative;
    padding-left: 1.5rem;
  }

  .service-list li:before {
    content: "✓";
    color: var(--accent-orange);
    font-weight: bold;
    position: absolute;
    left: 0;
  }

  .service-list li:last-child {
    border-bottom: none;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .feature {
    text-align: center;
    padding: 1.5rem;
    border: 2px solid #e5e7eb;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .feature:hover {
    border-color: var(--primary-blue);
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.15);
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

    .content-block {
      padding: 1.5rem;
    }

    .features-grid {
      grid-template-columns: 1fr;
    }
  }
</style>