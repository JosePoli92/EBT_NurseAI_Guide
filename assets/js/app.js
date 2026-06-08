/* ============================================================
   NurseAI Guide — Application Core
   Prototipo de Software (Alta Resolución)
   Técnica: Maqueta Digital Interactiva + Prototipo Software
   ============================================================ */

'use strict';

// ── STATE ──────────────────────────────────────────────────
const state = {
  currentPage: 'dashboard',
  user: {
    name: 'Ana Moreno',
    role: 'Auxiliar de Enfermería',
    area: 'UCI Adultos',
    level: 'Intermedio',
    xp: 2340,
    streak: 14,
    plan: 'Pro'
  },
  notifications: 3,
  offline: false,
  savedTools: new Set(),
  completedTutorials: new Set(['t1', 't3']),
  searchQuery: '',
  compareFilters: { cost: 'todos', idioma: 'todos', integracion: 'todos' }
};

// ── TOOLS CATALOG ──────────────────────────────────────────
const tools = [
  {
    id: 't1', name: 'ChatGPT para Enfermería', icon: '🤖', color: 'teal',
    desc: 'Genera explicaciones clínicas claras, responde dudas de medicación y apoya la documentación clínica.',
    tags: ['Educación', 'Documentación'], seal: 'validated', sealLabel: 'Validado ✓',
    cost: 'Gratuito', lang: 'Español', hce: true, evidence: 4, rating: 4.5, area: 'general'
  },
  {
    id: 't2', name: 'MedAI Assistant', icon: '🩺', color: 'blue',
    desc: 'Asistente de IA especializado en soporte clínico para enfermeros con alertas de interacciones.',
    tags: ['Clínico', 'Seguridad'], seal: 'validated', sealLabel: 'Validado ✓',
    cost: 'Freemium', lang: 'Español', hce: true, evidence: 5, rating: 4.8, area: 'clinico'
  },
  {
    id: 't3', name: 'NurseBot Vitales', icon: '💊', color: 'green',
    desc: 'Monitoreo inteligente de signos vitales con predicción de deterioro y alertas tempranas.',
    tags: ['Monitoreo', 'UCI'], seal: 'validated', sealLabel: 'Validado ✓',
    cost: 'Pago', lang: 'Español', hce: false, evidence: 4, rating: 4.3, area: 'uci'
  },
  {
    id: 't4', name: 'DocuEnferm AI', icon: '📋', color: 'orange',
    desc: 'Automatización de notas de enfermería con IA. Reduce tiempo de documentación en un 60%.',
    tags: ['Documentación', 'Eficiencia'], seal: 'review', sealLabel: 'En Revisión',
    cost: 'Freemium', lang: 'Español', hce: true, evidence: 3, rating: 4.0, area: 'admin'
  },
  {
    id: 't5', name: 'PharmaCheck IA', icon: '💉', color: 'purple',
    desc: 'Verificación de dosis y detección de interacciones medicamentosas con base de datos actualizada.',
    tags: ['Medicación', 'Seguridad'], seal: 'validated', sealLabel: 'Validado ✓',
    cost: 'Gratuito', lang: 'Español', hce: false, evidence: 5, rating: 4.7, area: 'medicacion'
  },
  {
    id: 't6', name: 'PacienteEduca', icon: '🎓', color: 'pink',
    desc: 'Genera materiales educativos personalizados para pacientes en lenguaje simple y comprensible.',
    tags: ['Educación', 'Paciente'], seal: 'basic', sealLabel: 'Básico',
    cost: 'Gratuito', lang: 'Español', hce: false, evidence: 3, rating: 3.9, area: 'educacion'
  }
];

// ── TUTORIALS ──────────────────────────────────────────────
const tutorials = [
  { id: 't1', title: 'Introducción a la IA en Enfermería', icon: '🤖', bg: 'bg1', duration: '4 min', progress: 100, level: 'Básico', area: 'General' },
  { id: 't2', title: 'ChatGPT: Casos Clínicos Reales', icon: '💬', bg: 'bg2', duration: '5 min', progress: 60, level: 'Intermedio', area: 'Documentación' },
  { id: 't3', title: 'Seguridad del Paciente con IA', icon: '🛡️', bg: 'bg3', duration: '3 min', progress: 100, level: 'Básico', area: 'Seguridad' },
  { id: 't4', title: 'Documentación Clínica Automatizada', icon: '📋', bg: 'bg4', duration: '5 min', progress: 30, level: 'Avanzado', area: 'Documentación' },
  { id: 't5', title: 'IA para Control de Medicación', icon: '💊', bg: 'bg5', duration: '4 min', progress: 0, level: 'Intermedio', area: 'Medicación' },
  { id: 't6', title: 'Educación al Paciente con IA', icon: '🎓', bg: 'bg6', duration: '3 min', progress: 0, level: 'Básico', area: 'Educación' }
];

