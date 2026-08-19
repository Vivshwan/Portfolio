// ===== Portfolio Data =====
const skills = [
  { category: 'Programming Languages', items: ['C++', 'Python', 'SQL'] },
  { category: 'AI/ML & Deep Learning', items: ['scikit-learn', 'TensorFlow', 'LSTM', 'RNN', 'CNN', 'OpenCV', 'NLP', 'Time Series'] },
  { category: 'Generative AI & LLMs', items: ['LangChain', 'RAG', 'Multi-Agent Systems', 'OpenAI/GPT', 'Google Gemini', 'Prompt Engineering', 'FAISS', 'ChromaDB'] },
  { category: 'Data Science & Visualization', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'EDA', 'Feature Engineering'] },
  { category: 'Web Frameworks & Deployment', items: ['Flask', 'Django', 'FastAPI', 'React.js', 'Streamlit', 'Render'] },
  { category: 'Databases & Tools', items: ['MySQL', 'GitHub', 'MongoDB', 'AWS (S3, EC2)', 'REST APIs'] }
];

const projects = [
  {
    title: 'Stock Price Forecasting',
    tech: ['Python', 'TensorFlow', 'Streamlit', 'scikit-learn', 'Pandas'],
    date: 'March 2026 – April 2026',
    metrics: [
      { value: '94%', label: 'R² Score' },
      { value: '2.45', label: 'RMSE' },
      { value: '1.87', label: 'MAE' }
    ],
    bullets: [
      'Developed LSTM and SimpleRNN deep learning models to forecast Tesla (TSLA) adjusted-close stock prices using 60-day sliding window sequences.',
      'Engineered a comprehensive preprocessing pipeline including MinMaxScaler normalization, lag-based feature engineering, and train-test split validation.',
      'Achieved 94% R² score with SimpleRNN, outperforming LSTM\'s 91%, across 5,000+ trading day sequences.'
    ],
    github: 'https://github.com/Vivshwan/Stock_Price_Prediction',
    demo: 'https://stockpriceprediction-rodsxciwp6bkbqu3ex3cem.streamlit.app/'
  },
  {
    title: 'Shopper Spectrum',
    tech: ['Python', 'Pandas', 'Seaborn', 'Scikit-learn', 'Streamlit', 'Plotly'],
    date: 'May 2026 – June 2026',
    metrics: [
      { value: '4', label: 'Segments' },
      { value: '90%+', label: 'Similarity' },
      { value: '500K+', label: 'Transactions' }
    ],
    bullets: [
      'Built an end-to-end customer intelligence platform using unsupervised ML to segment e-commerce customers and deliver personalized recommendations.',
      'Engineered RFM analysis pipeline with K-Means clustering, identifying 4 distinct segments: High-Value, Regular, Occasional, and At-Risk.',
      'Implemented Item-based Collaborative Filtering achieving 90%+ similarity accuracy across 5,000+ products and 500,000+ transaction records.'
    ],
    github: 'https://github.com/Vivshwan/Shopper_Spectrum',
    demo: 'https://shopperspectrum-txrwqh2korjorwnawappuro.streamlit.app/'
  }
];

const certifications = [
  { title: 'Microsoft SC-900 — Security, Compliance & Identity', issuer: 'Microsoft', date: 'June 2025', icon: '🛡️', link: 'https://drive.google.com/file/d/1FqLeRtsHOMTQXz63Epzw4mKDxM_SzHWi/view?usp=sharing' },
  { title: 'Applied Machine Learning in Python', issuer: 'Coursera', date: 'December 2025', icon: '🤖', link: 'https://www.coursera.org/account/accomplishments/verify/9VBX45BANQLY' }
];

const achievements = [
  {
    icon: '📄',
    text: 'Co-authored <strong>AGRI-PREDICT: AI-Driven Framework for Crop Price Forecasting using ML & Time-Series Analysis</strong> published in IJIRT.',
    link: 'https://ijirt.org/article?manuscript=195963',
    linkLabel: 'View Publication'
  },
  {
    icon: '⚡',
    text: 'Completed <strong>ServiceNow Virtual Internship</strong> (SmartBridge + AICTE) — 8+ modules including ServiceNow Administration, Agentic AI, Automated Test Framework (ATF), Reports, and CSA Exam Prep.',
    link: 'https://drive.google.com/file/d/1kNgw5O3L49NhpWE_Z_YxM31XjJUcGD5x/view?usp=sharing',
    linkLabel: 'View Certificate'
  }
];

