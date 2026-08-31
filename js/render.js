/**
 * RENDER MODULE - PORTOFOLIO HUSAIN AFRIZAL
 * Render seluruh konten dinamis dari data.js ke dalam DOM
 * Tema: Clean Minimalist White / Precision Engineering Monochrome
 */

document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderHero();
  renderEducation();
  renderAcademicProjects();
  renderInternships();
  renderIndependentStudies();
  renderCertificates();
  renderContact();
  renderFooter();

  // Inisialisasi Event Listener Interaktif
  initMobileMenu();
  initScrollspy();
  initModalListeners();
});

// Icon SVG helper
function getIconSvg(iconName) {
  const icons = {
    home: `<svg class="nav-icon" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    academic: `<svg class="nav-icon" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
    cube: `<svg class="nav-icon" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    briefcase: `<svg class="nav-icon" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
    sparkles: `<svg class="nav-icon" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    badge: `<svg class="nav-icon" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    mail: `<svg class="nav-icon" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`
  };
  return icons[iconName] || icons.home;
}

// 1. Render Sidebar Nav
function renderSidebar() {
  const brandName = document.getElementById('brand-name');
  const brandSub = document.getElementById('brand-subtitle');
  const navContainer = document.getElementById('nav-menu-list');

  if (brandName) brandName.textContent = portfolioData.profile.fullName;
  if (brandSub) brandSub.textContent = portfolioData.profile.title;

  if (navContainer) {
    navContainer.innerHTML = portfolioData.sections.map((sec, idx) => `
      <li class="nav-item ${idx === 0 ? 'active' : ''}" data-section="${sec.id}" data-color="${sec.color}">
        <a href="#${sec.id}">
          <div class="nav-item-left">
            ${getIconSvg(sec.icon)}
            <span>${sec.label}</span>
          </div>
          <span class="nav-item-arrow">→</span>
        </a>
      </li>
    `).join('');
  }
}

// 2. Render Hero / Latar Belakang
function renderHero() {
  const heroContainer = document.getElementById('hero-content');
  if (!heroContainer) return;

  const { profile } = portfolioData;
  heroContainer.innerHTML = `
    <div class="hero-card">
      <div class="hero-text">
        <h1 class="hero-greeting">${profile.greeting}</h1>
        <div class="hero-title-role">${profile.title} • ${profile.institution}</div>
        <p class="hero-bio">${profile.bio}</p>
        <div class="hero-skills-chips">
          <span class="skill-chip">⚙️ CAD/CAM/CAE</span>
          <span class="skill-chip">🔩 CNC Machining (VMC & Lathe)</span>
          <span class="skill-chip">🖨️ 3D Printing & Tooling</span>
          <span class="skill-chip">🤖 Otomasi Industri (PLC)</span>
          <span class="skill-chip">🛡️ K3 & Ergonomi Industri</span>
          <span class="skill-chip">📐 Lean Manufacturing & DOE</span>
        </div>
      </div>
      <div class="hero-avatar-wrap">
        <img src="${profile.avatar}" alt="${profile.fullName}" class="hero-avatar-img" />
        <div class="hero-avatar-badge">Lulus Agt 2026</div>
      </div>
    </div>
  `;
}

// 3. Render Pendidikan (Bersih tanpa gambar di kartu luar, interaktif untuk modal)
function renderEducation() {
  const container = document.getElementById('education-content');
  if (!container) return;

  container.innerHTML = portfolioData.education.map(edu => `
    <div class="education-card-interactive" onclick="openEducationModal('${edu.id}')">
      <div class="edu-card-body-clean">
        <div class="edu-header">
          <div>
            <div class="edu-degree-row">
              <h3 class="edu-degree">${edu.degree}</h3>
              <span class="edu-tag-badge">${edu.tag}</span>
            </div>
            <div class="edu-institution">${edu.institution}</div>
          </div>
          <span class="edu-period-badge">${edu.period}</span>
        </div>

        <div class="edu-gpa-badge">IPK: ${edu.gpa}</div>
        <p class="edu-desc">${edu.description}</p>
      </div>

      <div class="edu-highlights-box">
        <div class="edu-highlights-title">⭐ Sorotan Kurikulum, Kepanitiaan &amp; Pengalaman Organisasi:</div>
        <ul class="edu-highlights-list">
          ${edu.highlights.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      <div class="edu-modal-action-trigger">
        <div class="edu-trigger-left">
          <span class="edu-click-pill">View more</span>
        </div>
        <span class="edu-trigger-arrow">→</span>
      </div>
    </div>
  `).join('');
}

