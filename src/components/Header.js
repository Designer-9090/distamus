class DistamusHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        distamus-header .dh-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          font-family: 'Poppins', sans-serif;
          transition: background .3s ease, backdrop-filter .3s ease, border-color .3s ease;
          border-bottom: 1px solid transparent;
        }
        distamus-header .dh-header.dh-scrolled {
          background: rgba(2, 6, 23, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom-color: rgba(255, 255, 255, 0.08);
        }
        distamus-header .dh-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        distamus-header .dh-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }
        distamus-header .dh-logo img {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.45);
        }
        distamus-header .dh-logo span {
          font-weight: 700;
          font-size: 1.1rem;
          color: #fff;
          letter-spacing: -0.02em;
        }
        distamus-header .dh-nav {
          display: flex;
          align-items: center;
          gap: 40px;
        }
        distamus-header .dh-nav a {
          font-size: 0.9rem;
          font-weight: 500;
          color: #94a3b8;
          text-decoration: none;
          transition: color .2s ease;
        }
        distamus-header .dh-nav a:hover { color: #fff; }
        distamus-header .dh-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        distamus-header .dh-cta {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          font-size: 0.85rem;
          font-weight: 500;
          padding: 10px 20px;
          text-decoration: none;
          transition: background .2s ease;
          white-space: nowrap;
        }
        distamus-header .dh-cta:hover { background: rgba(255, 255, 255, 0.1); }
        distamus-header .dh-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 6px;
          cursor: pointer;
        }
        distamus-header .dh-toggle span {
          display: block;
          width: 22px;
          height: 2px;
          border-radius: 2px;
          background: #fff;
          transition: transform .3s ease, opacity .3s ease;
        }
        distamus-header .dh-toggle.dh-active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        distamus-header .dh-toggle.dh-active span:nth-child(2) { opacity: 0; }
        distamus-header .dh-toggle.dh-active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
        distamus-header .dh-mobile {
          display: grid;
          grid-template-rows: 0fr;
          overflow: hidden;
          background: rgba(2, 6, 23, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid transparent;
          transition: grid-template-rows .3s ease, border-color .3s ease;
        }
        distamus-header .dh-mobile.dh-open {
          grid-template-rows: 1fr;
          border-top-color: rgba(255, 255, 255, 0.08);
        }
        distamus-header .dh-mobile-inner {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 0 24px;
          opacity: 0;
          transition: opacity .25s ease, padding .3s ease;
        }
        distamus-header .dh-mobile.dh-open .dh-mobile-inner {
          padding: 16px 24px 24px;
          opacity: 1;
          transition-delay: .08s;
        }
        distamus-header .dh-mobile a {
          padding: 12px 8px;
          border-radius: 10px;
          color: #e2e8f0;
          text-decoration: none;
          font-size: 1rem;
          transition: background .2s ease;
        }
        distamus-header .dh-mobile a:hover { background: rgba(255, 255, 255, 0.05); }
        distamus-header .dh-mobile .dh-cta { justify-content: center; margin-top: 8px; }
        @media (max-width: 768px) {
          distamus-header .dh-nav,
          distamus-header .dh-cta-desktop { display: none; }
          distamus-header .dh-toggle { display: flex; }
        }
      </style>

      <header class="dh-header" id="dhHeader">
        <div class="dh-inner">
          <a href="index.html#inicio" class="dh-logo">
            <img src="distamuslogo.webp" alt="Distamus Logo">
            <span>Distamus</span>
          </a>

          <nav class="dh-nav">
            <a href="index.html#inicio">Inicio</a>
            <a href="index.html#filosofia">Filosofía</a>
            <a href="index.html#detalles">Evolución</a>
            <a href="index.html#esperar">Novedades</a>
            <a href="next-chapter.html">Blogs</a>
          </nav>

          <div class="dh-actions">
            <a href="ddu2025.html" class="dh-cta dh-cta-desktop">← DDU 2025</a>
            <button class="dh-toggle" id="dhToggle" aria-label="Abrir menú" aria-expanded="false">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div class="dh-mobile" id="dhMobile">
          <div class="dh-mobile-inner">
            <a href="index.html#inicio">Inicio</a>
            <a href="index.html#filosofia">Filosofía</a>
            <a href="index.html#detalles">Evolución</a>
            <a href="index.html#esperar">Novedades</a>
            <a href="next-chapter.html">Blogs</a>
            <a href="ddu2025.html" class="dh-cta">← DDU 2025</a>
          </div>
        </div>
      </header>
    `;

    const header = this.querySelector('#dhHeader');
    const toggle = this.querySelector('#dhToggle');
    const mobile = this.querySelector('#dhMobile');

    const onScroll = () => header.classList.toggle('dh-scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    toggle.addEventListener('click', () => {
      const isOpen = mobile.classList.toggle('dh-open');
      toggle.classList.toggle('dh-active', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobile.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobile.classList.remove('dh-open');
        toggle.classList.remove('dh-active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}
customElements.define('distamus-header', DistamusHeader);