// ===== Render Functions =====
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = skills.map(skill => `
    <div class="skill-card">
      <h3>${skill.category}</h3>
      <div class="skill-tags">
        ${skill.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const track = document.getElementById('projectsGrid');

  // Build one set of cards
  const cardHTML = projects.map((project, i) => `
    <article class="project-card">
      <span class="project-num">0${i + 1}</span>
      <div class="project-header">
        <h3>${project.title}</h3>
        <div class="project-tech">
          ${project.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>
      <p class="project-date">${project.date}</p>
      <div class="project-metrics">
        ${project.metrics.map(m => `
          <div class="project-metric">
            <span class="value">${m.value}</span>
            <span class="label">${m.label}</span>
          </div>
        `).join('')}
      </div>
      <ul class="project-list">
        ${project.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
      <div class="project-links">
        ${project.github ? `<a href="${project.github}" class="project-link project-link--github" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>` : ''}
        ${project.demo && project.demo !== '#' ? `<a href="${project.demo}" class="project-link project-link--demo" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Live Demo
        </a>` : ''}
      </div>
    </article>
  `).join('');

  // Duplicate 4× so the loop never shows a gap regardless of screen width
  track.innerHTML = cardHTML + cardHTML + cardHTML + cardHTML;
}

function renderCertifications() {
  const grid = document.getElementById('certsGrid');
  grid.innerHTML = certifications.map(cert => {
    const inner = `
      <div class="cert-icon">${cert.icon}</div>
      <div class="cert-info">
        <h3>${cert.title}</h3>
        <p class="cert-issuer">${cert.issuer}</p>
        <p class="cert-date">${cert.date}</p>
        ${cert.link ? `<span class="cert-view-link">View Certificate ↗</span>` : ''}
      </div>
    `;
    return cert.link
      ? `<a href="${cert.link}" class="cert-card cert-card--link" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="cert-card">${inner}</div>`;
  }).join('');
}

function renderAchievements() {
  const list = document.getElementById('achievementsList');
  list.innerHTML = achievements.map(a => `
    <div class="achievement-item">
      <div class="achievement-icon">${a.icon}</div>
      <div class="achievement-body">
        <p class="achievement-text">${a.text}</p>
        ${a.link ? `<a href="${a.link}" class="achievement-link" target="_blank" rel="noopener">${a.linkLabel} ↗</a>` : ''}
      </div>
    </div>
  `).join('');
}

// ===== Scroll Reveal Animations =====
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 90);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll(
    '.skill-card, .cert-card, .achievement-item, .timeline-item, .reveal'
  ).forEach(el => observer.observe(el));
}

// ===== Active Nav Link =====
function initActiveNav() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.25, rootMargin: '-80px 0px -50% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}

// ===== Navbar Scroll =====
function initNavbar() {
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ===== Mobile Menu =====
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('active');
    });
  });
}

// ===== Contact Form =====
function initContactForm() {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      note.textContent = 'Please fill in all fields.';
      note.className = 'form-note error';
      return;
    }

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:vivshwantomar17@gmail.com?subject=${subject}&body=${body}`;

    note.textContent = 'Opening your email client...';
    note.className = 'form-note success';
    form.reset();
  });
}

// ===== Hero Typing Effect =====
function initTypingEffect() {
  const el = document.getElementById('heroTitle');
  if (!el) return;

  const roles = [
    'AI/ML Engineer · Full-Stack Developer',
    'Deep Learning Enthusiast',
    'Generative AI Builder',
    'Open to Opportunities'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const current = roles[roleIndex];
    if (!deleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(type, 2200);
        return;
      }
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(type, deleting ? 35 : 75);
  }

  setTimeout(type, 2800);
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderCertifications();
  renderAchievements();

  // Must run after render
  initScrollAnimations();
  initActiveNav();
  initNavbar();
  initMobileMenu();
  initContactForm();
  initTypingEffect();
});
