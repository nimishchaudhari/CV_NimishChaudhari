import React, { useState, useEffect, useRef } from 'react';
import './CVTheme.css';
import './Toolbar.css';

const LinkedInIcon = () => (
  <svg className="cv-contact-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#0A66C2"/><path d="M7.1 8.6c.8 0 1.3-.5 1.3-1.2 0-.7-.5-1.2-1.3-1.2-.8 0-1.3.5-1.3 1.2 0 .7.5 1.2 1.3 1.2zm-1.1 1.5h2.2v7.3H6V10.1zm4.1 0h2.1v1h.1c.3-.6 1-1.2 2-1.2 2.1 0 2.5 1.4 2.5 3.2v4.3h-2.2v-3.8c0-.9-.1-2-1.3-2-1.3 0-1.5 1-1.5 2v3.8h-2.2v-7.3z" fill="#fff"/></svg>
);

const GitHubIcon = () => (
  <svg className="cv-contact-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.81 1.305 3.495.998.108-.776.42-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.042.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.838 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.92.431.372.815 1.102.815 2.222 0 1.606-.015 2.902-.015 3.293 0 .321.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const sectionIcons = {
  contact: '📞',
  social: '🌐',
  soft: '🤝',
  lang: '🌍',
  interests: '🎵',
  profile: '🧑‍💼',
  work: '💼',
  skills: '🛠️',
  cert: '🎓',
  edu: '🏫',
};