// ── MENÚ MÓVIL ─────────────────────────────────────────────
function toggleMenu() {
  var s = document.getElementById('sidebar');
  var o = document.getElementById('menu-overlay');
  var open = s.classList.contains('open');
  if (open) { closeMenu(); } else { openMenu(); }
}
function openMenu() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('menu-overlay').classList.add('visible');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('menu-overlay').classList.remove('visible');
  document.body.style.overflow = '';
}

// ── NAVIGATION ─────────────────────────────────────────────
function navigate(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const page = document.getElementById('page-' + pageId);
  if (page) page.classList.add('active');

  const navItem = document.querySelector(`.nav-item[data-page="${pageId}"]`);
  if (navItem) navItem.classList.add('active');

  state.currentPage = pageId;
  closeMenu();

  const titles = {
    dashboard: { main: 'Dashboard', sub: 'Tu centro de control de IA en enfermería' },
    recommendations: { main: 'Recomendaciones', sub: 'Herramientas IA seleccionadas para tu perfil' },
    tutorials: { main: 'Tutoriales', sub: 'Aprende a tu ritmo, cuando y donde quieras' },
    comparator: { main: 'Comparador', sub: 'Compara herramientas IA con criterios clínicos' },
    progress: { main: 'Mi Progreso', sub: 'Tu evolución en el mundo de la IA clínica' },
    admin: { main: 'Panel Institucional', sub: 'Administración y seguimiento del personal' },
    subscription: { main: 'Suscripción', sub: 'Gestiona tu plan y acceso premium' }
  };

  const t = titles[pageId];
  if (t) {
    document.getElementById('page-title').textContent = t.main;
    document.getElementById('page-subtitle').textContent = t.sub;
  }

  window.scrollTo(0, 0);
}

// ── RENDER DASHBOARD ───────────────────────────────────────
function renderDashboard() {
  const grid = document.getElementById('dash-tools-grid');
  if (!grid) return;

  const recommended = tools.slice(0, 3);
  grid.innerHTML = recommended.map(tool => renderToolCard(tool)).join('');
  attachSaveListeners();
}

// ── RENDER TOOL CARD ───────────────────────────────────────
function renderToolCard(tool) {
  const sealClass = { validated: 'seal-validated', review: 'seal-review', basic: 'seal-basic' }[tool.seal];
  const saved = state.savedTools.has(tool.id);
  return `
    <div class="tool-card" onclick="openToolModal('${tool.id}')">
      <div class="tool-card-header">
        <div class="tool-card-icon ${tool.color}">${tool.icon}</div>
        <span class="clinical-seal ${sealClass}">🏥 ${tool.sealLabel}</span>
      </div>
      <h3>${tool.name}</h3>
      <p>${tool.desc}</p>
      <div class="tool-card-footer">
        <div class="tool-tags">
          ${tool.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <button class="save-btn ${saved ? 'saved' : ''}" data-id="${tool.id}" onclick="event.stopPropagation(); toggleSave('${tool.id}', this)">
          ${saved ? '🔖' : '📌'}
        </button>
      </div>
    </div>`;
}

// ── RENDER RECOMMENDATIONS ─────────────────────────────────
function renderRecommendations(filter = 'todos') {
  const grid = document.getElementById('rec-grid');
  if (!grid) return;

  const filtered = filter === 'todos' ? tools : tools.filter(t => t.area === filter);
  grid.innerHTML = filtered.map(tool => renderToolCard(tool)).join('');
  attachSaveListeners();
}

