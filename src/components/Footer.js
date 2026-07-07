class DistamusFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
        distamus-footer .df-footer {
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(2, 6, 23, 0.6);
          padding: 96px 24px 40px;
          font-family: 'Poppins', sans-serif;
        }
        distamus-footer .df-top {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 48px;
        }
        distamus-footer .df-brand { max-width: 380px; }
        distamus-footer .df-brand-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        distamus-footer .df-brand-row img {
          width: 32px;
          height: 32px;
          border-radius: 8px;
        }
        distamus-footer .df-brand-row span {
          font-weight: 700;
          font-size: 1.25rem;
          color: #fff;
        }
        distamus-footer .df-tagline {
          font-size: 0.85rem;
          color: #94a3b8;
          line-height: 1.6;
        }
        distamus-footer .df-links {
          display: flex;
          flex-wrap: wrap;
          gap: 64px;
        }
        distamus-footer .df-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        distamus-footer .df-col h4 {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #fff;
          margin-bottom: 8px;
        }
        distamus-footer .df-col a {
          font-size: 0.9rem;
          color: #94a3b8;
          text-decoration: none;
          transition: color .2s ease;
        }
        distamus-footer .df-col a:hover { color: #22d3ee; }
        distamus-footer .df-bottom {
          max-width: 1280px;
          margin: 64px auto 0;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        distamus-footer .df-copy {
          font-size: 0.85rem;
          color: #64748b;
        }
        distamus-footer .df-motto {
          margin-left: 6px;
          font-weight: 500;
          color: #8b5cf6;
        }
        distamus-footer .df-badge {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #22d3ee;
          border: 1px solid rgba(34, 211, 238, 0.25);
          background: rgba(34, 211, 238, 0.05);
          padding: 6px 16px;
          border-radius: 999px;
          white-space: nowrap;
        }
        @media (max-width: 768px) {
          distamus-footer .df-footer { padding: 80px 16px 40px; }
          distamus-footer .df-top {
            flex-direction: column;
            align-items: center;
            gap: 40px;
            text-align: center;
          }
          distamus-footer .df-brand { max-width: none; }
          distamus-footer .df-brand-row { justify-content: center; }
          distamus-footer .df-links {
            justify-content: center;
            gap: 48px;
          }
          distamus-footer .df-col { align-items: center; }
          distamus-footer .df-bottom {
            flex-direction: column-reverse;
            align-items: center;
            text-align: center;
            gap: 16px;
          }
        }
      </style>

      <footer class="df-footer">
        <div class="df-top">
          <div class="df-brand">
            <div class="df-brand-row">
              <img src="distamuslogo.webp" alt="Distamus Logo">
              <span>Distamus</span>
            </div>
            <p class="df-tagline">Transformando el futuro digital, una actualización a la vez.</p>
          </div>
          <div class="df-links">
            <div class="df-col">
              <h4>DDU 2026</h4>
              <a href="index.html#inicio">Inicio</a>
              <a href="index.html#filosofia">Filosofía</a>
              <a href="index.html#detalles">Evolución</a>
              <a href="index.html#esperar">Novedades</a>
            </div>
            <div class="df-col">
              <h4>Historial</h4>
              <a href="ddu2025.html">Archivo DDU 2025</a>
            </div>
          </div>
        </div>
        <div class="df-bottom">
          <p class="df-copy">&copy; 2026 Distamus Day Update. Todos los derechos reservados. <span class="df-motto">The Next Chapter Begins.</span></p>
          <div class="df-badge">10 de Julio, 2026</div>
        </div>
      </footer>
    `;
  }
}
customElements.define('distamus-footer', DistamusFooter);
