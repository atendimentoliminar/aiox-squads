/* ON AI Solutions — Mentor Squad Language Toggle */
(function () {
  function apply(lang) {
    document.querySelectorAll('[data-pt]').forEach(function (el) {
      el.innerHTML = lang === 'pt' ? el.getAttribute('data-pt') : el.getAttribute('data-en');
    });
    var btnPt = document.getElementById('btn-pt');
    var btnEn = document.getElementById('btn-en');
    if (btnPt) btnPt.classList.toggle('active', lang === 'pt');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    localStorage.setItem('onai-lang', lang);
  }

  window.setLang = function (lang) { apply(lang); };

  document.addEventListener('DOMContentLoaded', function () {
    apply(localStorage.getItem('onai-lang') || 'pt');
  });
})();