// ── RENDER TUTORIALS ───────────────────────────────────────
function renderTutorials(filter = 'todos') {
  const grid = document.getElementById('tutorials-grid');
  if (!grid) return;

  const filtered = filter === 'todos' ? tutorials : tutorials.filter(t => t.area === filter || t.level === filter);

  grid.innerHTML = filtered.map(tut => {
    const done = tut.progress === 100;
    return `
      <div class="tutorial-card" onclick="openTutorialModal('${tut.id}')">
        <div class="tutorial-thumb ${tut.bg}">
          <span style="position:absolute;font-size:48px;opacity:0.3">${tut.icon}</span>
          <div class="play-btn">${done ? '✅' : '▶'}</div>
          <span class="tutorial-duration">⏱ ${tut.duration}</span>
        </div>
        <div class="tutorial-body">
          <div style="display:flex;gap:6px;margin-bottom:8px">
            <span class="tag">${tut.level}</span>
            <span class="tag">${tut.area}</span>
          </div>
          <h3>${tut.title}</h3>
          <div class="tutorial-meta">
            <span style="font-size:11px;color:var(--text-muted)">${tut.progress}% completado</span>
            <div class="progress-mini" style="flex:1;margin:0 10px">
              <div class="bar"><div class="fill" style="width:${tut.progress}%"></div></div>
            </div>
            ${done ? '<span style="color:var(--accent);font-size:12px;font-weight:700">✓ Listo</span>' : `<button class="btn btn-primary btn-sm" onclick="event.stopPropagation();continueTutorial('${tut.id}')">${tut.progress > 0 ? 'Continuar' : 'Iniciar'}</button>`}
          </div>
        </div>
      </div>`;
  }).join('');
}

// ── RENDER COMPARATOR TABLE ────────────────────────────────
function renderComparator() {
  const tbody = document.getElementById('compare-tbody');
  if (!tbody) return;

  let filtered = [...tools];
  const { cost, idioma, integracion } = state.compareFilters;
  if (cost !== 'todos') filtered = filtered.filter(t => t.cost === cost);
  if (integracion !== 'todos') filtered = filtered.filter(t => (integracion === 'si') === t.hce);

  tbody.innerHTML = filtered.map(tool => {
    const stars = Array(5).fill(0).map((_, i) =>
      `<span class="star${i < Math.floor(tool.rating) ? '' : ' empty'}">★</span>`
    ).join('');

    const costClass = { Gratuito: 'chip-green', Freemium: 'chip-blue', Pago: 'chip-orange' }[tool.cost];
    return `
      <tr>
        <td>
          <div style="display:flex;align-items:center;gap:10px">
            <div class="tool-card-icon ${tool.color}" style="width:36px;height:36px;font-size:16px">${tool.icon}</div>
            <div>
              <div style="font-weight:600">${tool.name}</div>
              <div style="font-size:11px;color:var(--text-muted)">${tool.tags.join(' · ')}</div>
            </div>
          </div>
        </td>
        <td><span class="chip ${costClass}">${tool.cost}</span></td>
        <td><div class="rating">${stars}</div><div style="font-size:11px;color:var(--text-muted)">${tool.rating}/5</div></td>
        <td>${tool.lang}</td>
        <td>${tool.hce ? '<span class="chip chip-green">✓ Sí</span>' : '<span style="color:#9ca3af">No</span>'}</td>
        <td>
          <div style="display:flex;gap:3px">
            ${'⬡'.repeat(tool.evidence)}${'⬡'.repeat(5 - tool.evidence).split('').map(() => '<span style="opacity:0.2">⬡</span>').join('')}
          </div>
          <div style="font-size:11px;color:var(--text-muted)">${tool.evidence}/5</div>
        </td>
        <td>
          <button class="btn btn-outline btn-sm" onclick="openToolModal('${tool.id}')">Ver detalle</button>
        </td>
      </tr>`;
  }).join('');
}

// ── TOGGLE SAVE ────────────────────────────────────────────
function toggleSave(id, btn) {
  if (state.savedTools.has(id)) {
    state.savedTools.delete(id);
    btn.textContent = '📌';
    btn.classList.remove('saved');
    showToast('Herramienta removida de favoritos');
  } else {
    state.savedTools.add(id);
    btn.textContent = '🔖';
    btn.classList.add('saved');
    showToast('✓ Herramienta guardada en favoritos');
  }
}

