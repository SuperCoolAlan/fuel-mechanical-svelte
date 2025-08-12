<svelte:head>
  <title>Contact Us - Fuel Mechanical LLC</title>
  <meta name="description" content="Get in touch with Fuel Mechanical LLC for all your heating and cooling needs. Call us today or fill out our contact form." />
</svelte:head>

<section class="hero-section">
  <div class="container">
    <h1 class="hero-title">Contact Us</h1>
    <p class="hero-subtitle">Ready to help with all your heating and cooling needs</p>
  </div>
</section>

<section class="contact-section">
  <div class="container">
    <div class="contact-grid">
      <div class="contact-info">
        <h2>Get In Touch</h2>
        <p>Have a question or need service? We're here to help. Contact us today for fast, reliable heating and cooling solutions.</p>
        
        <div class="contact-methods">
          <div class="contact-method">
            <div class="contact-icon">📞</div>
            <div class="contact-details">
              <h3>Call Us</h3>
              <p><a href="tel:+19189912324">(918) 991-2324</a></p>
              <p class="note">Professional service when you need it</p>
            </div>
          </div>

          <div class="contact-method">
            <div class="contact-icon">✉️</div>
            <div class="contact-details">
              <h3>Email Us</h3>
              <p><a href="mailto:info@fuelmechanical.com">info@fuelmechanical.com</a></p>
              <p class="note">We'll respond within 24 hours</p>
            </div>
          </div>

          <div class="contact-method">
            <div class="contact-icon">📍</div>
            <div class="contact-details">
              <h3>Service Area</h3>
              <p>Tulsa Metro Area</p>
              <p class="note">Serving residential and commercial clients</p>
            </div>
          </div>
        </div>

        <div class="emergency-notice">
          <h3>Need Service?</h3>
          <p>For heating and cooling service, call us at <strong>(918) 991-2324</strong>. We provide reliable solutions to restore your comfort.</p>
        </div>
      </div>

      <div class="contact-form-container">
        <h2>Send Us a Message</h2>
        <form class="contact-form">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div class="form-group">
            <label for="service">Service Needed</label>
            <select id="service" name="service">
              <option value="">Select a service</option>
              <option value="installation">HVAC Installation</option>
              <option value="repair">Repair Service</option>
              <option value="maintenance">Maintenance</option>
              <option value="emergency">Emergency Service</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell us about your heating and cooling needs..."></textarea>
          </div>

          <button type="submit" class="submit-btn">Send Message</button>
        </form>
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
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
  }

  .contact-section {
    padding: 4rem 0;
    background-color: #f9fafb;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .contact-info, .contact-form-container {
    background: white;
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .contact-info h2, .contact-form-container h2 {
    color: var(--primary-blue);
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .contact-info p {
    color: var(--text-light);
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .contact-methods {
    margin-bottom: 2rem;
  }

  .contact-method {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e5e7eb;
  }

  .contact-method:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  .contact-icon {
    font-size: 2rem;
    margin-right: 1rem;
    width: 3rem;
    text-align: center;
  }

  .contact-details h3 {
    color: var(--text-dark);
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .contact-details p {
    color: var(--text-light);
    margin-bottom: 0.25rem;
  }

  .contact-details a {
    color: var(--primary-blue);
    text-decoration: none;
    font-weight: 600;
  }

  .contact-details a:hover {
    text-decoration: underline;
  }

  .contact-details .note {
    font-size: 0.9rem;
    color: var(--text-light);
    font-style: italic;
  }

  .emergency-notice {
    background: linear-gradient(135deg, var(--accent-red), #dc2626);
    color: white;
    padding: 1.5rem;
    border-radius: 8px;
    text-align: center;
  }

  .emergency-notice h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  .emergency-notice p {
    margin: 0;
    color: white;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-group label {
    color: var(--text-dark);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.75rem;
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .submit-btn {
    background: linear-gradient(135deg, var(--primary-blue), var(--secondary-blue));
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
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

    .contact-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }

    .contact-info, .contact-form-container {
      padding: 2rem;
    }

    .contact-method {
      flex-direction: column;
      text-align: center;
    }

    .contact-icon {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
</style>