/**
 * ORRTYL Energie — QA Feedback Widget (vanilla JS)
 * Ported from React FeedbackWidget. Drop <script src="/feedback-widget.js"></script> on any page.
 */
(function () {
  'use strict';
  if (window.__feedbackWidgetLoaded) return;
  window.__feedbackWidgetLoaded = true;

  // ============ CONFIG ============
  const TYPES = [
    { key: 'bug', label: 'Bug', icon: 'bug', color: '#EF4444' },
    { key: 'design', label: 'Design', icon: 'paintbrush', color: '#8B5CF6' },
    { key: 'i18n', label: 'Traduction', icon: 'languages', color: '#F59E0B' },
    { key: 'feature', label: 'Fonctionnalite', icon: 'lightbulb', color: '#1B7A6E' },
    { key: 'other', label: 'Autre', icon: 'circle', color: '#6B7280' },
  ];
  const ICONS = {
    bug: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M6 13H2"/><path d="M3 21c0-2.1 1.7-3.9 3.8-4"/><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"/><path d="M22 13h-4"/><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"/></svg>',
    paintbrush: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"/><path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"/><path d="M14.5 17.5 4.5 15"/></svg>',
    languages: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>',
    lightbulb: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    circle: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>',
    crosshair: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="6"/><line x1="12" x2="12" y1="18" y2="22"/></svg>',
    pointer: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/></svg>',
    x: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>',
    plus: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M7.5 8.25h9m-9 3H12M3 9.75A5.25 5.25 0 0 1 8.25 4.5h7.5A5.25 5.25 0 0 1 21 9.75v4.5a5.25 5.25 0 0 1-5.25 5.25H6.75L3 21.75V9.75Z"/><line x1="12" y1="8" x2="12" y2="16" style="display:none"/></svg>',
    download: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
    copy: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
    check: '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>',
    trash: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  };

  // ============ STATE ============
  let annotations = loadAnnotations();
  let picking = false;
  let panelOpen = false;
  let hoveredEl = null;
  let currentAnnotation = null;

  function loadAnnotations() {
    try { return JSON.parse(localStorage.getItem('orrtyl_feedback') || '[]'); } catch { return []; }
  }
  function saveAnnotations() {
    localStorage.setItem('orrtyl_feedback', JSON.stringify(annotations));
    updateBadge();
    renderList();
    renderMarkers();
  }

  // ============ HELPERS ============
  function getSelector(el) {
    if (el.id) return '#' + el.id;
    const parts = [];
    let cur = el;
    while (cur && cur !== document.body && parts.length < 4) {
      let s = cur.tagName.toLowerCase();
      if (cur.className && typeof cur.className === 'string') {
        const cls = cur.className.split(' ').find(c => !c.startsWith('_') && c.length < 30 && c.length > 0);
        if (cls) s += '.' + cls;
      }
      const parent = cur.parentElement;
      if (parent) {
        const sibs = Array.from(parent.children).filter(c => c.tagName === cur.tagName);
        if (sibs.length > 1) s += ':nth-of-type(' + (sibs.indexOf(cur) + 1) + ')';
      }
      parts.unshift(s);
      cur = cur.parentElement;
    }
    return parts.join(' > ');
  }
  function truncate(str, max) {
    if (!str) return '';
    const c = str.replace(/\s+/g, ' ').trim();
    return c.length > max ? c.slice(0, max) + '...' : c;
  }
  function typeConfig(key) { return TYPES.find(t => t.key === key) || TYPES[4]; }
  function el(tag, attrs, children) {
    const e = document.createElement(tag);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'style' && typeof v === 'object') Object.assign(e.style, v);
      else if (k === 'onclick' || k === 'onsubmit' || k === 'onfocus' || k === 'onblur' || k === 'oninput') e[k] = v;
      else if (k === 'innerHTML') e.innerHTML = v;
      else e.setAttribute(k, v);
    });
    if (children) {
      if (typeof children === 'string') e.textContent = children;
      else if (Array.isArray(children)) children.forEach(c => { if (c) e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
      else e.appendChild(children);
    }
    return e;
  }

  // ============ DOM CREATION ============
  const container = el('div', { 'data-feedback-widget': '', style: { position: 'fixed', bottom: '20px', left: '20px', zIndex: '99997', fontFamily: 'system-ui,-apple-system,sans-serif' } });
  const highlightOverlay = el('div', { style: { position: 'fixed', pointerEvents: 'none', zIndex: '99998', border: '2px solid #1B7A6E', backgroundColor: 'rgba(27,122,110,0.1)', borderRadius: '4px', display: 'none', transition: 'all 0.08s ease' } });
  const highlightLabel = el('div', { style: { position: 'absolute', top: '-24px', left: '0', background: '#1B7A6E', color: 'white', fontSize: '11px', padding: '2px 6px', borderRadius: '3px', whiteSpace: 'nowrap' } });
  highlightOverlay.appendChild(highlightLabel);
  const pickBanner = el('div', { style: { position: 'fixed', top: '0', left: '0', right: '0', background: '#1B7A6E', color: 'white', textAlign: 'center', padding: '10px', fontSize: '14px', fontWeight: '600', zIndex: '99999', display: 'none', alignItems: 'center', justifyContent: 'center', gap: '8px' } });
  pickBanner.innerHTML = ICONS.crosshair + ' Cliquez sur un element pour l\'annoter &middot; ESC pour annuler <button id="fb-cancel-pick" style="margin-left:16px;background:rgba(255,255,255,.2);border:none;color:white;padding:4px 12px;border-radius:4px;cursor:pointer;font-size:13px">Annuler</button>';
  const markersContainer = el('div', { id: 'fb-markers', 'data-feedback-widget': '', style: { position: 'absolute', top: '0', left: '0', pointerEvents: 'none', zIndex: '9990' } });

  // ---- PANEL ----
  const panel = el('div', { style: { position: 'absolute', bottom: '60px', left: '0', width: '380px', maxHeight: '70vh', background: 'white', borderRadius: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.18)', border: '1px solid #E5E7EB', display: 'none', flexDirection: 'column', overflow: 'hidden' } });
  // Panel header
  const panelHeader = el('div', { style: { padding: '14px 16px', borderBottom: '1px solid #E5E7EB', background: '#141414', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' } });
  const panelTitle = el('div');
  panelTitle.innerHTML = '<h3 style="margin:0;font-size:15px;font-weight:700">QA Feedback</h3><p id="fb-count-label" style="margin:2px 0 0;font-size:12px;opacity:.7">0 annotations</p>';
  const panelClose = el('button', { style: { background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '4px' }, innerHTML: ICONS.x, onclick: () => togglePanel() });
  panelHeader.appendChild(panelTitle);
  panelHeader.appendChild(panelClose);
  panel.appendChild(panelHeader);
  // Pick button
  const pickRow = el('div', { style: { padding: '12px 16px', borderBottom: '1px solid #E5E7EB', display: 'flex', gap: '8px' } });
  const pickBtn = el('button', { style: { flex: '1', padding: '10px', background: '#1B7A6E', color: 'white', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }, onclick: () => startPicking() });
  pickBtn.innerHTML = ICONS.pointer + ' Selectionner un element';
  pickRow.appendChild(pickBtn);
  panel.appendChild(pickRow);
  // List container
  const listContainer = el('div', { id: 'fb-list', style: { flex: '1', overflowY: 'auto', padding: '8px', maxHeight: '40vh' } });
  panel.appendChild(listContainer);
  // Export footer
  const exportFooter = el('div', { id: 'fb-export', style: { padding: '12px 16px', borderTop: '1px solid #E5E7EB', display: 'none', gap: '8px' } });
  const copyBtn = el('button', { id: 'fb-copy-btn', style: { flex: '1', padding: '8px', background: '#141414', color: 'white', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }, onclick: () => copyJSON() });
  copyBtn.innerHTML = ICONS.copy + ' Copier JSON';
  const dlBtn = el('button', { style: { flex: '1', padding: '8px', background: '#10B981', color: 'white', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }, onclick: () => exportJSON() });
  dlBtn.innerHTML = ICONS.download + ' Exporter';
  exportFooter.appendChild(copyBtn);
  exportFooter.appendChild(dlBtn);
  panel.appendChild(exportFooter);

  container.appendChild(panel);

  // ---- FAB BUTTON ----
  const fab = el('button', { id: 'fb-fab', style: { width: '52px', height: '52px', borderRadius: '50%', background: '#1B7A6E', color: 'white', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', position: 'relative' }, onclick: () => togglePanel() });
  fab.innerHTML = ICONS.plus;
  const badge = el('span', { id: 'fb-badge', style: { position: 'absolute', top: '-4px', right: '-4px', width: '20px', height: '20px', borderRadius: '50%', background: '#EF4444', color: 'white', fontSize: '11px', fontWeight: '700', display: 'none', alignItems: 'center', justifyContent: 'center' } });
  fab.appendChild(badge);
  container.appendChild(fab);

  // ---- MODAL OVERLAY ----
  const modalOverlay = el('div', { id: 'fb-modal', 'data-feedback-widget': '', style: { position: 'fixed', inset: '0', background: 'rgba(0,0,0,0.5)', zIndex: '99999', display: 'none', alignItems: 'center', justifyContent: 'center', padding: '20px' } });

  // ============ MOUNT ============
  document.addEventListener('DOMContentLoaded', mount);
  if (document.readyState !== 'loading') mount();

  function mount() {
    document.body.appendChild(highlightOverlay);
    document.body.appendChild(pickBanner);
    document.body.appendChild(markersContainer);
    document.body.appendChild(modalOverlay);
    document.body.appendChild(container);
    document.getElementById('fb-cancel-pick').onclick = () => stopPicking();
    updateBadge();
    renderList();
    renderMarkers();
  }

  // ============ PANEL ============
  function togglePanel() {
    panelOpen = !panelOpen;
    panel.style.display = panelOpen ? 'flex' : 'none';
    fab.style.background = panelOpen ? '#141414' : '#1B7A6E';
    fab.innerHTML = panelOpen ? ('<span style="display:flex;align-items:center;justify-content:center">' + ICONS.x.replace('14', '22').replace('14', '22') + '</span>') : ICONS.plus;
    if (!panelOpen) fab.appendChild(badge);
    updateBadge();
    renderList();
  }

  function updateBadge() {
    const n = annotations.length;
    document.getElementById('fb-count-label') && (document.getElementById('fb-count-label').textContent = n + ' annotation' + (n !== 1 ? 's' : ''));
    badge.style.display = (!panelOpen && n > 0) ? 'flex' : 'none';
    badge.textContent = n;
    exportFooter.style.display = n > 0 ? 'flex' : 'none';
  }

  // ============ PICK MODE ============
  function startPicking() {
    picking = true;
    pickBanner.style.display = 'flex';
    document.body.style.cursor = 'crosshair';
    document.addEventListener('mousemove', onPickMove, true);
    document.addEventListener('click', onPickClick, true);
    document.addEventListener('keydown', onPickKey);
  }
  function stopPicking() {
    picking = false;
    pickBanner.style.display = 'none';
    highlightOverlay.style.display = 'none';
    document.body.style.cursor = '';
    hoveredEl = null;
    document.removeEventListener('mousemove', onPickMove, true);
    document.removeEventListener('click', onPickClick, true);
    document.removeEventListener('keydown', onPickKey);
  }
  function onPickMove(e) {
    const t = e.target;
    if (t.closest('[data-feedback-widget]')) { highlightOverlay.style.display = 'none'; return; }
    hoveredEl = t;
    const r = t.getBoundingClientRect();
    Object.assign(highlightOverlay.style, { display: 'block', top: r.top + 'px', left: r.left + 'px', width: r.width + 'px', height: r.height + 'px' });
    highlightLabel.textContent = t.tagName.toLowerCase() + (t.className && typeof t.className === 'string' ? '.' + t.className.split(' ')[0].slice(0, 20) : '');
  }
  function onPickClick(e) {
    const t = e.target;
    if (t.closest('[data-feedback-widget]')) return;
    e.preventDefault();
    e.stopPropagation();
    const r = t.getBoundingClientRect();
    currentAnnotation = {
      selector: getSelector(t),
      elementTag: t.tagName.toLowerCase(),
      elementText: truncate(t.textContent || '', 80),
      page: window.location.pathname,
      viewport: window.innerWidth + 'x' + window.innerHeight,
      rect: { top: r.top + window.scrollY, left: r.left + window.scrollX, width: r.width, height: r.height },
    };
    stopPicking();
    openAnnotationForm();
  }
  function onPickKey(e) { if (e.key === 'Escape') stopPicking(); }

  // ============ ANNOTATION FORM ============
  function openAnnotationForm() {
    let selectedType = 'bug';
    const form = el('form', { style: { background: 'white', borderRadius: '12px', width: '420px', maxWidth: '95vw', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', overflow: 'hidden' }, onsubmit: (e) => { e.preventDefault(); submitForm(); } });
    // Header
    const hdr = el('div', { style: { padding: '16px 20px', background: '#141414', color: 'white' } });
    const hdrRow = el('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } });
    hdrRow.appendChild(el('h3', { style: { margin: '0', fontSize: '15px', fontWeight: '700' } }, 'Nouvelle annotation'));
    const closeBtn = el('button', { type: 'button', style: { background: 'none', border: 'none', color: 'white', cursor: 'pointer' }, innerHTML: ICONS.x, onclick: closeForm });
    hdrRow.appendChild(closeBtn);
    hdr.appendChild(hdrRow);
    const meta = el('div', { style: { marginTop: '8px', fontSize: '12px', opacity: '.7' } });
    meta.innerHTML = '<code style="background:rgba(255,255,255,.15);padding:2px 6px;border-radius:3px">' + (currentAnnotation.elementTag || '') + '</code>' + (currentAnnotation.elementText ? ' <span style="margin-left:8px">"' + truncate(currentAnnotation.elementText, 40) + '"</span>' : '');
    hdr.appendChild(meta);
    form.appendChild(hdr);

    const body = el('div', { style: { padding: '20px' } });
    // Type buttons
    const typeLabel = el('label', { style: { fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' } }, 'Type');
    body.appendChild(typeLabel);
    const typeRow = el('div', { style: { display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' } });
    TYPES.forEach(t => {
      const btn = el('button', {
        type: 'button',
        'data-type': t.key,
        style: {
          padding: '6px 12px', borderRadius: '6px',
          border: '2px solid ' + (t.key === 'bug' ? t.color : '#E5E7EB'),
          background: t.key === 'bug' ? t.color + '15' : 'white',
          color: t.key === 'bug' ? t.color : '#6B7280',
          fontSize: '12px', fontWeight: t.key === 'bug' ? '600' : '400',
          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', transition: 'all .15s',
        },
        onclick: () => {
          selectedType = t.key;
          typeRow.querySelectorAll('button').forEach(b => {
            const tk = b.getAttribute('data-type');
            const tc = typeConfig(tk);
            const sel = tk === t.key;
            b.style.border = '2px solid ' + (sel ? tc.color : '#E5E7EB');
            b.style.background = sel ? tc.color + '15' : 'white';
            b.style.color = sel ? tc.color : '#6B7280';
            b.style.fontWeight = sel ? '600' : '400';
          });
        }
      });
      btn.innerHTML = ICONS[t.icon] + ' ' + t.label;
      typeRow.appendChild(btn);
    });
    body.appendChild(typeRow);

    // Comment
    const cmtLabel = el('label', { style: { fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '8px', display: 'block' } }, 'Commentaire');
    body.appendChild(cmtLabel);
    const textarea = el('textarea', {
      id: 'fb-comment', rows: '3',
      placeholder: 'Decrivez le probleme ou la suggestion...',
      style: { width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '13px', resize: 'vertical', outline: 'none', fontFamily: 'inherit', lineHeight: '1.5', boxSizing: 'border-box', marginBottom: '16px', color: '#1F2937', backgroundColor: '#ffffff' },
      onfocus: function () { this.style.borderColor = '#1B7A6E'; },
      onblur: function () { this.style.borderColor = '#D1D5DB'; },
    });
    body.appendChild(textarea);

    // Meta
    const metaInfo = el('div', { style: { padding: '8px 10px', background: '#F3F4F6', borderRadius: '6px', fontSize: '11px', color: '#6B7280', marginBottom: '16px' } });
    metaInfo.innerHTML = 'Page: ' + currentAnnotation.page + '<br>Viewport: ' + currentAnnotation.viewport + '<br>Selecteur: <code>' + currentAnnotation.selector + '</code>';
    body.appendChild(metaInfo);

    // Buttons
    const btns = el('div', { style: { display: 'flex', gap: '8px' } });
    btns.appendChild(el('button', { type: 'button', style: { flex: '1', padding: '10px', background: 'white', color: '#374151', border: '1px solid #D1D5DB', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }, onclick: closeForm }, 'Annuler'));
    const submitBtn = el('button', { type: 'submit', id: 'fb-submit', style: { flex: '1', padding: '10px', background: '#D1D5DB', color: 'white', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'not-allowed' } }, 'Ajouter');
    btns.appendChild(submitBtn);
    body.appendChild(btns);
    form.appendChild(body);
    modalOverlay.innerHTML = '';
    modalOverlay.appendChild(form);
    modalOverlay.style.display = 'flex';
    setTimeout(() => textarea.focus(), 100);

    // Enable/disable submit
    textarea.oninput = () => {
      const has = textarea.value.trim().length > 0;
      submitBtn.style.background = has ? '#1B7A6E' : '#D1D5DB';
      submitBtn.style.cursor = has ? 'pointer' : 'not-allowed';
    };

    function submitForm() {
      const comment = textarea.value.trim();
      if (!comment) return;
      annotations.push({
        id: 'fb_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
        type: selectedType,
        selector: currentAnnotation.selector || '',
        elementTag: currentAnnotation.elementTag || '',
        elementText: currentAnnotation.elementText || '',
        comment,
        page: currentAnnotation.page || window.location.pathname,
        viewport: currentAnnotation.viewport || (window.innerWidth + 'x' + window.innerHeight),
        timestamp: new Date().toISOString(),
        rect: currentAnnotation.rect,
      });
      saveAnnotations();
      closeForm();
    }
  }

  function closeForm() {
    modalOverlay.style.display = 'none';
    currentAnnotation = null;
  }

  // ============ RENDER LIST ============
  function renderList() {
    const lc = document.getElementById('fb-list');
    if (!lc) return;
    lc.innerHTML = '';
    if (annotations.length === 0) {
      lc.innerHTML = '<div style="text-align:center;padding:24px 16px;color:#9CA3AF"><p style="font-size:13px;margin:0">Aucune annotation</p><p style="font-size:12px;margin:4px 0 0">Cliquez "Selectionner un element" pour commencer</p></div>';
      return;
    }
    // Header
    const hdr = el('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 8px', marginBottom: '4px' } });
    hdr.appendChild(el('span', { style: { fontSize: '12px', color: '#6B7280', fontWeight: '600' } }, 'Annotations (' + annotations.length + ')'));
    const clearBtn = el('button', { style: { background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '3px' }, onclick: () => { annotations = []; saveAnnotations(); } });
    clearBtn.innerHTML = ICONS.trash + ' Tout effacer';
    hdr.appendChild(clearBtn);
    lc.appendChild(hdr);

    annotations.forEach((ann, i) => {
      const tc = typeConfig(ann.type);
      const card = el('div', { style: { padding: '10px 12px', margin: '4px 0', background: '#F9FAFB', borderRadius: '8px', borderLeft: '3px solid ' + tc.color, fontSize: '12px' } });
      const top = el('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' } });
      const left = el('div', { style: { display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' } });
      left.innerHTML = '<span style="background:' + tc.color + ';color:white;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0">' + (i + 1) + '</span>' + ICONS[tc.icon] + '<span style="font-weight:600;color:' + tc.color + ';text-transform:uppercase;font-size:10px;letter-spacing:.5px">' + tc.label + '</span>';
      top.appendChild(left);
      const delBtn = el('button', { style: { background: 'none', border: 'none', cursor: 'pointer', color: '#D1D5DB', padding: '2px' }, innerHTML: ICONS.x, onclick: () => { annotations = annotations.filter(a => a.id !== ann.id); saveAnnotations(); } });
      top.appendChild(delBtn);
      card.appendChild(top);
      card.appendChild(el('p', { style: { margin: '4px 0', color: '#374151', lineHeight: '1.4' } }, ann.comment));
      const info = el('div', { style: { color: '#9CA3AF', fontSize: '11px', marginTop: '6px' } });
      info.innerHTML = '<code style="background:#E5E7EB;padding:1px 4px;border-radius:3px;font-size:10px">' + ann.elementTag + '</code>' + (ann.elementText ? ' <span>"' + truncate(ann.elementText, 30) + '"</span>' : '') + '<br>' + ann.page + ' &middot; ' + ann.viewport;
      card.appendChild(info);
      lc.appendChild(card);
    });
  }

  // ============ RENDER MARKERS ============
  function renderMarkers() {
    const mc = document.getElementById('fb-markers');
    if (!mc) return;
    mc.innerHTML = '';
    annotations.filter(a => a.page === window.location.pathname && a.rect).forEach((ann, i) => {
      const tc = typeConfig(ann.type);
      const m = el('div', { style: { position: 'absolute', top: (ann.rect.top - 4) + 'px', left: (ann.rect.left - 4) + 'px', width: (ann.rect.width + 8) + 'px', height: (ann.rect.height + 8) + 'px', border: '2px dashed ' + tc.color, borderRadius: '6px', pointerEvents: 'none' } });
      const num = el('div', { style: { position: 'absolute', top: '-12px', right: '-8px', width: '22px', height: '22px', borderRadius: '50%', background: tc.color, color: 'white', fontSize: '11px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' } }, String(i + 1));
      m.appendChild(num);
      mc.appendChild(m);
    });
  }

  // ============ EXPORT ============
  function exportJSON() {
    const data = { project: 'ORRTYL Energie CRM', page: window.location.pathname, exportedAt: new Date().toISOString(), totalAnnotations: annotations.length, annotations };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'orrtyl_feedback_' + new Date().toISOString().slice(0, 10) + '.json';
    a.click();
    URL.revokeObjectURL(a.href);
  }
  function copyJSON() {
    const data = { project: 'ORRTYL Energie CRM', page: window.location.pathname, exportedAt: new Date().toISOString(), totalAnnotations: annotations.length, annotations };
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    const btn = document.getElementById('fb-copy-btn');
    if (btn) { btn.innerHTML = ICONS.check + ' Copie !'; setTimeout(() => { btn.innerHTML = ICONS.copy + ' Copier JSON'; }, 2000); }
  }
})();
// v2