// ── OPEN TOOL MODAL ────────────────────────────────────────
function openToolModal(id) {
  const tool = tools.find(t => t.id === id);
  if (!tool) return;

  const sealClass = { validated: 'seal-validated', review: 'seal-review', basic: 'seal-basic' }[tool.seal];
  const stars = Array(5).fill(0).map((_, i) =>
    `<span class="star${i < Math.floor(tool.rating) ? '' : ' empty'}">★</span>`
  ).join('');

  document.getElementById('modal-body').innerHTML = `
    <div style="text-align:center;margin-bottom:20px">
      <div class="tool-card-icon ${tool.color}" style="width:72px;height:72px;font-size:36px;margin:0 auto 12px">${tool.icon}</div>
      <h2 style="font-size:20px;font-weight:800;color:var(--secondary)">${tool.name}</h2>
      <span class="clinical-seal ${sealClass}" style="display:inline-flex;margin-top:8px">🏥 ${tool.sealLabel}</span>
    </div>
    <p style="color:var(--text-muted);font-size:14px;line-height:1.6;margin-bottom:20px">${tool.desc}</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px">
      <div style="background:var(--bg);border-radius:10px;padding:14px">
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">COSTO</div>
        <div style="font-weight:700">${tool.cost}</div>
      </div>
      <div style="background:var(--bg);border-radius:10px;padding:14px">
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">IDIOMA</div>
        <div style="font-weight:700">${tool.lang}</div>
      </div>
      <div style="background:var(--bg);border-radius:10px;padding:14px">
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">HCE COMPATIBLE</div>
        <div style="font-weight:700">${tool.hce ? '✅ Sí' : '❌ No'}</div>
      </div>
      <div style="background:var(--bg);border-radius:10px;padding:14px">
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">VALORACIÓN</div>
        <div class="rating" style="margin-top:2px">${stars} <span style="font-size:13px;color:var(--text-muted)">(${tool.rating})</span></div>
      </div>
    </div>
    <div style="display:flex;gap:10px">
      <button class="btn btn-primary" style="flex:1" onclick="closeModal();continueLearning('${tool.id}')">🎓 Iniciar Tutorial</button>
      <button class="btn btn-outline" onclick="toggleSave('${tool.id}',this)">📌 Guardar</button>
    </div>`;

  openModal();
}

// ── OPEN TUTORIAL MODAL ────────────────────────────────────
function openTutorialModal(id) {
  const tut = tutorials.find(t => t.id === id);
  if (!tut) return;

  document.getElementById('modal-body').innerHTML = `
    <div class="tutorial-thumb ${tut.bg}" style="border-radius:12px;margin-bottom:20px;height:180px">
      <span style="position:absolute;font-size:64px;opacity:0.3">${tut.icon}</span>
      <div class="play-btn" style="width:64px;height:64px;font-size:24px">▶</div>
      <span class="tutorial-duration">⏱ ${tut.duration}</span>
    </div>
    <h2 style="font-size:18px;font-weight:800;color:var(--secondary);margin-bottom:8px">${tut.title}</h2>
    <div style="display:flex;gap:8px;margin-bottom:16px">
      <span class="tag">${tut.level}</span>
      <span class="tag">${tut.area}</span>
      <span class="tag">⏱ ${tut.duration}</span>
    </div>
    <div style="margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;margin-bottom:6px">
        <span style="font-size:13px;font-weight:600">Progreso del módulo</span>
        <span style="font-size:13px;color:var(--text-muted)">${tut.progress}%</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${tut.progress}%"></div></div>
    </div>
    <div style="background:var(--bg);border-radius:10px;padding:14px;margin-bottom:16px">
      <div style="font-size:13px;font-weight:600;margin-bottom:8px">📚 Contenido del módulo</div>
      <div style="font-size:13px;color:var(--text-muted);line-height:1.7">
        ✅ Conceptos fundamentales<br>
        ${tut.progress >= 50 ? '✅' : '⭕'} Casos de uso clínicos<br>
        ${tut.progress >= 80 ? '✅' : '⭕'} Ejercicio práctico<br>
        ${tut.progress === 100 ? '✅' : '⭕'} Evaluación final
      </div>
    </div>
    <button class="btn btn-primary" style="width:100%" onclick="continueTutorial('${id}');closeModal()">
      ${tut.progress === 0 ? '🚀 Iniciar tutorial' : tut.progress === 100 ? '🔄 Repasar' : '▶ Continuar'}
    </button>`;

  openModal();
}

