<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  
  function navigateTo(path) {
    goto(path);
  }
</script>

<nav class="navbar">
  <div class="nav-container">
    <div class="nav-brand">
      <a href="/" class="brand-link">
        <img src="/logo.svg" alt="Fuel Mechanical LLC" class="logo" />
        <span class="brand-text">Fuel Mechanical</span>
      </a>
    </div>
    
    <div class="nav-links">
      <a href="/" class="nav-link" class:active={$page.route.id === '/'}>Home</a>
      <a href="/about" class="nav-link" class:active={$page.route.id === '/about'}>About</a>
      <a href="/contact" class="nav-link" class:active={$page.route.id === '/contact'}>Contact</a>
    </div>
  </div>
</nav>

<style>
  .navbar {
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 80px;
  }

  .nav-brand {
    display: flex;
    align-items: center;
  }

  .brand-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--text-dark);
  }

  .logo {
    height: 40px;
    width: auto;
    margin-right: 0.75rem;
  }

  .brand-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-blue);
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-link {
    text-decoration: none;
    color: var(--text-dark);
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .nav-link:hover {
    color: var(--primary-blue);
    background-color: rgba(59, 130, 246, 0.1);
  }

  .nav-link.active {
    color: var(--primary-blue);
    background-color: rgba(59, 130, 246, 0.15);
  }

  @media (max-width: 768px) {
    .nav-container {
      padding: 0 1rem;
      height: 70px;
    }

    .brand-text {
      font-size: 1.25rem;
    }

    .nav-links {
      gap: 1rem;
    }

    .nav-link {
      font-size: 1rem;
      padding: 0.4rem 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .logo {
      height: 32px;
    }
    
    .brand-text {
      display: none;
    }
    
    .nav-links {
      gap: 0.5rem;
    }
    
    .nav-link {
      font-size: 0.9rem;
      padding: 0.3rem 0.6rem;
    }
  }
</style>