// 4. Render Project Perkuliahan (6 Kategori dengan Centered Category Box & Full-Span untuk Ganjil)
function renderAcademicProjects() {
  const container = document.getElementById('academic-projects-grid');
  if (!container) return;

  const categories = portfolioData.academicProjectCategories || [];

  container.innerHTML = categories.map((cat) => {
    const isOdd = cat.projects.length % 2 !== 0;

    const projectsHtml = cat.projects.map((proj, pIdx) => {
      const isLastOdd = isOdd && pIdx === cat.projects.length - 1;
      const cardClass = isLastOdd ? 'project-card project-card-full-span' : 'project-card';

      return `
        <div class="${cardClass}" onclick="openProjectModal('${proj.id}', 'academic')">
          <div class="project-thumbnail-wrapper">
            <img src="${proj.image}" alt="${proj.title}" class="project-thumbnail" />
          </div>
          <div class="project-card-body">
            <h3 class="project-card-title">${proj.title}</h3>
            <p class="project-card-desc">${proj.shortDesc}</p>
            <div class="project-card-footer">
              <span class="project-action-link">View more <span>→</span></span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="proj-category-block ${cat.theme || ''}" id="${cat.id}">
        <div class="proj-category-banner">
          <h2 class="proj-category-title">${cat.label}</h2>
          <p class="proj-category-desc">${cat.desc}</p>
        </div>

        <div class="projects-grid-2col">
          ${projectsHtml}
        </div>
      </div>
    `;
  }).join('');
}

// 5. Render Magang Kerja — Compact summary card, klik untuk lihat proyek di modal
function renderInternships() {
  const container = document.getElementById('internships-content');
  if (!container) return;

  const intern = (portfolioData.internships && portfolioData.internships[0]) || null;
  if (!intern) return;

  const totalProjects = intern.categories
    ? intern.categories.reduce((sum, cat) => sum + cat.projects.length, 0)
    : (intern.projectsCount || 0);

  container.innerHTML = `
    <div class="experience-card" onclick="openExperienceModal('${intern.id}', 'internship')">
      <div class="exp-header">
        <div>
          <h3 class="exp-company">${intern.company}</h3>
          <div class="exp-role">${intern.position} — ${intern.department}</div>
        </div>
        <span class="exp-badge-duration">${intern.period}</span>
      </div>
      <p class="exp-summary">${intern.description}</p>
      
      <div class="exp-projects-trigger">
        <div class="exp-projects-trigger-text">
          <span class="exp-projects-count-pill">${totalProjects} Proyek dalam 4 Kategori</span>
        </div>
        <span class="exp-projects-arrow">→</span>
      </div>
    </div>
  `;
}

// 6. Render Studi Independen
function renderIndependentStudies() {
  const container = document.getElementById('stupen-content');
  if (!container) return;

  container.innerHTML = portfolioData.independentStudies.map(stupen => `
    <div class="experience-card" onclick="openExperienceModal('${stupen.id}', 'stupen')">
      <div class="exp-header">
        <div>
          <h3 class="exp-company">${stupen.program}</h3>
          <div class="exp-role">${stupen.role}</div>
        </div>
        <span class="exp-badge-duration">${stupen.period}</span>
      </div>
      <p class="exp-summary">${stupen.summary}</p>
      
      <div class="exp-projects-trigger">
        <div class="exp-projects-trigger-text">
          <span class="exp-projects-count-pill">${stupen.projects.length} Sub-Proyek</span>
        </div>
        <span class="exp-projects-arrow">→</span>
      </div>
    </div>
  `).join('');
}

// 7. Render Sertifikat — Dikelompokkan per grup
function renderCertificates() {
  const container = document.getElementById('certificates-grid');
  if (!container) return;

  // Definisi urutan & label kelompok
  const groupDefs = [
    { key: 'bnsp',       label: 'Sertifikasi Kompetensi Nasional',          sub: 'BNSP — Standar Kompetensi Kerja Nasional Indonesia (SKKNI)' },
    { key: 'internship', label: 'Sertifikat Magang Kerja Industri',          sub: 'Bukti penyelesaian program magang di industri manufaktur' },
    { key: 'msib',       label: 'Program MSIB & Studi Independen Bersertifikat', sub: 'Program Kampus Merdeka — PT CADFEM Simulation Technology Indonesia' },
    { key: 'elearning',  label: 'Sertifikat E-Learning & Online Track',      sub: 'Ansys Innovation Courses & LinkedIn Learning' },
    { key: 'seminar',    label: 'Sertifikat Seminar & Workshop',             sub: 'Seminar dan kegiatan teknis akademik' },
    { key: 'activity',   label: 'Sertifikat Kepanitiaan & Kegiatan Kampus',  sub: 'Volunteer, panitia, dan organisasi kemahasiswaan' },
  ];

  function renderCertCard(cert, isFullSpan = false) {
    const credentialRow = cert.credentialId
      ? `<div class="cert-id">Kredensial: ${cert.credentialId}</div>`
      : '';
    const cardClass = isFullSpan ? 'certificate-card certificate-card-full-span' : 'certificate-card';
    return `
      <div class="${cardClass}" onclick="openCertificateModal('${cert.id}')">
        <div class="cert-thumb-preview-wrap">
          <img src="${cert.image}" alt="${cert.title}" class="cert-thumb-img" />
        </div>
        <div class="cert-card-body">
          <h3 class="cert-title">${cert.title}</h3>
          ${credentialRow}
          <div class="cert-skills-chips">
            ${cert.skills.map(s => `<span class="cert-skill-tag">${s}</span>`).join('')}
          </div>
          <div class="cert-card-footer">
            <span class="cert-action-text">View more <span>→</span></span>
          </div>
        </div>
      </div>
    `;
  }

  const allCerts = portfolioData.certificates || [];

  container.innerHTML = groupDefs.map(gDef => {
    const certs = allCerts.filter(c => c.group === gDef.key);
    if (certs.length === 0) return '';
    const isOdd = certs.length % 2 !== 0;

    return `
      <div class="cert-subgroup theme-${gDef.key}">
        <div class="cert-subgroup-header">
          <div>
            <span class="cert-subgroup-pill">${gDef.label}</span>
          </div>
        </div>
        <div class="certificates-grid-inner">
          ${certs.map((c, idx) => renderCertCard(c, isOdd && idx === certs.length - 1)).join('')}
        </div>
      </div>
    `;
  }).join('');

}


// 8. Render Kontak
function renderContact() {
  const container = document.getElementById('contact-content');
  if (!container) return;

  const { contactQuick } = portfolioData.profile;

  container.innerHTML = `
    <div class="contact-grid">
      <a href="mailto:${contactQuick.email}" class="contact-card">
        <div class="contact-card-icon">✉️</div>
        <div class="contact-card-label">Email</div>
        <div class="contact-card-val">${contactQuick.email}</div>
      </a>
      <a href="https://wa.me/6281904876856" target="_blank" class="contact-card">
        <div class="contact-card-icon">💬</div>
        <div class="contact-card-label">WhatsApp</div>
        <div class="contact-card-val">${contactQuick.phone}</div>
      </a>
      <a href="${contactQuick.linkedin}" target="_blank" class="contact-card">
        <div class="contact-card-icon">🔗</div>
        <div class="contact-card-label">LinkedIn</div>
        <div class="contact-card-val">husainafrizal</div>
      </a>
    </div>

    <div class="contact-message-box">
      <h3 class="contact-message-title">Tertarik Berdiskusi & Berkolaborasi?</h3>
      <p class="contact-message-desc">Saya terbuka untuk kesempatan kerja penuh waktu (Full-time), Project Rekayasa Manufaktur, maupun konsultasi desain teknis.</p>
      <div class="contact-actions">
        <a href="mailto:${contactQuick.email}" class="btn-primary">Kirim Email</a>
        <a href="https://wa.me/6281904876856" target="_blank" class="btn-secondary">Hubungi via WhatsApp</a>
      </div>
    </div>
  `;
}

// 9. Render Footer
function renderFooter() {
  const footerContainer = document.getElementById('main-footer');
  if (footerContainer) {
    footerContainer.innerHTML = `
      <p>© ${new Date().getFullYear()} ${portfolioData.profile.fullName}</p>
    `;
  }
}

// Mobile Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');

  if (toggleBtn && sidebar && backdrop) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      backdrop.classList.toggle('active');
    });

    backdrop.addEventListener('click', () => {
      sidebar.classList.remove('open');
      backdrop.classList.remove('active');
    });

    // Close menu when clicking nav item in mobile
    const navLinks = sidebar.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('open');
        backdrop.classList.remove('active');
      });
    });
  }
}
