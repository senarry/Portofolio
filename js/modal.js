/**
 * MODAL & POPUP CONTROLLER
 * Menampilkan detail lengkap proyek dan galeri sub-proyek Magang, Studi Independen, Pendidikan, dan Sertifikat
 */

let lastOpenedExp = null;
let currentModalGallery = [];
let currentModalGalleryIndex = 0;

function initModalListeners() {
  const overlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal();
      }
    });
  }

  // Keyboard shortcut Esc and Arrow Left/Right
  document.addEventListener('keydown', (e) => {
    const overlay = document.getElementById('project-modal');
    if (overlay && overlay.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        navModalGallery(-1);
      } else if (e.key === 'ArrowRight') {
        navModalGallery(1);
      }
    }
  });
}

function openModal() {
  const overlay = document.getElementById('project-modal');
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  }
}

function closeModal() {
  const overlay = document.getElementById('project-modal');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// 1. Buka Modal Detail Proyek Tunggal
function openProjectModal(projectId, source = 'academic', returnToExp = null) {
  let project = null;

  if (source === 'academic') {
    if (portfolioData.academicProjectCategories) {
      for (const cat of portfolioData.academicProjectCategories) {
        const found = cat.projects.find(p => p.id === projectId);
        if (found) {
          project = found;
          break;
        }
      }
    }
    if (!project && portfolioData.academicProjects) {
      project = portfolioData.academicProjects.find(p => p.id === projectId);
    }
  } else if (source === 'internship') {
    for (const intern of (portfolioData.internships || [])) {
      if (intern.categories) {
        for (const cat of intern.categories) {
          const found = cat.projects.find(p => p.id === projectId);
          if (found) {
            project = found;
            break;
          }
        }
      }
      if (!project && intern.projects) {
        project = intern.projects.find(p => p.id === projectId);
      }
      if (project) break;
    }
  } else if (source === 'stupen') {
    for (const stupen of (portfolioData.independentStudies || [])) {
      const found = stupen.projects.find(p => p.id === projectId);
      if (found) {
        project = found;
        break;
      }
    }
  }

  if (!project) return;

  const categoryBadge = document.getElementById('modal-category-badge');
  const modalBody = document.getElementById('modal-body-content');
  const modalFooter = document.getElementById('modal-footer-content');

  if (categoryBadge) {
    categoryBadge.textContent = project.category || 'DETAIL PROYEK REKAYASA';
  }

  const { details } = project;
  const backButtonHtml = returnToExp ? `
    <button class="btn-secondary" onclick="openExperienceModal('${returnToExp.id}', '${returnToExp.type}')" style="margin-bottom: 20px; font-size: 0.82rem; padding: 6px 14px;">
      ← Kembali ke ${returnToExp.title}
    </button>
  ` : '';

  // Build gallery images array: use details.galleryImages if available, else fallback to [project.image]
  const galleryImages = (details.galleryImages && details.galleryImages.length > 0)
    ? details.galleryImages
    : [project.image];

  currentModalGallery = galleryImages;
  currentModalGalleryIndex = 0;

  // Thumbnail strip items
  const thumbStrip = galleryImages.map((src, i) => `
    <div class="modal-thumb-item ${i === 0 ? 'active' : ''}" onclick="setModalGalleryImage(${i})" title="Lihat gambar ${i + 1}">
      <img src="${src}" alt="Preview ${i + 1}" class="modal-thumb-img" />
    </div>
  `).join('');

  if (modalBody) {
    modalBody.innerHTML = `
      ${backButtonHtml}

      <!-- ARTICLE HERO: Big image + dynamic controls + thumbnail strip -->
      <div class="modal-article-gallery">
        <div class="modal-article-hero">
          <img id="modal-hero-img" src="${galleryImages[0]}" alt="${project.title}" class="modal-hero-big-img" />
          ${galleryImages.length > 1 ? `
            <span class="modal-gallery-counter" id="modal-gallery-counter">1 / ${galleryImages.length}</span>
            <button class="modal-gallery-nav nav-prev" onclick="navModalGallery(-1)" aria-label="Gambar Sebelumnya">‹</button>
            <button class="modal-gallery-nav nav-next" onclick="navModalGallery(1)" aria-label="Gambar Berikutnya">›</button>
          ` : ''}
        </div>
        ${galleryImages.length > 1 ? `
          <div class="modal-thumb-strip" style="grid-template-columns: repeat(${Math.min(galleryImages.length, 6)}, 1fr);">
            ${thumbStrip}
          </div>
        ` : ''}
      </div>

      <!-- PROJECT HEADER -->
      <div class="modal-article-header">
        <h2 class="modal-project-title">${project.title}</h2>
      </div>

      <!-- INFO GRID -->
      <div class="modal-info-grid" style="${!project.year ? 'grid-template-columns: repeat(2, 1fr);' : ''}">
        <div class="modal-info-item">
          <span class="modal-info-label">Peran / Role</span>
          <span class="modal-info-val">${details.role || 'Mechanical / CAD Engineer'}</span>
        </div>
        <div class="modal-info-item">
          <span class="modal-info-label">Kategori / Topik</span>
          <span class="modal-info-val">${project.tag || 'Teknik Manufaktur'}</span>
        </div>
        ${project.year ? `
          <div class="modal-info-item">
            <span class="modal-info-label">Tahun</span>
            <span class="modal-info-val">${project.year}</span>
          </div>
        ` : ''}
      </div>

      <!-- TOOLS & EQUIPMENT -->
      <h4 class="modal-section-title">🔧 Software, Tools &amp; Equipment</h4>
      <div class="modal-tools-chips">
        ${(details.tools || []).map(t => `<span class="modal-tool-pill">${t}</span>`).join('')}
      </div>

      ${details.skills && details.skills.length > 0 ? `
        <!-- SKILLS & KOMPETENSI -->
        <h4 class="modal-section-title" style="margin-top: 18px;">🎯 Skills &amp; Kompetensi</h4>
        <div class="modal-tools-chips">
          ${details.skills.map(s => `<span class="modal-tool-pill" style="background:#E2E8F0; color:#0F172A; font-weight:700;">${s}</span>`).join('')}
        </div>
      ` : ''}

      <!-- DESCRIPTION -->
      <h4 class="modal-section-title">📝 Ringkasan &amp; Metodologi Rekayasa</h4>
      <p class="modal-description-text">${details.fullDescription || project.shortDesc}</p>



      ${details.assignmentSections ? `
        <h4 class="modal-section-title" style="margin-top: 26px;">📑 Fokus &amp; Struktur Pengerjaan Assignment</h4>
        <div class="modal-structured-sections">
          <div class="modal-section-box">
            <div class="modal-section-box-header">
              <span class="modal-section-box-badge">BAGIAN 1</span>
              <span class="modal-section-box-title">📌 Latar Belakang</span>
            </div>
            <p class="modal-section-box-text">${details.assignmentSections.latarBelakang}</p>
          </div>
          <div class="modal-section-box">
            <div class="modal-section-box-header">
              <span class="modal-section-box-badge">BAGIAN 2</span>
              <span class="modal-section-box-title">⚠️ Pendefinisian Masalah</span>
            </div>
            <p class="modal-section-box-text">${details.assignmentSections.pendefinisianMasalah}</p>
          </div>
          <div class="modal-section-box">
            <div class="modal-section-box-header">
              <span class="modal-section-box-badge">BAGIAN 3</span>
              <span class="modal-section-box-title">📊 Hasil dan Analisis Simulasi</span>
            </div>
            <p class="modal-section-box-text">${details.assignmentSections.hasilDanAnalisis}</p>
          </div>
          <div class="modal-section-box">
            <div class="modal-section-box-header">
              <span class="modal-section-box-badge">BAGIAN 4</span>
              <span class="modal-section-box-title">💡 Kesimpulan</span>
            </div>
            <p class="modal-section-box-text">${details.assignmentSections.kesimpulan}</p>
          </div>
        </div>
      ` : ''}

      ${details.capstoneSections ? `
        <h4 class="modal-section-title" style="margin-top: 26px;">🏆 Fokus &amp; Struktur Pengerjaan Capstone Project</h4>
        <div class="modal-structured-sections">
          <div class="modal-section-box">
            <div class="modal-section-box-header">
              <span class="modal-section-box-badge">1</span>
              <span class="modal-section-box-title">📌 Project Background and Description</span>
            </div>
            <p class="modal-section-box-text">${details.capstoneSections.projectBackground}</p>
          </div>
          <div class="modal-section-box">
            <div class="modal-section-box-header">
              <span class="modal-section-box-badge">2</span>
              <span class="modal-section-box-title">⚠️ Problem Statement</span>
            </div>
            <p class="modal-section-box-text">${details.capstoneSections.problemStatement}</p>
          </div>
          <div class="modal-section-box">
            <div class="modal-section-box-header">
              <span class="modal-section-box-badge">3</span>
              <span class="modal-section-box-title">🎯 Objective</span>
            </div>
            <p class="modal-section-box-text">${details.capstoneSections.objective}</p>
          </div>
          <div class="modal-section-box">
            <div class="modal-section-box-header">
              <span class="modal-section-box-badge">4</span>
              <span class="modal-section-box-title">⚙️ Model Description</span>
            </div>
            <p class="modal-section-box-text">${details.capstoneSections.modelDescription}</p>
          </div>
          <div class="modal-section-box">
            <div class="modal-section-box-header">
              <span class="modal-section-box-badge">5</span>
              <span class="modal-section-box-title">📊 Simulation Results</span>
            </div>
            <p class="modal-section-box-text">${details.capstoneSections.simulationResults}</p>
          </div>
          <div class="modal-section-box">
            <div class="modal-section-box-header">
              <span class="modal-section-box-badge">6</span>
              <span class="modal-section-box-title">💬 Discussion</span>
            </div>
            <p class="modal-section-box-text">${details.capstoneSections.discussion}</p>
          </div>
          <div class="modal-section-box">
            <div class="modal-section-box-header">
              <span class="modal-section-box-badge">7</span>
              <span class="modal-section-box-title">💡 Conclusion</span>
            </div>
            <p class="modal-section-box-text">${details.capstoneSections.conclusion}</p>
          </div>
        </div>
      ` : ''}

      ${details.results && details.results.length > 0 ? `
        <h4 class="modal-section-title" style="margin-top: 26px;">🏆 Hasil &amp; Pencapaian Utama</h4>
        <ul class="modal-results-list">
          ${details.results.map(res => `<li>${res}</li>`).join('')}
        </ul>
      ` : ''}
    `;
  }

  if (modalFooter) {
    modalFooter.innerHTML = '';
    modalFooter.style.display = 'none';
  }

  openModal();
}

// Helper: set modal hero image by index
function setModalGalleryImage(index) {
  if (!currentModalGallery || currentModalGallery.length === 0) return;
  if (index < 0) index = currentModalGallery.length - 1;
  if (index >= currentModalGallery.length) index = 0;
  
  currentModalGalleryIndex = index;
  const src = currentModalGallery[index];
  
  const heroImg = document.getElementById('modal-hero-img');
  if (heroImg) {
    heroImg.style.opacity = '0';
    setTimeout(() => {
      heroImg.src = src;
      heroImg.style.opacity = '1';
    }, 120);
  }

  const counter = document.getElementById('modal-gallery-counter');
  if (counter) {
    counter.textContent = `${index + 1} / ${currentModalGallery.length}`;
  }

  // Mark active thumbnail
  const thumbItems = document.querySelectorAll('.modal-thumb-item');
  thumbItems.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function navModalGallery(direction) {
  setModalGalleryImage(currentModalGalleryIndex + direction);
}


// 2. Buka Modal Pengalaman — Studi Independen & Magang
function openExperienceModal(expId, type) {
  let exp = null;

  if (type === 'stupen') {
    exp = portfolioData.independentStudies.find(s => s.id === expId);
  } else if (type === 'internship') {
    exp = portfolioData.internships.find(i => i.id === expId);
  }

  if (!exp) return;

  const categoryBadge = document.getElementById('modal-category-badge');
  const modalBody = document.getElementById('modal-body-content');
  const modalFooter = document.getElementById('modal-footer-content');

  if (categoryBadge) {
    categoryBadge.textContent = exp.category || 'PENGALAMAN INDUSTRI';
  }

  // === STUDI INDEPENDEN MODAL ===
  if (type === 'stupen') {
    if (modalBody) {
      modalBody.innerHTML = `
        <div style="margin-bottom: 24px;">
          <h2 class="modal-project-title" style="font-size: 1.5rem; margin-bottom: 8px;">
            ${exp.program}
          </h2>
          <div style="font-size: 1.05rem; font-weight: 700; color: #1E293B; margin-bottom: 12px; font-family: var(--font-display);">
            ${exp.role}
          </div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 16px;">
            <span style="font-size: 0.78rem; font-weight: 700; font-family: var(--font-mono); background: #F1F5F9; border: 1px solid #CBD5E1; padding: 4px 10px;">
              📅 ${exp.period}
            </span>
            <span style="font-size: 0.78rem; font-weight: 700; font-family: var(--font-mono); background: #F1F5F9; border: 1px solid #CBD5E1; padding: 4px 10px;">
              📍 ${exp.location}
            </span>
          </div>
          <p class="modal-description-text">${exp.summary}</p>
        </div>

        <!-- DAFTAR SUB-PROYEK (ASSIGNMENT 1-6 & CAPSTONE PROJECT) -->
        <div class="modal-subprojects-container">
          <div class="subprojects-header-box">
            <span class="subprojects-box-badge">ASSIGNMENT &amp; CAPSTONE</span>
          </div>

          <div class="subprojects-grid-2col">
            ${exp.projects.map((proj, pIdx) => {
              const isLast = pIdx === exp.projects.length - 1;
              const cardClass = isLast ? 'subproject-card subproject-card-full-span' : 'subproject-card';
              const cardStyle = isLast ? 'grid-column: 1 / -1; display: grid; grid-template-columns: 340px 1fr;' : '';
              return `
                <div class="${cardClass}" style="${cardStyle}" onclick="openProjectModal('${proj.id}', '${type}', { id: '${exp.id}', type: '${type}', title: '${(exp.program).replace(/'/g, "\\'")}' })">
                  <div class="subproject-thumb-wrap">
                    <img src="${proj.image}" alt="${proj.title}" style="max-width: 100%; max-height: 100%; object-fit: contain; margin: auto; display: block; padding: 4px; box-sizing: border-box;" />
                  </div>
                  <div class="subproject-body">
                    <span style="font-size: 0.7rem; font-weight: 700; font-family: var(--font-mono); background: #F1F5F9; border: 1px solid #E2E8F0; padding: 2px 7px; display: inline-block; margin-bottom: 6px;">${proj.tag}</span>
                    <h4 class="subproject-title">${proj.title}</h4>
                    <p class="subproject-desc">${proj.shortDesc}</p>
                    <div style="margin-top: 10px; font-size: 0.8rem; font-weight: 700; font-family: var(--font-mono); color: #0F172A; display: flex; align-items: center; gap: 4px;">
                      Buka Rincian Proyek <span>→</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }
  }

  // === MAGANG KERJA MODAL ===
  else if (type === 'internship') {
    const tools = exp.toolsGrouped || {};
    const allCategories = exp.categories || [];

    const categoriesHtml = allCategories.map(cat => {
      const isOdd = cat.projects.length % 2 !== 0;
      const projectsHtml = cat.projects.map((proj, pIdx) => {
        const isLastOdd = isOdd && pIdx === cat.projects.length - 1;
        const cardStyle = isLastOdd ? 'grid-column: 1 / -1; display: grid; grid-template-columns: 340px 1fr;' : '';
        return `
          <div class="subproject-card" style="${cardStyle}" onclick="openProjectModal('${proj.id}', 'internship', { id: '${exp.id}', type: 'internship', title: '${exp.company.replace(/'/g, "\\'")}' })">
            <div class="subproject-thumb-wrap">
              <img src="${proj.image}" alt="${proj.title}" style="max-width: 100%; max-height: 100%; object-fit: contain; margin: auto; display: block; padding: 4px; box-sizing: border-box;" />
            </div>
            <div class="subproject-body">
              <span style="font-size: 0.7rem; font-weight: 700; font-family: var(--font-mono); background: #F1F5F9; border: 1px solid #E2E8F0; padding: 2px 7px; display: inline-block; margin-bottom: 6px;">${proj.tag}</span>
              <h4 class="subproject-title">${proj.title}</h4>
              <p class="subproject-desc">${proj.shortDesc}</p>
              <div style="margin-top: 10px; font-size: 0.8rem; font-weight: 700; font-family: var(--font-mono); color: #0F172A;">Buka Rincian Proyek →</div>
            </div>
          </div>
        `;
      }).join('');

      return `
        <div style="margin-bottom: 32px;">
          <div class="proj-category-banner ${cat.theme || ''}" style="margin-bottom: 16px;">
            <h2 class="proj-category-title" style="font-size: 1.1rem;">${cat.label}</h2>
            <p class="proj-category-desc" style="font-size: 0.85rem;">${cat.desc}</p>
          </div>
          <div class="subprojects-grid-2col">${projectsHtml}</div>
        </div>
      `;
    }).join('');

    if (modalBody) {
      modalBody.innerHTML = `
        <!-- Header Info -->
        <div style="margin-bottom: 22px;">
          <h2 class="modal-project-title" style="font-size: 1.45rem; margin-bottom: 6px;">${exp.company}</h2>
          <div style="font-size: 1rem; font-weight: 700; color: #1E293B; margin-bottom: 12px; font-family: var(--font-display);">
            ${exp.position} — ${exp.department}
          </div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 14px;">
            <span style="font-size: 0.78rem; font-weight: 700; font-family: var(--font-mono); background: #F1F5F9; border: 1px solid #CBD5E1; padding: 4px 10px;">📅 ${exp.period}</span>
            <span style="font-size: 0.78rem; font-weight: 700; font-family: var(--font-mono); background: #F1F5F9; border: 1px solid #CBD5E1; padding: 4px 10px;">📍 ${exp.location}</span>
          </div>
          <!-- Main Responsibility -->
          <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #0F172A; padding: 12px 16px; margin-bottom: 14px;">
            <span style="font-size: 0.7rem; font-weight: 800; font-family: var(--font-mono); letter-spacing: 1px; color: #64748B;">MAIN RESPONSIBILITY</span>
            <p style="margin: 6px 0 0; font-size: 0.9rem; color: #1E293B; line-height: 1.55;">${exp.mainResponsibility}</p>
          </div>
          <p class="modal-description-text">${exp.description}</p>
        </div>

        <!-- Tools Used -->
        <h4 class="modal-section-title">🔧 Tools & Software Stack</h4>
        <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 22px;">
          ${Object.entries(tools).map(([key, arr]) => `
            <div style="display: flex; align-items: flex-start; gap: 8px; flex-wrap: wrap;">
              <span style="font-size: 0.7rem; font-weight: 800; font-family: var(--font-mono); background: #0F172A; color: #fff; padding: 3px 8px; white-space: nowrap;">${key.toUpperCase()}</span>
              ${arr.map(t => `<span class="modal-tool-pill">${t}</span>`).join('')}
            </div>
          `).join('')}
        </div>

        <!-- Skills -->
        <h4 class="modal-section-title">🎯 Skills</h4>
        <div class="modal-tools-chips" style="margin-bottom: 28px;">
          ${(exp.skills || []).map(s => `<span class="modal-tool-pill">${s}</span>`).join('')}
        </div>

        <!-- Project Categories -->
        <div class="modal-subprojects-container">
          <div class="subprojects-header-box">
            <span class="subprojects-box-badge">PROYEK YANG DIKERJAKAN (${exp.categories.reduce((s, c) => s + c.projects.length, 0)}) — 4 KATEGORI</span>
          </div>
          ${categoriesHtml}
        </div>
      `;
    }
  }

  if (modalFooter) {
    modalFooter.innerHTML = '';
    modalFooter.style.display = 'none';
  }

  openModal();
}

