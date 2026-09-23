---
layout: page
title: "Team"
lang: en
dir: ltr
key: team
permalink: /en/team/
---
<style>
  /* Main Container */
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

  /* Tree Structure */
  .org-tree {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Vertical Connector Line */
  .org-connector-v {
    width: 2px;
    height: 25px;
    background-color: #cbd5e1;
    margin: 0 auto;
  }

  /* Lead / Coordinator Card */
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

  /* Member Groups Grid */
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

  /* Individual Cards */
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

  /* Avatars with Initials */
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

  /* Info Details */
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

  /* Role Badges */
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

  <!-- ==================== FRENCH TEAM ==================== -->
  <div class="org-team-section">
    <h2 class="org-team-title">French Team</h2>

    <div class="org-tree">
      <!-- Level 1: Coordination -->
      <div class="org-card-lead">
        <div class="org-avatar avatar-lead">LZ</div>
        <div class="org-info">
          <span class="org-badge badge-lead">Coordinator · Assoc. Prof.</span>
          <h3 class="org-name">Lichao ZHU</h3>
          <div class="org-institution">Paris Cité University (France)</div>
          <div class="org-skills"><strong>Skills:</strong> Phraseology & NLP</div>
        </div>
      </div>

      <!-- Vertical Connector Line -->
      <div class="org-connector-v"></div>

      <!-- Level 2: Member Groups -->
      <div class="org-groups-grid">
        
        <!-- Professors Group -->
        <div class="org-group-box">
          <div class="org-group-header">Professors (PR)</div>
          
          <div class="org-card">
            <div class="org-avatar avatar-pr">VB</div>
            <div class="org-info">
              <span class="org-badge badge-pr">Prof.</span>
              <div class="org-name">Valentina BISCONTI</div>
              <div class="org-institution">Univ. of Picardy Jules Verne</div>
              <div class="org-skills">Metalinguistics & linguistic theory</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">JG</div>
            <div class="org-info">
              <span class="org-badge badge-pr">Prof.</span>
              <div class="org-name">Jan GOES</div>
              <div class="org-institution">University of Artois</div>
              <div class="org-skills">Adjectives & adjectival constructions</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">SP</div>
            <div class="org-info">
              <span class="org-badge badge-pr">Prof.</span>
              <div class="org-name">Stéphane PATIN</div>
              <div class="org-institution">Paris Cité University</div>
              <div class="org-skills">Digital discourse analysis, textometry</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">MP</div>
            <div class="org-info">
              <span class="org-badge badge-pr">Prof.</span>
              <div class="org-name">Mojca PECMAN</div>
              <div class="org-institution">Paris Cité University</div>
              <div class="org-skills">Phraseology & terminology</div>
            </div>
          </div>
        </div>

        <!-- Associate Professors Group -->
        <div class="org-group-box">
          <div class="org-group-header">Associate Professors (MCF)</div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">PB</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">Assoc. Prof. (HDR)</span>
              <div class="org-name">Pierre-André BUVET</div>
              <div class="org-institution">Sorbonne Paris Nord Univ.</div>
              <div class="org-skills">Computational linguistics</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">LM</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">Assoc. Prof.</span>
              <div class="org-name">Luis MENESES-LERIN</div>
              <div class="org-institution">University of Artois</div>
              <div class="org-skills">Phraseology & corpus linguistics</div>
            </div>
          </div>
        </div>

        <!-- Engineering, Postdoc & PhD Group -->
        <div class="org-group-box">
          <div class="org-group-header">Engineering, Postdoc & PhD</div>

          <div class="org-card">
            <div class="org-avatar avatar-tech">BB</div>
            <div class="org-info">
              <span class="org-badge badge-tech">Research Eng.</span>
              <div class="org-name">Brice BRICAUD</div>
              <div class="org-institution">Paris Cité University</div>
              <div class="org-skills">Web dev & database management</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">IM</div>
            <div class="org-info">
              <span class="org-badge badge-doc">Postdoc</span>
              <div class="org-name">Imen MIZOURI</div>
              <div class="org-institution">Paris Cité University</div>
              <div class="org-skills">Phraseology & corpus linguistics</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">IB</div>
            <div class="org-info">
              <span class="org-badge badge-doc">PhD Student</span>
              <div class="org-name">Intissar BOUGHALMI</div>
              <div class="org-institution">Paris Cité Univ. & Univ. of Manouba</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


  <!-- ==================== TUNISIAN TEAM ==================== -->
  <div class="org-team-section">
    <h2 class="org-team-title">Tunisian Team</h2>

    <div class="org-tree">
      <!-- Level 1: Coordination -->
      <div class="org-card-lead">
        <div class="org-avatar avatar-lead">SM</div>
        <div class="org-info">
          <span class="org-badge badge-lead">Coordinator · Assoc. Prof.</span>
          <h3 class="org-name">Soumaya MEJRI</h3>
          <div class="org-institution">ESSECT, University of Tunis (Tunisia)</div>
          <div class="org-skills"><strong>Skills:</strong> Management sciences, phraseology</div>
        </div>
      </div>

      <!-- Vertical Connector Line -->
      <div class="org-connector-v"></div>

      <!-- Level 2: Member Groups -->
      <div class="org-groups-grid">
        
        <!-- Professors & HDR Group -->
        <div class="org-group-box">
          <div class="org-group-header">Professors & Assoc. Prof. (HDR)</div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">AB</div>
            <div class="org-info">
              <span class="org-badge badge-pr">Prof.</span>
              <div class="org-name">Anissa BEN HASSINE</div>
              <div class="org-institution">ESSECT, University of Tunis</div>
              <div class="org-skills">Public management & administration</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">TB</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">Assoc. Prof. (HDR)</span>
              <div class="org-name">Thouraya BEN AMOR</div>
              <div class="org-institution">University of Manouba</div>
              <div class="org-skills">Phraseology & unfreezing</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">LO</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">Assoc. Prof. (HDR)</span>
              <div class="org-name">Lassaad OUESLATI</div>
              <div class="org-institution">University of Tunis</div>
              <div class="org-skills">Adverbial constructions</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">AZ</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">Assoc. Prof. (HDR)</span>
              <div class="org-name">Anissa ZRIGUE</div>
              <div class="org-institution">University of Kairouan</div>
              <div class="org-skills">Didactics</div>
            </div>
          </div>
        </div>

        <!-- Associate Professors Group -->
        <div class="org-group-box">
          <div class="org-group-header">Associate Professors (MCF)</div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">MB</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">Assoc. Prof.</span>
              <div class="org-name">Monia BOUALI</div>
              <div class="org-institution">University of Gafsa</div>
              <div class="org-skills">Modality</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">DL</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">Assoc. Prof.</span>
              <div class="org-name">Dhouha LAJMI</div>
              <div class="org-institution">University of Sfax</div>
              <div class="org-skills">Verbal constructions</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">BO</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">Assoc. Prof.</span>
              <div class="org-name">Béchir OUERHANI</div>
              <div class="org-institution">University of Sousse</div>
              <div class="org-skills">Arabic linguistics & phraseology</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">DT</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">Assoc. Prof.</span>
              <div class="org-name">Dorra TALBI</div>
              <div class="org-institution">ESSECT, University of Tunis</div>
              <div class="org-skills">Corporate finance</div>
            </div>
          </div>
        </div>

        <!-- Postdoc & PhD Students Group -->
        <div class="org-group-box">
          <div class="org-group-header">Postdoc & PhD Students</div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">AJ</div>
            <div class="org-info">
              <span class="org-badge badge-doc">Postdoc</span>
              <div class="org-name">Ali JAOUEDI</div>
              <div class="org-institution">University of Sousse</div>
              <div class="org-skills">Metaterminology</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">RA</div>
            <div class="org-info">
              <span class="org-badge badge-doc">PhD Student</span>
              <div class="org-name">Rania ALOUI</div>
              <div class="org-institution">ESSECT, University of Tunis</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">IB</div>
            <div class="org-info">
              <span class="org-badge badge-doc">PhD Student</span>
              <div class="org-name">Intissar BOUGHALMI</div>
              <div class="org-institution">Paris Cité Univ. & Univ. of Manouba</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">HH</div>
            <div class="org-info">
              <span class="org-badge badge-doc">PhD Student</span>
              <div class="org-name">Haythem HAMDI</div>
              <div class="org-institution">Univ. of Sousse & Autonomous Univ. of Barcelona</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">SK</div>
            <div class="org-info">
              <span class="org-badge badge-doc">PhD Student</span>
              <div class="org-name">Safa KRIFI</div>
              <div class="org-institution">University of Gafsa</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">NY</div>
            <div class="org-info">
              <span class="org-badge badge-doc">PhD Student</span>
              <div class="org-name">Nour El Houda YEFERNI</div>
              <div class="org-institution">ESSECT, University of Tunis</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</div>
