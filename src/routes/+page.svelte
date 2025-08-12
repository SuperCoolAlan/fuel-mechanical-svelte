<script>
  // Fuel Mechanical LLC - Home Page
</script>

<svelte:head>
  <title>Fuel Mechanical LLC - Heating & Cooling Services</title>
  <meta name="description" content="Professional heating and cooling services by Fuel Mechanical LLC. Expert HVAC installation, repair, and maintenance." />
</svelte:head>

<div class="hero">
  <div class="hero-content">
    <img src="/logo-full-color.png" alt="Fuel Mechanical LLC" class="logo" />
    <h1>Fuel Mechanical LLC</h1>
    <p class="tagline">Heating & Cooling</p>
    <p class="description">Professional HVAC services you can trust</p>
    <div class="cta-buttons">
      <a href="/contact" class="btn btn-primary">Get A Quote</a>
      <a href="/about#our-services" class="btn btn-secondary">Our Services</a>
    </div>
  </div>
</div>

<style>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: white;
    text-align: center;
    padding: 2rem;
  }

  .hero-content {
    max-width: 800px;
  }

  .logo {
    width: 200px;
    height: auto;
    margin-bottom: 2rem;
  }

  h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    font-style: italic;
    letter-spacing: 0.5px;
    transform: skewX(-8deg);
    margin: 1rem 0;
  }

  .tagline {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: #fbbf24;
  }

  .description {
    font-size: 1.25rem;
    margin: 2rem 0;
    opacity: 0.9;
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .btn {
    padding: 1rem 2rem;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    transition: all 0.3s ease;
    display: inline-block;
  }

  .btn-primary {
    background: #fbbf24;
    color: #1f2937;
  }

  .btn-primary:hover {
    background: #f59e0b;
    transform: translateY(-2px);
  }

  .btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }

  .btn-secondary:hover {
    background: white;
    color: #1d4ed8;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    
    .cta-buttons {
      flex-direction: column;
      align-items: center;
    }
    
    .btn {
      width: 200px;
    }
  }
</style>