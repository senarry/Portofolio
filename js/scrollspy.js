/**
 * SCROLLSPY & DYNAMIC HEADING COLORS
 * Mendeteksi section aktif saat scrolling dan mengubah warna aksen secara dinamis
 */

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function initScrollspy() {
  const sections = document.querySelectorAll('.portfolio-section');
  const navItems = document.querySelectorAll('.nav-item');

  if (!sections.length || !navItems.length) return;

  const sectionColorMap = {};
  portfolioData.sections.forEach(sec => {
    sectionColorMap[sec.id] = sec.color;
  });

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -55% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        const activeColor = sectionColorMap[currentId] || '#000000';

        // 1. Update active class in sidebar & sections
        navItems.forEach(item => {
          if (item.dataset.section === currentId) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });

        sections.forEach(sec => {
          if (sec.getAttribute('id') === currentId) {
            sec.classList.add('section-active');
          } else {
            sec.classList.remove('section-active');
          }
        });

        // 2. Dynamically update CSS custom properties for active accent
        document.documentElement.style.setProperty('--active-accent', activeColor);
        document.documentElement.style.setProperty('--active-accent-light', hexToRgba(activeColor, 0.08));
        document.documentElement.style.setProperty('--active-accent-border', hexToRgba(activeColor, 0.4));
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}
