---
layout: page
title: "الهيكل التنظيمي"
lang: ar
dir: rtl
key: team_rubrique_1
parent: team
permalink: /ar/team/organisation_chart/
---


<style>
  /* Main Container */
  .org-wrapper {
    font-family: "Noto Sans Arabic", "Segoe UI", Tahoma, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif;
    margin: 30px 0;
    direction: rtl;
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
    font-size: 0.95em;
    font-weight: 700;
    letter-spacing: normal; /* pas d'espacement : il casse les ligatures arabes */
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
    direction: ltr;
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
    unicode-bidi: isolate; /* noms en caractères latins dans un texte RTL */
  }
  .org-institution {
    font-size: 0.82em;
    color: #64748b;
    margin-bottom: 4px;
    line-height: 1.5; /* les noms d'établissements arabes sont longs : retour à la ligne autorisé */
  }
  .org-skills {
    font-size: 0.82em;
    color: #334155;
    background: #f1f5f9;
    padding: 3px 6px;
    border-radius: 4px;
    display: inline-block;
    line-height: 1.5;
  }

  /* Role Badges */
  .org-badge {
    display: inline-block;
    font-size: 0.75em;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 10px;
    margin-bottom: 3px;
  }
  .badge-lead { background: #ccfbf1; color: #0f766e; }
  .badge-pr { background: #e0e7ff; color: #3730a3; }
  .badge-mcf { background: #e0f2fe; color: #075985; }
  .badge-doc { background: #fef3c7; color: #92400e; }
  .badge-tech { background: #f1f5f9; color: #334155; }
</style>

<div class="org-wrapper" dir="rtl">

  <!-- ==================== FRENCH TEAM ==================== -->
  <div class="org-team-section">
    <h2 class="org-team-title">الفريق الفرنسي</h2>

    <div class="org-tree">
      <!-- Level 1: Coordination -->
      <div class="org-card-lead">
        <div class="org-avatar avatar-lead">LZ</div>
        <div class="org-info">
          <span class="org-badge badge-lead">منسّق · أستاذ محاضر</span>
          <h3 class="org-name">Lichao ZHU</h3>
          <div class="org-institution">جامعة باريس سيتي (فرنسا)</div>
          <div class="org-skills"><strong>الاختصاصات:</strong> علم العبارات المسكوكة والمعالجة الآلية للغات</div>
        </div>
      </div>

      <!-- Vertical Connector Line -->
      <div class="org-connector-v"></div>

      <!-- Level 2: Member Groups -->
      <div class="org-groups-grid">
        
        <!-- Professors Group -->
        <div class="org-group-box">
          <div class="org-group-header">أساتذة التعليم العالي</div>
          
          <div class="org-card">
            <div class="org-avatar avatar-pr">VB</div>
            <div class="org-info">
              <span class="org-badge badge-pr">أستاذة تعليم عالٍ</span>
              <div class="org-name">Valentina BISCONTI</div>
              <div class="org-institution">جامعة بيكاردي جول فيرن</div>
              <div class="org-skills">ما وراء اللغة والنظرية اللسانية</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">JG</div>
            <div class="org-info">
              <span class="org-badge badge-pr">أستاذ تعليم عالٍ</span>
              <div class="org-name">Jan GOES</div>
              <div class="org-institution">جامعة أرتوا</div>
              <div class="org-skills">الصفة والتراكيب الوصفية</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">SP</div>
            <div class="org-info">
              <span class="org-badge badge-pr">أستاذ تعليم عالٍ</span>
              <div class="org-name">Stéphane PATIN</div>
              <div class="org-institution">جامعة باريس سيتي</div>
              <div class="org-skills">تحليل الخطاب الرقمي، القياس النصّي</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">MP</div>
            <div class="org-info">
              <span class="org-badge badge-pr">أستاذة تعليم عالٍ</span>
              <div class="org-name">Mojca PECMAN</div>
              <div class="org-institution">جامعة باريس سيتي</div>
              <div class="org-skills">علم العبارات المسكوكة وعلم المصطلح</div>
            </div>
          </div>
        </div>

        <!-- Associate Professors Group -->
        <div class="org-group-box">
          <div class="org-group-header">الأساتذة المحاضرون</div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">PB</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">أستاذ محاضر (تأهيل جامعي)</span>
              <div class="org-name">Pierre-André BUVET</div>
              <div class="org-institution">جامعة السوربون باريس الشمالية</div>
              <div class="org-skills">اللسانيات الحاسوبية</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">LM</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">أستاذ محاضر</span>
              <div class="org-name">Luis MENESES-LERIN</div>
              <div class="org-institution">جامعة أرتوا</div>
              <div class="org-skills">علم العبارات المسكوكة ولسانيات المدوّنات</div>
            </div>
          </div>
        </div>

        <!-- Engineering, Postdoc & PhD Group -->
        <div class="org-group-box">
          <div class="org-group-header">الهندسة وما بعد الدكتوراه والدكتوراه</div>

          <div class="org-card">
            <div class="org-avatar avatar-tech">BB</div>
            <div class="org-info">
              <span class="org-badge badge-tech">مهندس دراسات</span>
              <div class="org-name">Brice BRICAUD</div>
              <div class="org-institution">جامعة باريس سيتي</div>
              <div class="org-skills">تطوير الواب والتصرّف في قواعد البيانات</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">IM</div>
            <div class="org-info">
              <span class="org-badge badge-doc">باحثة ما بعد الدكتوراه</span>
              <div class="org-name">Imen MIZOURI</div>
              <div class="org-institution">جامعة باريس سيتي</div>
              <div class="org-skills">علم العبارات المسكوكة ولسانيات المدوّنات</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">IB</div>
            <div class="org-info">
              <span class="org-badge badge-doc">مترشّحة للدكتوراه</span>
              <div class="org-name">Intissar BOUGHALMI</div>
              <div class="org-institution">جامعة باريس سيتي وجامعة منوبة</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>


  <!-- ==================== TUNISIAN TEAM ==================== -->
  <div class="org-team-section">
    <h2 class="org-team-title">الفريق التونسي</h2>

    <div class="org-tree">
      <!-- Level 1: Coordination -->
      <div class="org-card-lead">
        <div class="org-avatar avatar-lead">SM</div>
        <div class="org-info">
          <span class="org-badge badge-lead">منسّقة · أستاذة محاضرة</span>
          <h3 class="org-name">Soumaya MEJRI</h3>
          <div class="org-institution">المدرسة العليا للعلوم الاقتصادية والتجارية بتونس، جامعة تونس (تونس)</div>
          <div class="org-skills"><strong>الاختصاصات:</strong> علوم التصرّف، علم العبارات المسكوكة</div>
        </div>
      </div>

      <!-- Vertical Connector Line -->
      <div class="org-connector-v"></div>

      <!-- Level 2: Member Groups -->
      <div class="org-groups-grid">
        
        <!-- Professors & HDR Group -->
        <div class="org-group-box">
          <div class="org-group-header">أساتذة التعليم العالي والأساتذة المحاضرون (تأهيل جامعي)</div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">AB</div>
            <div class="org-info">
              <span class="org-badge badge-pr">أستاذة تعليم عالٍ</span>
              <div class="org-name">Anissa BEN HASSINE</div>
              <div class="org-institution">المدرسة العليا للعلوم الاقتصادية والتجارية بتونس، جامعة تونس</div>
              <div class="org-skills">التصرّف العمومي والإدارة</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">TB</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">أستاذة محاضرة (تأهيل جامعي)</span>
              <div class="org-name">Thouraya BEN AMOR</div>
              <div class="org-institution">جامعة منوبة</div>
              <div class="org-skills">علم العبارات المسكوكة وفكّ التسكيك</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">LO</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">أستاذ محاضر (تأهيل جامعي)</span>
              <div class="org-name">Lassaad OUESLATI</div>
              <div class="org-institution">جامعة تونس</div>
              <div class="org-skills">التراكيب الظرفية</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-pr">AZ</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">أستاذة محاضرة (تأهيل جامعي)</span>
              <div class="org-name">Anissa ZRIGUE</div>
              <div class="org-institution">جامعة القيروان</div>
              <div class="org-skills">التعليمية</div>
            </div>
          </div>
        </div>

        <!-- Associate Professors Group -->
        <div class="org-group-box">
          <div class="org-group-header">الأساتذة المحاضرون</div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">MB</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">أستاذة محاضرة</span>
              <div class="org-name">Monia BOUALI</div>
              <div class="org-institution">جامعة قفصة</div>
              <div class="org-skills">الموجِّهات</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">DL</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">أستاذة محاضرة</span>
              <div class="org-name">Dhouha LAJMI</div>
              <div class="org-institution">جامعة صفاقس</div>
              <div class="org-skills">التراكيب الفعلية</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">BO</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">أستاذ محاضر</span>
              <div class="org-name">Béchir OUERHANI</div>
              <div class="org-institution">جامعة سوسة</div>
              <div class="org-skills">اللسانيات العربية وعلم العبارات المسكوكة</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-mcf">DT</div>
            <div class="org-info">
              <span class="org-badge badge-mcf">أستاذة محاضرة</span>
              <div class="org-name">Dorra TALBI</div>
              <div class="org-institution">المدرسة العليا للعلوم الاقتصادية والتجارية بتونس، جامعة تونس</div>
              <div class="org-skills">مالية المؤسسات</div>
            </div>
          </div>
        </div>

        <!-- Postdoc & PhD Students Group -->
        <div class="org-group-box">
          <div class="org-group-header">باحثو ما بعد الدكتوراه وطلبة الدكتوراه</div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">AJ</div>
            <div class="org-info">
              <span class="org-badge badge-doc">باحث ما بعد الدكتوراه</span>
              <div class="org-name">Ali JAOUEDI</div>
              <div class="org-institution">جامعة سوسة</div>
              <div class="org-skills">ما وراء المصطلح</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">RA</div>
            <div class="org-info">
              <span class="org-badge badge-doc">طالبة دكتوراه</span>
              <div class="org-name">Rania ALOUI</div>
              <div class="org-institution">المدرسة العليا للعلوم الاقتصادية والتجارية بتونس، جامعة تونس</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">IB</div>
            <div class="org-info">
              <span class="org-badge badge-doc">مترشّحة للدكتوراه</span>
              <div class="org-name">Intissar BOUGHALMI</div>
              <div class="org-institution">جامعة باريس سيتي وجامعة منوبة</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">HH</div>
            <div class="org-info">
              <span class="org-badge badge-doc">طالب دكتوراه</span>
              <div class="org-name">Haythem HAMDI</div>
              <div class="org-institution">جامعة سوسة وجامعة برشلونة المستقلّة</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">SK</div>
            <div class="org-info">
              <span class="org-badge badge-doc">طالبة دكتوراه</span>
              <div class="org-name">Safa KRIFI</div>
              <div class="org-institution">جامعة قفصة</div>
            </div>
          </div>

          <div class="org-card">
            <div class="org-avatar avatar-doc">NY</div>
            <div class="org-info">
              <span class="org-badge badge-doc">طالبة دكتوراه</span>
              <div class="org-name">Nour El Houda YEFERNI</div>
              <div class="org-institution">المدرسة العليا للعلوم الاقتصادية والتجارية بتونس، جامعة تونس</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</div>