const NimishCV = () => {
  // Personal Information
  const personalInfo = {
    name: 'Nimish',
    lastName: 'CHAUDHARI',
    title: 'Azure Certified Digital Transformation Specialist',
    tagline: 'Business Process Optimization | Cloud Architecture | Enterprise Solutions',
    profile: 'Results-driven technology consultant combining Azure certifications with enterprise implementation expertise for Luxembourg government ministries and multinational clients. Specialized in HIVE EDMS and Ivalua platforms with proven ability to optimize business processes, reducing processing times by up to 30%.',
    email: 'nimish.mailbox@gmail.com',
    location: 'Luxembourg',
    phone: '+33 763554551',
    linkedin: 'nimishchaudhari',
    github: 'nimishchaudhari',  // added GitHub username
    age: '28 years old'
  };

  const softSkills = [
    'Dynamic team collaboration',
    'Rapid technology adoption',
    'Analytical problem-solving',
    'Client relationship management',
    'Workshop facilitation',
    'Technical documentation'
  ];

  const languages = [
    { name: 'English', level: 5, status: 'Fluent' },
    { name: 'French', level: 4, status: 'Professional' },
    { name: 'Hindi', level: 5, status: 'Native' },
    { name: 'Spanish', level: 3, status: 'Conversational' }
  ];

  const interests = [
    'Learning Music - Piano and Guitar',
    'Foreign languages enthusiast',
    'Diversity, Equity and Inclusion Activist',
    'Self-hosted AI services'
  ];

  const workExperience = [
    {
      title: 'Associate - Technology and Digital Procurement',
      company: 'PwC Advisory Luxembourg',
      period: 'Since Feb. 2023',
      projects: [
        'Luxembourg Ministries Digital Enablement Project – HIVE EDMS',
        'Dredging Company Procurement tool implementation – Ivalua'
      ],
      descriptions: [
        'Spearheaded HIVE EDMS implementation for Luxembourg government ministries, architecting solutions that enhanced document management workflows for over 30,000 users across multiple platforms',
        'Orchestrated end-to-end Ivalua implementation for dredging industry client, leveraging level 3 certification in P2P and S2C modules to reduce process time by 30% and improve procurement transparency',
        'Facilitated 20+ business process analysis workshops, translating complex business logic into customized Ivalua solutions using SQL, resulting in 25% improvement in process efficiency',
        'Authored comprehensive system requirements specifications, transforming functional business processes into technical specifications for IBM Cloudpak, ensuring seamless integration with enterprise systems'
      ]
    },
    {
      title: 'Application Development Intern',
      company: 'Accenture France Paris',
      period: 'Apr. 2022 - Oct. 2022',
      projects: [
        "Big Data-Driven Retail System Implementation and legacy system's data migration"
      ],
      descriptions: [
        'Designed business process flows using BPMN methodology, documenting complex workflows for system migration',
        'Developed automated Python/VBA solutions to streamline operational processes'
      ]
    },
    {
      title: 'AI Developer - Design 2 Cost',
      company: 'Vodafone Procurement Company Luxembourg',
      period: 'Oct. 2020 - Sept. 2021',
      projects: [
        'AI-Powered Computer Vision Solution for Chip and IC Detection'
      ],
      descriptions: [
        'Engineered state-of-the-art computer vision solution using Deep Learning, containerizing and deploying on AWS EC2, reducing end-to-end process time from 2 weeks to 45 minutes',
        'Implemented self-hosted Git service (GOGS) and automated workflows using Python, enhancing development efficiency',
        'Created comprehensive technical documentation hosted on SharePoint, facilitating knowledge transfer to stakeholders',
        'Designed cloud automation through webhooks for EC2 instance management, optimizing resource utilization'
      ]
    }
  ];

  const skills = [
    {
      category: 'Microsoft & Cloud Technologies',
      items: [
        'Microsoft Azure: AZ-900 (Fundamentals), DP-100 (Data Scientist Associate)',
        'Cloud Services: EC2, S3, Virtual Networks, Containerization, Kubernetes',
        'Microsoft Technologies: SharePoint administration, documentation systems'
      ]
    },
    {
      category: 'Business Analysis & Process Tools',
      items: [
        'Business Process Mapping: BPMN methodology, process optimization',
        'Requirements Engineering: SRS documentation, business-to-technical translation',
        'Data Analysis: Tableau, Python, ETL, Azure analytics'
      ]
    },
    {
      category: 'Development & Automation',
      items: [
        'Languages & Frameworks: Python, C#, JavaScript, bash scripting',
        'AI/ML: Deep Learning, Computer Vision, TensorFlow, automation frameworks',
        'DevOps: Docker, Git, Kubernetes, CI/CD pipelines, cloud resource management'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Azure Data Scientist Associate',
      details: 'Microsoft Azure DP-100'
    },
    {
      title: 'Azure Fundamentals',
      details: 'Microsoft Azure AZ-900'
    },
    {
      title: 'Ivalua Level 3 Certified',
      details: 'P2P and S2C modules'
    },
    {
      title: 'Publication in IEEE Xplore (2019)',
      details: 'Maiboli - Programming language solution in Devanagari Script'
    }
  ];

  const education = [
    {
      degree: 'Master - MIAGE Innovative Information Systems',
      institution: 'Université Toulouse 1 Capitole',
      location: 'Toulouse, France',
      period: 'Sept. 2019 - Sept. 2022',
      thesis: 'Game Theory-Based AI Modeling of Open COVID-19 data in France',
      courses: 'Information Systems Architecture, Data Analysis, Business Intelligence, Cybersecurity, IoT'
    }
  ];

  const cvRef = useRef(null);
  // Dark mode state
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cv-theme') === 'dark';
    }
    return false;
  });
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('cv-theme', dark ? 'dark' : 'light');
  }, [dark]);

  // Download PDF handler using html2pdf.js
  const handleDownloadPDF = async () => {
    if (!cvRef.current) return;
    if (!window.html2pdf) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      script.onload = () => window.html2pdf(cvRef.current, { margin: 0, filename: 'NimishChaudhari_CV.pdf', html2canvas: { scale: 2 }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } });
      document.body.appendChild(script);
    } else {
      window.html2pdf(cvRef.current, { margin: 0, filename: 'NimishChaudhari_CV.pdf', html2canvas: { scale: 2 }, jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' } });
    }
  };

  // Helper for language/skill bars
  const renderBar = (level, max = 5) => (
    <div className="cv-skillbar">
      <div
        className="cv-skillbar-fill"
        style={{ width: `${(level / max) * 100}%` }}
      ></div>
    </div>
  );

  return (
    <main>
      <div className="cv-toolbar">
        <button
          className="cv-dark-toggle"
          aria-label="Toggle dark mode"
          onClick={() => setDark((d) => !d)}
          title="Toggle dark mode"
        >
          {dark ? '🌙' : '☀️'}
        </button>
        <button onClick={handleDownloadPDF} title="Download as PDF">
          📥 Download PDF
        </button>
      </div>
      <div className="cv-container" ref={cvRef}>
        {/* Left Column */}
        <aside className="cv-left">
          <div className="cv-section">
            <div className="cv-name">NIMISH CHAUDHARI</div>
            <div className="cv-title">Azure Certified Digital Transformation Specialist</div>
            <div className="cv-tagline">Business Process Optimization | Cloud Architecture | Enterprise Solutions</div>
          </div>
          <div className="cv-section">
            <div className="cv-section-title">ℹ️ About</div>
            <ul className="cv-contact-list">
              <li className="cv-contact-item"><span className="cv-contact-icon">📧</span>{personalInfo.email}</li>
              <li className="cv-contact-item"><span className="cv-contact-icon">📍</span>{personalInfo.location}</li>
              <li className="cv-contact-item"><span className="cv-contact-icon">📱</span>{personalInfo.phone}</li>
              <li className="cv-contact-item"><GitHubIcon /><a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer">{personalInfo.github}</a></li>
              <li className="cv-contact-item"><LinkedInIcon /><a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li className="cv-contact-item"><span className="cv-contact-icon">👤</span>{personalInfo.age}</li>
            </ul>
          </div>
          <div className="cv-section">
            <div className="cv-section-title">{sectionIcons.social} Social Networks</div>
            <ul className="cv-contact-list">
              <li className="cv-contact-item"><LinkedInIcon /><a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div className="cv-section">
            <div className="cv-section-title">{sectionIcons.soft} Soft Skills</div>
            <ul className="cv-list" style={{ paddingLeft: 0 }}>
              {softSkills.map((skill, i) => (
                <li key={i} className="cv-list-item" style={{ paddingLeft: 0, marginLeft: 0 }}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="cv-section">
            <div className="cv-section-title">{sectionIcons.lang} Languages</div>
            <ul className="cv-list">
              {languages.map((lang, i) => (
                <li key={i} className="cv-list-item" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                    <span>{lang.name}</span>
                    <span style={{ color: 'var(--color-muted)', fontSize: '0.95em' }}>{lang.status}</span>
                  </div>
                  {renderBar(lang.level)}
                </li>
              ))}
            </ul>
          </div>
          <div className="cv-section">
            <div className="cv-section-title">{sectionIcons.interests} Interests</div>
            <ul className="cv-list">
              {interests.map((interest, i) => (
                <li key={i} className="cv-list-item">{interest}</li>
              ))}
            </ul>
          </div>
        </aside>
        {/* Right Column */}
        <section className="cv-right">
          <div className="cv-section">
            <div className="cv-section-title">{sectionIcons.profile} Professional Profile</div>
            <p style={{ textAlign: 'left', fontSize: '1.05em', color: 'var(--color-text)', marginBottom: 0 }}>{personalInfo.profile}</p>
          </div>
          <div className="cv-section">
            <div className="cv-section-title">{sectionIcons.work} Work Experience</div>
            <div className="cv-timeline">
              {workExperience.map((exp, i) => (
                <div key={i} className="cv-timeline-item">
                  <div className="cv-timeline-dot"></div>
                  <div style={{ marginLeft: 8 }}>
                    <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.08em', textAlign: 'left' }}>{exp.title}</div>
                    <div style={{ fontWeight: 500, color: 'var(--color-text)', fontSize: '1em', textAlign: 'left' }}>{exp.company}</div>
                    <div style={{ fontStyle: 'italic', color: 'var(--color-muted)', fontSize: '0.98em', marginBottom: 4, textAlign: 'left' }}>{exp.period}</div>
                    {exp.projects?.length > 0 && (
                      <div style={{ fontWeight: 500, margin: '6px 0 2px 0', textAlign: 'left' }}>Main Projects:</div>
                    )}
                    <ul className="cv-list">
                      {exp.projects?.map((proj, j) => (
                        <li key={j} className="cv-list-item" style={{ fontStyle: 'italic', textAlign: 'left' }}>{proj}</li>
                      ))}
                    </ul>
                    {exp.descriptions?.length > 0 && (
                      <div style={{ fontWeight: 500, margin: '6px 0 2px 0', textAlign: 'left' }}>Description:</div>
                    )}
                    <ul className="cv-list">
                      {exp.descriptions?.map((desc, j) => (
                        <li key={j} className="cv-list-item" style={{ textAlign: 'left' }}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cv-section">
            <div className="cv-section-title">{sectionIcons.skills} Technical Skills</div>
            {skills.map((cat, i) => (
              <div key={i} style={{ marginBottom: 18 }}>
                <div style={{ fontWeight: 600, color: 'var(--color-accent)', fontSize: '1.05em', marginBottom: 4, textAlign: 'left' }}>{cat.category}</div>
                <ul className="cv-list">
                  {cat.items.map((item, j) => (
                    <li key={j} className="cv-list-item" style={{ textAlign: 'left' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="cv-section">
            <div className="cv-section-title">{sectionIcons.cert} Certifications</div>
            <ul className="cv-list">
              {certifications.map((cert, i) => (
                <li key={i} className="cv-list-item" style={{ textAlign: 'left' }}><span style={{ fontWeight: 600 }}>{cert.title}</span> <span style={{ color: 'var(--color-muted)', marginLeft: 6 }}>{cert.details}</span></li>
              ))}
            </ul>
          </div>
          <div className="cv-section">
            <div className="cv-section-title">{sectionIcons.edu} Education</div>
            {education.map((edu, i) => (
              <div key={i} style={{ marginBottom: 18 }}>
                <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.08em', textAlign: 'left' }}>{edu.degree}</div>
                <div style={{ fontWeight: 500, color: 'var(--color-text)', fontSize: '1em', textAlign: 'left' }}>{edu.institution} - {edu.location}</div>
                <div style={{ fontStyle: 'italic', color: 'var(--color-muted)', fontSize: '0.98em', marginBottom: 4, textAlign: 'left' }}>{edu.period}</div>
                <div style={{ fontWeight: 500, margin: '6px 0 2px 0', textAlign: 'left' }}>Thesis Project:</div>
                <div style={{ fontStyle: 'italic', marginBottom: 4, textAlign: 'left' }}>{edu.thesis}</div>
                <div style={{ fontWeight: 500, margin: '6px 0 2px 0', textAlign: 'left' }}>Coursework:</div>
                <div style={{ textAlign: 'left' }}>{edu.courses}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default NimishCV;
