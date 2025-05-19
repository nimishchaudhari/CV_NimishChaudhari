import React from 'react';

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
    age: '27 years old'
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

  // Styles
  const styles = {
    colors: {
      primary: '#1a3c5a',
      secondary: '#3d7ba0',
      accent: '#4a90e2',
      light: '#f5f5f5',
      lightGrey: '#e0e0e0',
      mediumGrey: '#999',
      darkGrey: '#555',
      text: '#333',
      white: '#fff'
    },
    container: {
      fontFamily: "'Roboto', 'Segoe UI', Arial, sans-serif",
      display: 'flex',
      maxWidth: '1000px',
      margin: '40px auto',
      boxShadow: '0 0 20px rgba(0,0,0,0.1)',
      color: '#333',
      backgroundColor: '#fff',
      borderRadius: '10px',
      overflow: 'hidden'
    },
    leftColumn: {
      width: '350px',
      backgroundColor: '#f5f5f5',
      padding: '30px 25px',
      boxSizing: 'border-box'
    },
    rightColumn: {
      flex: 1,
      padding: '30px 25px',
      boxSizing: 'border-box'
    },
    photo: {
      width: '150px',
      height: '150px',
      borderRadius: '5px',
      backgroundColor: '#e0e0e0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto 25px',
      color: '#999',
      border: '1px solid #ddd',
      fontSize: '18px',
      fontWeight: 'bold'
    },
    name: {
      textAlign: 'center',
      margin: '0 0 5px',
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#1a3c5a',
      textTransform: 'uppercase'
    },
    lastName: {
      textAlign: 'center',
      margin: '0 0 15px',
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#1a3c5a',
      textTransform: 'uppercase'
    },
    title: {
      textAlign: 'center',
      margin: '0 0 5px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#3d7ba0'
    },
    tagline: {
      textAlign: 'center',
      margin: '0 0 20px',
      fontSize: '13px',
      color: '#555'
    },
    section: {
      marginBottom: '25px'
    },
    sectionTitle: {
      borderBottom: '2px solid #1a3c5a',
      paddingBottom: '8px',
      marginBottom: '15px',
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#1a3c5a',
      textTransform: 'uppercase'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      fontSize: '14px'
    },
    contactIcon: {
      marginRight: '10px',
      width: '16px',
      color: '#3d7ba0',
      textAlign: 'center'
    },
    profile: {
      lineHeight: '1.5',
      textAlign: 'justify',
      fontSize: '14px',
      marginBottom: '20px'
    },
    listItem: {
      marginBottom: '8px',
      fontSize: '14px',
      display: 'flex',
    },
    bullet: {
      color: '#3d7ba0',
      marginRight: '10px',
      fontWeight: 'bold'
    },
    experienceItem: {
      marginBottom: '25px'
    },
    jobTitle: {
      margin: '0 0 5px',
      fontSize: '17px',
      fontWeight: 'bold',
      color: '#1a3c5a'
    },
    company: {
      margin: '0 0 5px',
      fontSize: '15px',
      fontWeight: '500',
      color: '#333'
    },
    period: {
      margin: '0 0 15px',
      fontSize: '14px',
      fontStyle: 'italic',
      color: '#555'
    },
    projectsTitle: {
      margin: '0 0 5px',
      fontSize: '15px',
      fontWeight: 'bold'
    },
    projectsList: {
      marginBottom: '10px',
      paddingLeft: '20px'
    },
    projectsListItem: {
      margin: '5px 0',
      fontSize: '14px',
      fontStyle: 'italic'
    },
    descriptionList: {
      margin: '0',
      paddingLeft: '0',
      listStyleType: 'none'
    },
    descriptionListItem: {
      margin: '8px 0',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'flex-start'
    },
    skillCategory: {
      margin: '0 0 8px',
      fontSize: '15px',
      fontWeight: 'bold',
      color: '#3d7ba0'
    },
    skillList: {
      marginBottom: '15px',
      paddingLeft: '20px'
    },
    skillListItem: {
      margin: '5px 0',
      fontSize: '14px'
    },
    certificationItem: {
      marginBottom: '10px'
    },
    certificationTitle: {
      margin: '0 0 3px',
      fontSize: '15px',
      fontWeight: 'bold'
    },
    certificationDetails: {
      margin: '0',
      fontSize: '14px',
      color: '#555'
    },
    languageItem: {
      marginBottom: '10px'
    },
    languageName: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '14px',
      marginBottom: '3px'
    },
    languageLevelContainer: {
      display: 'flex',
      height: '6px',
      backgroundColor: '#e0e0e0',
      borderRadius: '3px',
      overflow: 'hidden',
      marginBottom: '10px'
    },
    educationItem: {
      marginBottom: '20px'
    },
    educationDegree: {
      margin: '0 0 5px',
      fontSize: '17px',
      fontWeight: 'bold',
      color: '#1a3c5a'
    },
    educationInstitution: {
      margin: '0 0 5px',
      fontSize: '15px',
      fontWeight: '500'
    },
    educationPeriod: {
      margin: '0 0 10px',
      fontSize: '14px',
      fontStyle: 'italic',
      color: '#555'
    },
    thesisTitle: {
      margin: '0 0 5px',
      fontSize: '15px',
      fontWeight: 'bold'
    },
    thesisContent: {
      marginBottom: '10px',
      fontSize: '14px',
      fontStyle: 'italic'
    },
    coursesTitle: {
      margin: '0 0 5px',
      fontSize: '15px',
      fontWeight: 'bold'
    },
    coursesContent: {
      fontSize: '14px'
    },
    achievement: {
      fontWeight: '500',
      color: '#3d7ba0'
    }
  };

  // Helper function to render language level
  const renderLanguageLevel = (level) => {
    const levels = [];
    for (let i = 0; i < 5; i++) {
      levels.push(
        <div 
          key={i} 
          style={{
            flex: 1,
            height: '100%',
            backgroundColor: i < level ? styles.colors.primary : 'transparent',
            marginRight: i < 4 ? '2px' : 0
          }}
        />
      );
    }
    return levels;
  };

  return (
    <div style={styles.container}>
      {/* Left Column */}
      <div style={styles.leftColumn}>
        <div style={styles.photo}>
          <span>Photo</span>
        </div>
        <div style={styles.section}>
          <h1 style={styles.name}>{personalInfo.name}</h1>
          <h1 style={styles.lastName}>{personalInfo.lastName}</h1>
          <h2 style={styles.title}>{personalInfo.title}</h2>
          <p style={styles.tagline}>{personalInfo.tagline}</p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Contact</h3>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>📧</span>
            <span>{personalInfo.email}</span>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>📍</span>
            <span>{personalInfo.location}</span>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>📱</span>
            <span>{personalInfo.phone}</span>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>💼</span>
            <span>{personalInfo.linkedin}</span>
          </div>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>👤</span>
            <span>{personalInfo.age}</span>
          </div>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Social Networks</h3>
          <div style={styles.contactItem}>
            <span style={styles.contactIcon}>🔗</span>
            <span>LinkedIn: {personalInfo.linkedin}</span>
          </div>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Soft Skills</h3>
          {softSkills.map((skill, index) => (
            <div key={index} style={styles.listItem}>
              <span style={styles.bullet}>•</span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Languages</h3>
          {languages.map((language, index) => (
            <div key={index} style={styles.languageItem}>
              <div style={styles.languageName}>
                <span>{language.name}</span>
                <span style={{ color: styles.colors.mediumGrey, fontSize: '13px' }}>
                  {language.status}
                </span>
              </div>
              <div style={styles.languageLevelContainer}>
                {renderLanguageLevel(language.level)}
              </div>
            </div>
          ))}
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Interests</h3>
          {interests.map((interest, index) => (
            <div key={index} style={styles.listItem}>
              <span style={styles.bullet}>•</span>
              <span>{interest}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Right Column */}
      <div style={styles.rightColumn}>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Professional Profile</h3>
          <p style={styles.profile}>{personalInfo.profile}</p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Work Experience</h3>
          {workExperience.map((experience, index) => (
            <div key={index} style={styles.experienceItem}>
              <h4 style={styles.jobTitle}>{experience.title}</h4>
              <p style={styles.company}>{experience.company}</p>
              <p style={styles.period}>{experience.period}</p>
              {experience.projects && experience.projects.length > 0 && (
                <>
                  <h5 style={styles.projectsTitle}>Main Projects:</h5>
                  <ul style={styles.projectsList}>
                    {experience.projects.map((project, projectIndex) => (
                      <li key={projectIndex} style={styles.projectsListItem}>{project}</li>
                    ))}
                  </ul>
                </>
              )}
              {experience.descriptions && experience.descriptions.length > 0 && (
                <>
                  <h5 style={styles.projectsTitle}>Description:</h5>
                  <ul style={styles.descriptionList}>
                    {experience.descriptions.map((description, descIndex) => (
                      <li key={descIndex} style={styles.descriptionListItem}>
                        <span style={styles.bullet}>•</span>
                        <span>{description}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Technical Skills</h3>
          {skills.map((skill, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h4 style={styles.skillCategory}>{skill.category}</h4>
              <ul style={styles.skillList}>
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} style={styles.skillListItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Certifications</h3>
          {certifications.map((certification, index) => (
            <div key={index} style={styles.certificationItem}>
              <h4 style={styles.certificationTitle}>{certification.title}</h4>
              <p style={styles.certificationDetails}>{certification.details}</p>
            </div>
          ))}
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Education</h3>
          {education.map((edu, index) => (
            <div key={index} style={styles.educationItem}>
              <h4 style={styles.educationDegree}>{edu.degree}</h4>
              <p style={styles.educationInstitution}>{edu.institution} - {edu.location}</p>
              <p style={styles.educationPeriod}>{edu.period}</p>
              <h5 style={styles.thesisTitle}>Thesis Project:</h5>
              <p style={styles.thesisContent}>{edu.thesis}</p>
              <h5 style={styles.coursesTitle}>Coursework:</h5>
              <p style={styles.coursesContent}>{edu.courses}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NimishCV;
