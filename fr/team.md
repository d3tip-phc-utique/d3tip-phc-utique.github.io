---
layout: page
title: "Équipe"
lang: fr
dir: ltr
key: team
permalink: /fr/team/
---
<style>
  /* Conteneur principal */
  .org-wrapper {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    margin: 30px 0;
  }
  
  .org-team-section {
    margin-bottom: 50px;
  }

  .org-team-title {
    text-align: center;
    font-size: 1.5em;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 25px;
    position: relative;
    padding-bottom: 10px;
  }
  .org-team-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #0d9488, #0284c7);
    border-radius: 2px;
  }

  /* Structure de l'arbre hiérarchique */
  .org-tree {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Ligne de connexion verticale */
  .org-connector-v {
    width: 2px;
    height: 25px;
    background-color: #cbd5e1;
    margin: 0 auto;
  }

  /* Carte du Coordinateur / Leader */
  .org-card-lead {
    background: linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%);
    border: 2px solid #0d9488;
    border-radius: 12px;
    padding: 16px 20px;
    box-shadow: 0 4px 12px rgba(13, 148, 136, 0.12);
    display: flex;
    align-items: center;
    gap: 15px;
    max-width: 520px;
    width: 100%;
  }

  /* Grille des groupes de membres */
  .org-groups-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    gap: 20px;
    width: 100%;
    margin-top: 5px;
  }

  .org-group-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 16px;
  }

  .org-group-header {
    font-size: 0.88em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #475569;
    margin-bottom: 12px;
    padding-bottom: 6px;
    border-bottom: 2px solid #e2e8f0;
  }

  /* Cartes individuelles des membres */
  .org-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 10px 12px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .org-card:last-child {
    margin-bottom: 0;
  }
  .org-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    border-color: #cbd5e1;
  }

  /* Avatars avec initiales */
  .org-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.85em;
    color: #ffffff;
    flex-shrink: 0;
  }
  .avatar-lead { background: linear-gradient(135deg, #0d9488, #0f766e); width: 48px; height: 48px; font-size: 1em; }
  .avatar-pr { background: linear-gradient(135deg, #6366f1, #4f46e5); }
  .avatar-mcf { background: linear-gradient(135deg, #0284c7, #0369a1); }
  .avatar-doc { background: linear-gradient(135deg, #f59e0b, #d97706); }
  .avatar-tech { background: linear-gradient(135deg, #64748b, #475569); }

  /* Informations textuelles */
  .org-info {
    flex-grow: 1;
    min-width: 0;
  }
  .org-name {
    font-size: 0.95em;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 2px 0;
    line-height: 1.2;
  }
  .org-institution {
    font-size: 0.8em;
    color: #64748b;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .org-skills {
    font-size: 0.78em;
    color: #334155;
    background: #f1f5f9;
    padding: 3px 6px;
    border-radius: 4px;
    display: inline-block;
  }

  /* Badges de rôle */
  .org-badge {
    display: inline-block;
    font-size: 0.7em;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 10px;
    text-transform: uppercase;
    margin-bottom: 3px;
  }
  .badge-lead { background: #ccfbf1; color: #0f766e; }
  .badge-pr { background: #e0e7ff; color: #3730a3; }
  .badge-mcf { background: #e0f2fe; color: #075985; }
  .badge-doc { background: #fef3c7; color: #92400e; }
  .badge-tech { background: #f1f5f9; color: #334155; }
</style>

<div class="org-wrapper">

  <!-- ==================== ÉQUIPE FRANÇAISE ==================== -->
  <div class="org-team-section">
    <h2 class="org-team-title">Équipe française</h2>

    <div class="org-tree">
      <!-- Niveau 1 : Coordination -->
      <div class="org-card-lead">
        <div class="org-avatar avatar-lead">LZ</div>
        <div class="org-info">
          <span class="org-badge badge-lead">Coordinateur · MCF</span>
          <h3 class="org-name">Lichao ZHU</h3>
          <div class="org-institution">Université Paris Cité (France)</div>
          <div class="org-skills"><strong>Compétences :</strong> phraséologie et TAL</div>
        </div>
      </div>

      <!-- Ligne de connexion verticale -->
      <div class="org-connector-v"></div>

      <!-- Niveau 2 : Groupes de membres -->
      <div class="org-groups-grid">
        
        <!-- Groupe PR -->
        <div class="org-group-box">
          <div class="org-group-header">Professeurs des Universités (PR)</div>
          
          <div class="org-card">
            <div class="org-avatar avatar-pr">VB</div>
            <div class="org-info">
              <span class="org-badge badge-pr">PR</span>
              <div class="org-name">Valentina BISCONTI</div>
              <div class="org-institution">Univ. de Picardie Jules Verne</div>
              <div class="org-skills">Méta-linguistique & théorie linguistique</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">JG</div>
            <div class="org-info">
              <span class="org-badge badge-pr">PR</span>
              <div class="org-name">Jan GOES</div>
              <div class="org-institution">Université d’Artois</div>
              <div class="org-skills">Adjectifs & constructions adjectivales</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">SP</div>
            <div class="org-info">
              <span class="org-badge badge-pr">PR</span>
              <div class="org-name">Stéphane PATIN</div>
              <div class="org-institution">Université Paris Cité</div>
              <div class="org-skills">Analyse du discours numérique, textométrie</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">MP</div>
            <div class="org-info">
              <span class="org-badge badge-pr">PR</span>
              <div class="org-name">Mojca PECMAN</div>
              <div class="org-institution">Université Paris Cité</div>
              <div class="org-skills">Phraséologie & terminologie</div>
            </div>
          </div>
        </div>

        <!-- Groupe MCF -->
        <div class="org-group-box">
          <div class="org-group-header">Maîtres de Conférences (MCF)</div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">PB</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">MCF HDR</span>
              <div class="org-name">Pierre-André BUVET</div>
              <div class="org-institution">Univ. Sorbonne Paris Nord</div>
              <div class="org-skills">Linguistique computationnelle</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">LM</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">MCF</span>
              <div class="org-name">Luis MENESES-LERIN</div>
              <div class="org-institution">Université d’Artois</div>
              <div class="org-skills">Phraséologie & linguistique de corpus</div>
            </div>
          </div>
        </div>

        <!-- Groupe Recherche & Support -->
        <div class="org-group-box">
          <div class="org-group-header">Ingénierie, Post-Doc & Doctorat</div>

          <div class="org-card">
            <div class="org-avatar avatar-tech">BB</div>
            <div class="org-info">
              <span class="org-badge badge-tech">IGE</span>
              <div class="org-name">Brice BRICAUD</div>
              <div class="org-institution">Université Paris Cité</div>
              <div class="org-skills">Développement Web & BDD</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">IM</div>
            <div class="org-info">
              <span class="org-badge badge-doc">Post-doctorante</span>
              <div class="org-name">Imen MIZOURI</div>
              <div class="org-institution">Université Paris Cité</div>
              <div class="org-skills">Analyse textuelle outillée</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">IB</div>
            <div class="org-info">
              <span class="org-badge badge-doc">Doctorante</span>
              <div class="org-name">Intissar BOUGHALMI</div>
              <div class="org-institution">Univ. Paris Cité & Univ. La Manouba</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


  <!-- ==================== ÉQUIPE TUNISIENNE ==================== -->
  <div class="org-team-section">
    <h2 class="org-team-title">Équipe tunisienne</h2>

    <div class="org-tree">
      <!-- Niveau 1 : Coordination -->
      <div class="org-card-lead">
        <div class="org-avatar avatar-lead">SM</div>
        <div class="org-info">
          <span class="org-badge badge-lead">Coordinatrice · MCF</span>
          <h3 class="org-name">Soumaya MEJRI</h3>
          <div class="org-institution">ESSECT, Université de Tunis (Tunisie)</div>
          <div class="org-skills"><strong>Compétences :</strong> sciences de gestion, phraséologie</div>
        </div>
      </div>

      <!-- Ligne de connexion verticale -->
      <div class="org-connector-v"></div>

      <!-- Niveau 2 : Groupes de membres -->
      <div class="org-groups-grid">
        
        <!-- Groupe PR & HDR -->
        <div class="org-group-box">
          <div class="org-group-header">Professeurs & MCF HDR</div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">AB</div>
            <div class="org-info">
              <span class="org-badge badge-pr">PR</span>
              <div class="org-name">Anissa BEN HASSINE</div>
              <div class="org-institution">ESSECT, Université de Tunis</div>
              <div class="org-skills">Management public & gestion</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">TB</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">MCF HDR</span>
              <div class="org-name">Thouraya BEN AMOR</div>
              <div class="org-institution">Université de la Manouba</div>
              <div class="org-skills">Phraséologie & défigement</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">LO</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">MCF HDR</span>
              <div class="org-name">Lassaad OUESLATI</div>
              <div class="org-institution">Université de Tunis</div>
              <div class="org-skills">Constructions adverbiales</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">AZ</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">MCF HDR</span>
              <div class="org-name">Anissa ZRIGUE</div>
              <div class="org-institution">Université de Kairouan</div>
              <div class="org-skills">Didactique</div>
            </div>
          </div>
        </div>

        <!-- Groupe MCF -->
        <div class="org-group-box">
          <div class="org-group-header">Maîtres de Conférences (MCF)</div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">MB</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">MCF</span>
              <div class="org-name">Monia BOUALI</div>
              <div class="org-institution">Université de Gafsa</div>
              <div class="org-skills">Modalité</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">DL</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">MCF</span>
              <div class="org-name">Dhouha LAJMI</div>
              <div class="org-institution">Université de Sfax</div>
              <div class="org-skills">Constructions verbales</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">BO</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">MCF</span>
              <div class="org-name">Béchir OUERHANI</div>
              <div class="org-institution">Université de Sousse</div>
              <div class="org-skills">Linguistique arabe & phraséologie</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">DT</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">MCF</span>
              <div class="org-name">Dorra TALBI</div>
              <div class="org-institution">ESSECT, Université de Tunis</div>
              <div class="org-skills">Finances d'entreprise</div>
            </div>
          </div>
        </div>

        <!-- Groupe Doctorants & Post-Doc -->
        <div class="org-group-box">
          <div class="org-group-header">Post-Doc & Doctorants</div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">AJ</div>
            <div class="org-info">
              <span class="org-badge badge-doc">Post-doctorant</span>
              <div class="org-name">Ali JAOUEDI</div>
              <div class="org-institution">Université de Sousse</div>
              <div class="org-skills">Méta-terminologie</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">RA</div>
            <div class="org-info">
              <span class="org-badge badge-doc">Doctorante</span>
              <div class="org-name">Rania ALOUI</div>
              <div class="org-institution">ESSECT, Université de Tunis</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">IB</div>
            <div class="org-info">
              <span class="org-badge badge-doc">Doctorante</span>
              <div class="org-name">Intissar BOUGHALMI</div>
              <div class="org-institution">Univ. Paris Cité & Univ. La Manouba</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">HH</div>
            <div class="org-info">
              <span class="org-badge badge-doc">Doctorant</span>
              <div class="org-name">Haythem HAMDI</div>
              <div class="org-institution">Univ. Sousse & Univ. Barcelona</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">SK</div>
            <div class="org-info">
              <span class="org-badge badge-doc">Doctorante</span>
              <div class="org-name">Safa KRIFI</div>
              <div class="org-institution">Université de Gafsa</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">NY</div>
            <div class="org-info">
              <span class="org-badge badge-doc">Doctorante</span>
              <div class="org-name">Nour El Houda YEFERNI</div>
              <div class="org-institution">ESSECT, Université de Tunis</div>
            </div>
          </div>
        </div>

      </div>
    </div>
 


  </div>
</div>