// ── MODAL HELPERS ──────────────────────────────────────────
function openModal() {
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

// ── TUTORIAL CONTINUE ──────────────────────────────────────
function continueTutorial(id) {
  const tut = tutorials.find(t => t.id === id);
  if (!tut) return;

  if (tut.progress < 100) {
    tut.progress = Math.min(100, tut.progress + 40);
    if (tut.progress === 100) state.completedTutorials.add(id);
    showToast(`✓ Progreso guardado: ${tut.progress}% completado`);
  } else {
    showToast('¡Módulo ya completado! 🎉');
  }
  renderTutorials();
  updateProgressStats();
}

function continueLearning(toolId) {
  navigate('tutorials');
}

// ── PROGRESS STATS UPDATE ──────────────────────────────────
function updateProgressStats() {
  const completed = tutorials.filter(t => t.progress === 100).length;
  const pct = Math.round((completed / tutorials.length) * 100);
  const el = document.getElementById('completed-count');
  if (el) el.textContent = completed;
}

// ── SAVE LISTENERS ─────────────────────────────────────────
function attachSaveListeners() {
  document.querySelectorAll('.save-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSave(btn.dataset.id, btn);
    });
  });
}

// ── SEARCH ─────────────────────────────────────────────────
function handleSearch(query) {
  state.searchQuery = query.toLowerCase();
  if (state.currentPage === 'recommendations') {
    const filtered = tools.filter(t =>
      t.name.toLowerCase().includes(state.searchQuery) ||
      t.tags.some(tag => tag.toLowerCase().includes(state.searchQuery))
    );
    const grid = document.getElementById('rec-grid');
    if (grid) grid.innerHTML = filtered.map(t => renderToolCard(t)).join('');
    attachSaveListeners();
  }
  if (state.currentPage === 'tutorials') {
    const filtered = tutorials.filter(t =>
      t.title.toLowerCase().includes(state.searchQuery) ||
      t.area.toLowerCase().includes(state.searchQuery)
    );
    const grid = document.getElementById('tutorials-grid');
    if (grid) grid.innerHTML = filtered.map(t => {
      const done = t.progress === 100;
      return `<div class="tutorial-card" onclick="openTutorialModal('${t.id}')">
        <div class="tutorial-thumb ${t.bg}">
          <span style="position:absolute;font-size:48px;opacity:0.3">${t.icon}</span>
          <div class="play-btn">${done ? '✅' : '▶'}</div>
          <span class="tutorial-duration">⏱ ${t.duration}</span>
        </div>
        <div class="tutorial-body">
          <h3>${t.title}</h3>
          <div style="display:flex;align-items:center;gap:8px;margin-top:8px">
            <span class="tag">${t.level}</span>
            <button class="btn btn-primary btn-sm">${t.progress > 0 ? 'Continuar' : 'Iniciar'}</button>
          </div>
        </div>
      </div>`;
    }).join('');
  }
}

// ── OFFLINE TOGGLE ─────────────────────────────────────────
function toggleOffline() {
  state.offline = !state.offline;
  const banner = document.getElementById('offline-banner');
  const btn = document.getElementById('offline-btn');
  if (state.offline) {
    banner.style.display = 'flex';
    btn.textContent = '📶 Online';
    showToast('📥 Modo offline activado — contenido descargado disponible');
  } else {
    banner.style.display = 'none';
    btn.textContent = '📥 Offline';
    showToast('✓ Reconectado — progreso sincronizado');
  }
}

