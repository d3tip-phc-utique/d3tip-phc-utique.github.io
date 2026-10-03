// Onglets du programme : clic et flèches gauche/droite
const onglets = Array.from(document.querySelectorAll('[role="tab"]'));

function activerOnglet(ongletActif) {
  onglets.forEach((onglet) => {
    const estActif = onglet === ongletActif;
    onglet.setAttribute('aria-selected', estActif);
    onglet.tabIndex = estActif ? 0 : -1;
    document.getElementById(onglet.getAttribute('aria-controls')).hidden = !estActif;
  });
  ongletActif.focus();
}

onglets.forEach((onglet, index) => {
  onglet.addEventListener('click', () => activerOnglet(onglet));
  onglet.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') activerOnglet(onglets[(index + 1) % onglets.length]);
    if (event.key === 'ArrowLeft') activerOnglet(onglets[(index - 1 + onglets.length) % onglets.length]);
  });
});
