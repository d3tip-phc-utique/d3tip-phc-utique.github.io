// Onglets du programme D3IA : clic et flèches du clavier (inversées en arabe)
(function () {
  var onglets = Array.prototype.slice.call(document.querySelectorAll('.d3ia [role="tab"]'));
  if (!onglets.length) return;
  var bloc = document.querySelector('.d3ia');
  var rtl = bloc && bloc.getAttribute('dir') === 'rtl';

  function activer(ongletActif) {
    onglets.forEach(function (onglet) {
      var actif = onglet === ongletActif;
      onglet.setAttribute('aria-selected', actif ? 'true' : 'false');
      onglet.tabIndex = actif ? 0 : -1;
      document.getElementById(onglet.getAttribute('aria-controls')).hidden = !actif;
    });
    ongletActif.focus();
  }

  onglets.forEach(function (onglet, i) {
    onglet.addEventListener('click', function () { activer(onglet); });
    onglet.addEventListener('keydown', function (e) {
      var suivant = rtl ? 'ArrowLeft' : 'ArrowRight';
      var precedent = rtl ? 'ArrowRight' : 'ArrowLeft';
      if (e.key === suivant) activer(onglets[(i + 1) % onglets.length]);
      if (e.key === precedent) activer(onglets[(i - 1 + onglets.length) % onglets.length]);
    });
  });
})();