// 3. Buka Modal Detail Riwayat Akademik, Asisten Lab, Volunteer & Kepanitiaan (dengan Dokumentasi / Sertifikat)
function openEducationModal(eduId) {
  const edu = portfolioData.education.find(e => e.id === eduId) || portfolioData.education[0];
  if (!edu) return;

  const categoryBadge = document.getElementById('modal-category-badge');
  const modalBody = document.getElementById('modal-body-content');
  const modalFooter = document.getElementById('modal-footer-content');

  if (categoryBadge) {
    categoryBadge.textContent = 'RIWAYAT AKADEMIK & PENGALAMAN KAMPUS';
  }

  const activities = (edu.details && edu.details.activities) || [];

  if (modalBody) {
    modalBody.innerHTML = `
      <div style="margin-bottom: 24px;">
        <h2 class="modal-project-title" style="font-size: 1.5rem; margin-bottom: 8px;">${edu.degree}</h2>
        <div style="font-size: 1.05rem; font-weight: 700; color: #0F172A; font-family: var(--font-display); margin-bottom: 12px;">
          ${edu.institution}
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 16px;">
          <span style="font-size: 0.78rem; font-weight: 700; font-family: var(--font-mono); background: #F1F5F9; border: 1px solid #E2E8F0; color: #0F172A; padding: 4px 10px;">
            🎓 IPK: ${edu.gpa}
          </span>
          <span style="font-size: 0.78rem; font-weight: 700; font-family: var(--font-mono); background: #F1F5F9; border: 1px solid #E2E8F0; color: #475569; padding: 4px 10px;">
            📅 ${edu.period}
          </span>
        </div>
        <p class="modal-description-text">${edu.description}</p>
      </div>

      <h4 class="modal-section-title">🔬 Fokus Keahlian &amp; Rekayasa Manufaktur</h4>
      <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #0F172A; padding: 16px; margin-bottom: 26px;">
        <strong style="display: block; font-family: var(--font-display); font-size: 1.05rem; color: #0F172A; margin-bottom: 6px;">
          ${edu.details.thesisTitle}
        </strong>
        <p style="font-size: 0.9rem; color: #475569; line-height: 1.6;">
          Kompetensi mendalam dalam perancangan produk terintegrasi CAD/CAM, proses pemesinan dan CNC, perancangan jig dan fixture, metrologi presisi, otomasi industri, perancangan sistem manufaktur, serta manajemen kualitas dan perbaikan proses.
        </p>
      </div>

      <h4 class="modal-section-title">👥 Pengalaman Kepanitiaan &amp; Organisasi Kampus (Beserta Sertifikat / Dokumentasi)</h4>
      <div class="edu-modal-activities-list">
        ${activities.map(act => `
          <div class="edu-modal-activity-card">
            ${act.image ? `
              <div class="edu-modal-act-img-wrap" onclick="window.open('${act.image}', '_blank')">
                <img src="${act.image}" alt="${act.role}" class="edu-modal-act-img" />
                <span class="edu-modal-act-zoom-badge">🔍 Klik untuk Full Dokumen</span>
              </div>
            ` : ''}
            <div class="edu-modal-act-info">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap; gap: 6px;">
                <span class="edu-modal-act-tag">${act.category}</span>
                <span class="edu-modal-act-period">${act.period}</span>
              </div>
              <h5 class="edu-modal-act-role">${act.role}</h5>
              <p class="edu-modal-act-desc">${act.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <h4 class="modal-section-title" style="margin-top: 26px;">🏆 Sorotan Prestasi &amp; Portofolio Akademik</h4>
      <ul class="modal-results-list">
        ${edu.highlights.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  }

  if (modalFooter) {
    modalFooter.innerHTML = '';
    modalFooter.style.display = 'none';
  }

  openModal();
}

// 4. Buka Modal Sertifikat (Preview Gambar Dokumen / PDF)
function openCertificateModal(certId) {
  const cert = portfolioData.certificates.find(c => c.id === certId);
  if (!cert) return;

  const categoryBadge = document.getElementById('modal-category-badge');
  const modalBody = document.getElementById('modal-body-content');
  const modalFooter = document.getElementById('modal-footer-content');

  if (categoryBadge) {
    categoryBadge.textContent = (cert.details && cert.details.category) || 'SERTIFIKAT KEAHLIAN';
  }

  if (modalBody) {
    modalBody.innerHTML = `
      <div class="modal-cert-viewer-box" style="margin-bottom: 24px; border: 1px solid #E2E8F0; background: #F8FAFC; text-align: center; padding: 16px;">
        <img src="${cert.image}" alt="${cert.title}" style="max-height: 380px; width: auto; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.06);" />
      </div>

      <h2 class="modal-project-title" style="font-size: 1.45rem;">${cert.title}</h2>

      <div class="modal-info-grid" style="${!cert.credentialId ? 'grid-template-columns: repeat(2, 1fr);' : ''}">
        <div class="modal-info-item">
          <span class="modal-info-label">Lembaga Penerbit</span>
          <span class="modal-info-val">${cert.issuer}</span>
        </div>
        <div class="modal-info-item">
          <span class="modal-info-label">Tahun Penerbitan</span>
          <span class="modal-info-val">${cert.date}</span>
        </div>
        ${cert.credentialId ? `
          <div class="modal-info-item">
            <span class="modal-info-label">Nomor Kredensial</span>
            <span class="modal-info-val" style="font-family: var(--font-mono); font-size: 0.8rem;">${cert.credentialId}</span>
          </div>
        ` : ''}
      </div>

      <h4 class="modal-section-title">📄 Deskripsi &amp; Standar Kompetensi</h4>
      <p class="modal-description-text">
        ${cert.details ? cert.details.description : 'Sertifikat kompetensi terverifikasi yang mengesahkan keahlian teknis di bidang rekayasa manufaktur.'}
      </p>

      <h4 class="modal-section-title">🎯 Bidang Keahlian Teruji</h4>
      <div class="modal-tools-chips">
        ${cert.skills.map(s => `<span class="modal-tool-pill">${s}</span>`).join('')}
      </div>

      ${cert.details && cert.details.highlights ? `
        <h4 class="modal-section-title">✓ Capaian Kompetensi Khusus</h4>
        <ul class="modal-results-list">
          ${cert.details.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      ` : ''}
    `;
  }

  if (modalFooter) {
    modalFooter.innerHTML = `
      <a href="${cert.image}" download="${cert.title}.svg" class="btn-primary" style="font-size: 0.82rem; padding: 10px 18px; margin: 0 auto; text-align: center;">
        Unduh Dokumen Sertifikat
      </a>
    `;
    modalFooter.style.display = 'flex';
  }

  openModal();
}