// ── TOAST ──────────────────────────────────────────────────
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.cssText = `
      position:fixed;bottom:28px;right:28px;z-index:999;
      background:var(--secondary);color:white;padding:12px 20px;
      border-radius:10px;font-size:13px;font-weight:500;
      box-shadow:0 8px 32px rgba(0,0,0,0.25);
      transform:translateY(60px);transition:transform 0.3s;
      max-width:320px;line-height:1.4;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.transform = 'translateY(0)';
  setTimeout(() => { toast.style.transform = 'translateY(60px)'; }, 3000);
}

// ── EXPORT COMPARATOR ──────────────────────────────────────
function exportComparator() {
  showToast('📊 Exportando comparación en PDF...');
  setTimeout(() => showToast('✓ Comparación exportada correctamente'), 2000);
}

// ── SUBSCRIPTION UPGRADE ───────────────────────────────────
function selectPlan(plan) {
  if (plan === 'free') {
    showToast('Ya estás en el plan gratuito');
    return;
  }
  document.getElementById('modal-body').innerHTML = `
    <div style="text-align:center;padding:20px 0">
      <div style="font-size:48px;margin-bottom:16px">💳</div>
      <h2 style="font-size:20px;font-weight:800;margin-bottom:8px">Activar Plan ${plan === 'pro' ? 'Pro' : 'Institucional'}</h2>
      <p style="color:var(--text-muted);font-size:14px;margin-bottom:24px">Completa tu información de pago para activar el plan</p>
      <div style="text-align:left">
        <div style="margin-bottom:14px">
          <label style="font-size:12px;font-weight:600;color:var(--text-muted);display:block;margin-bottom:4px">NÚMERO DE TARJETA</label>
          <input type="text" placeholder="4242 4242 4242 4242" style="width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;font-size:14px;outline:none">
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px">
          <div>
            <label style="font-size:12px;font-weight:600;color:var(--text-muted);display:block;margin-bottom:4px">VENCIMIENTO</label>
            <input type="text" placeholder="MM/AA" style="width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;font-size:14px;outline:none">
          </div>
          <div>
            <label style="font-size:12px;font-weight:600;color:var(--text-muted);display:block;margin-bottom:4px">CVV</label>
            <input type="text" placeholder="123" style="width:100%;padding:10px 12px;border:1.5px solid var(--border);border-radius:8px;font-size:14px;outline:none">
          </div>
        </div>
        <button class="btn btn-primary" style="width:100%;padding:13px" onclick="confirmPayment('${plan}')">
          🔒 Confirmar pago seguro
        </button>
      </div>
    </div>`;
  openModal();
}

function confirmPayment(plan) {
  closeModal();
  state.user.plan = plan === 'pro' ? 'Pro' : 'Institucional';
  showToast('🎉 ¡Plan activado exitosamente! Bienvenido a NurseAI ' + state.user.plan);
}

// ── ADMIN ASSIGN ROUTE ─────────────────────────────────────
function assignRoute() {
  document.getElementById('modal-body').innerHTML = `
    <h2 style="font-size:18px;font-weight:800;margin-bottom:16px">Asignar ruta de aprendizaje</h2>
    <div style="margin-bottom:14px">
      <label style="font-size:12px;font-weight:600;color:var(--text-muted);display:block;margin-bottom:4px">RUTA</label>
      <select class="filter-select" style="width:100%">
        <option>IA Básica para Enfermería</option>
        <option>Documentación Clínica Digital</option>
        <option>Seguridad del Paciente con IA</option>
        <option>Monitoreo Inteligente UCI</option>
      </select>
    </div>
    <div style="margin-bottom:14px">
      <label style="font-size:12px;font-weight:600;color:var(--text-muted);display:block;margin-bottom:4px">ÁREA / SERVICIO</label>
      <select class="filter-select" style="width:100%">
        <option>Todos los servicios</option>
        <option>UCI Adultos</option>
        <option>Urgencias</option>
        <option>Hospitalización</option>
      </select>
    </div>
    <div style="margin-bottom:20px">
      <label style="font-size:12px;font-weight:600;color:var(--text-muted);display:block;margin-bottom:4px">FECHA LÍMITE</label>
      <input type="date" class="filter-select" style="width:100%">
    </div>
    <button class="btn btn-primary" style="width:100%" onclick="closeModal();showToast('✓ Ruta asignada a 47 auxiliares de enfermería')">
      ✓ Asignar ruta
    </button>`;
  openModal();
}

// ── FILTER TABS ────────────────────────────────────────────
function setFilter(btn, filterVal, renderFn) {
  btn.closest('.filter-tabs').querySelectorAll('button').forEach(b => b.classList.remove('active-tab'));
  btn.classList.add('active-tab');
  renderFn(filterVal);
}

// ── INIT ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  navigate('dashboard');
  renderDashboard();
  renderRecommendations();
  renderTutorials();
  renderComparator();

  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  const searchInput = document.querySelector('.search-bar input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
  }

  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    item.addEventListener('click', () => navigate(item.dataset.page));
  });

  // Animate stats
  setTimeout(() => {
    document.querySelectorAll('.progress-fill').forEach(el => {
      const w = el.style.width;
      el.style.width = '0';
      setTimeout(() => { el.style.width = w; }, 100);
    });
  }, 300);
});
