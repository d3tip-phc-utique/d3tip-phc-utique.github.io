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

// Sous-menu D3IA : ouverture de la liste déroulante (Comités) par la flèche,
// fermeture par un clic ailleurs, la touche Échap ou le choix d'un lien.
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('.d3ia-sous-menu__item--deroulant'));
  if (!items.length) return;

  function fermer(sauf) {
    items.forEach(function (item) {
      if (item === sauf) return;
      item.classList.remove('is-open');
      item.querySelector('.d3ia-sous-menu__bouton').setAttribute('aria-expanded', 'false');
    });
  }

  items.forEach(function (item) {
    var bouton = item.querySelector('.d3ia-sous-menu__bouton');
    bouton.addEventListener('click', function (e) {
      e.stopPropagation();
      var ouvrir = !item.classList.contains('is-open');
      fermer(item);
      item.classList.toggle('is-open', ouvrir);
      bouton.setAttribute('aria-expanded', ouvrir ? 'true' : 'false');
    });
    item.querySelectorAll('.d3ia-sous-menu__sous a').forEach(function (lien) {
      lien.addEventListener('click', function () { fermer(); });
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.d3ia-sous-menu__item--deroulant')) fermer();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var ouvert = document.querySelector('.d3ia-sous-menu__item--deroulant.is-open');
    if (ouvert) { fermer(); ouvert.querySelector('.d3ia-sous-menu__bouton').focus(); }
  });
})();
