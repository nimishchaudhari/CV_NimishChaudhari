import React, { useState, useEffect, useRef } from 'react';
import {
  Box, Flex, VStack, HStack, Text, Button, IconButton,
  UnorderedList, ListItem, Divider, Accordion, AccordionItem,
  AccordionButton, AccordionPanel, AccordionIcon, useColorMode,
  useColorModeValue, Link, Icon, Progress, Tooltip
} from '@chakra-ui/react';
import {
  EmailIcon, PhoneIcon, LinkIcon, CalendarIcon,
  StarIcon, CodeIcon, CheckCircleIcon, ExternalLinkIcon
} from '@chakra-ui/icons';
import { FaGithub, FaLinkedin, FaSun, FaMoon, FaDownload } from 'react-icons/fa';

const sectionIcons = {
  contact: <PhoneIcon />,
  social: <LinkIcon />,
  soft: <StarIcon />,
  lang: <CodeIcon />,
  interests: <CheckCircleIcon />,
  profile: <Icon as={FaUserTie} />,
  work: <Icon as={FaBriefcase} />,
  skills: <CodeIcon />,
  cert: <Icon as={FaCertificate} />,
  edu: <Icon as={FaGraduationCap} />,
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
  const { colorMode, toggleColorMode } = useColorMode();
  const dark = colorMode === 'dark';
  const setDark = (isDark) => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, []);

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
      <Box className="cv-toolbar" p={4} bg={useColorModeValue('gray.100', 'gray.700')}>
        <Flex justify="flex-end" gap={4}>
          <IconButton
            aria-label="Toggle dark mode"
            icon={dark ? <Icon as={StarIcon} /> : <Icon as={SunIcon} />}
            onClick={() => setDark((d) => !d)}
            variant="ghost"
            size="lg"
          />
          <Button
            onClick={handleDownloadPDF}
            leftIcon={<Icon as={DownloadIcon} />}
            colorScheme="blue"
            variant="solid"
          >
            Download PDF
          </Button>
        </Flex>
      </Box>
      <div className="cv-container" ref={cvRef}>
        {/* Left Column */}
        <aside className="cv-left">
          <div className="cv-section">
            <div className="cv-name">NIMISH CHAUDHARI</div>
            <div className="cv-title">Azure Certified Digital Transformation Specialist</div>
            <div className="cv-tagline">Business Process Optimization | Cloud Architecture | Enterprise Solutions</div>
          </div>
          <Box className="cv-section" mb={6}>
            <Text className="cv-section-title" fontSize="xl" fontWeight="bold" mb={4} color="teal.500">
              {sectionIcons.contact} About
            </Text>
            <VStack align="start" spacing={3}>
              <HStack>
                <EmailIcon />
                <Text>{personalInfo.email}</Text>
              </HStack>
              <HStack>
                <Icon as={FaLocationDot} />
                <Text>{personalInfo.location}</Text>
              </HStack>
              <HStack>
                <PhoneIcon />
                <Text>{personalInfo.phone}</Text>
              </HStack>
              <HStack>
                <Icon as={FaGithub} />
                <Link href={`https://github.com/${personalInfo.github}`} isExternal>
                  {personalInfo.github} <ExternalLinkIcon mx="2px" />
                </Link>
              </HStack>
              <HStack>
                <Icon as={FaLinkedin} />
                <Link href={`https://linkedin.com/in/${personalInfo.linkedin}`} isExternal>
                  LinkedIn <ExternalLinkIcon mx="2px" />
                </Link>
              </HStack>
              <HStack>
                <Icon as={FaUser} />
                <Text>{personalInfo.age}</Text>
              </HStack>
            </VStack>
          </Box>
          <Box className="cv-section" mb={6}>
            <Text className="cv-section-title" fontSize="xl" fontWeight="bold" mb={4} color="teal.500">
              {sectionIcons.social} Social Networks
            </Text>
            <VStack align="start" spacing={3}>
              <HStack>
                <Icon as={FaLinkedin} />
                <Link href={`https://linkedin.com/in/${personalInfo.linkedin}`} isExternal>
                  LinkedIn <ExternalLinkIcon mx="2px" />
                </Link>
              </HStack>
            </VStack>
          </Box>
          <Box className="cv-section" mb={6}>
            <Text className="cv-section-title" fontSize="xl" fontWeight="bold" mb={4} color="teal.500">
              {sectionIcons.soft} Soft Skills
            </Text>
            <VStack align="start" spacing={3}>
              {softSkills.map((skill, i) => (
                <HStack key={i} pl={0} ml={0}>
                  <Icon as={FaCheckCircle} color="green.500" />
                  <Text>{skill}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
          <Box className="cv-section" mb={6}>
            <Text className="cv-section-title" fontSize="xl" fontWeight="bold" mb={4} color="teal.500">
              {sectionIcons.lang} Languages
            </Text>
            <VStack align="start" spacing={4}>
              {languages.map((lang, i) => (
                <VStack key={i} align="start" spacing={2} w="full">
                  <HStack justify="space-between" w="full">
                    <Text fontWeight="medium">{lang.name}</Text>
                    <Text color="gray.500" fontSize="sm">{lang.status}</Text>
                  </HStack>
                  <Progress
                    value={(lang.level / 5) * 100}
                    colorScheme="teal"
                    size="sm"
                    borderRadius="md"
                    w="full"
                  />
                </VStack>
              ))}
            </VStack>
          </Box>
          <Box className="cv-section" mb={6}>
            <Text className="cv-section-title" fontSize="xl" fontWeight="bold" mb={4} color="teal.500">
              {sectionIcons.interests} Interests
            </Text>
            <VStack align="start" spacing={3}>
              {interests.map((interest, i) => (
                <HStack key={i}>
                  <Icon as={FaMusic} color="purple.500" />
                  <Text>{interest}</Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        </aside>
        {/* Right Column */}
        <section className="cv-right">
          <Box className="cv-section" mb={6}>
            <Text className="cv-section-title" fontSize="xl" fontWeight="bold" mb={4} color="teal.500">
              {sectionIcons.profile} Professional Profile
            </Text>
            <Text textAlign="left" fontSize="md" color="gray.700">
              {personalInfo.profile}
            </Text>
          </Box>
          <Box className="cv-section" mb={6}>
            <Text className="cv-section-title" fontSize="xl" fontWeight="bold" mb={4} color="teal.500">
              {sectionIcons.work} Work Experience
            </Text>
            <Accordion allowToggle>
              {workExperience.map((exp, i) => (
                <AccordionItem key={i} borderLeft="4px solid" borderColor="teal.500" mb={4}>
                  <h2>
                    <AccordionButton _expanded={{ bg: 'teal.100', color: 'teal.800' }}>
                      <Box flex="1" textAlign="left">
                        <Text fontWeight="bold" fontSize="lg">{exp.title}</Text>
                        <Text fontSize="md" color="gray.600">{exp.company}</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Text fontSize="sm" color="gray.500" mb={2}>{exp.period}</Text>
                    {exp.projects?.length > 0 && (
                      <>
                        <Text fontWeight="medium" mt={2} mb={1}>Main Projects:</Text>
                        <UnorderedList mb={3} pl={5}>
                          {exp.projects?.map((proj, j) => (
                            <ListItem key={j} fontStyle="italic">{proj}</ListItem>
                          ))}
                        </UnorderedList>
                      </>
                    )}
                    {exp.descriptions?.length > 0 && (
                      <>
                        <Text fontWeight="medium" mt={2} mb={1}>Description:</Text>
                        <UnorderedList pl={5}>
                          {exp.descriptions?.map((desc, j) => (
                            <ListItem key={j}>{desc}</ListItem>
                          ))}
                        </UnorderedList>
                      </>
                    )}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
          <Box className="cv-section" mb={6}>
            <Text className="cv-section-title" fontSize="xl" fontWeight="bold" mb={4} color="teal.500">
              {sectionIcons.skills} Technical Skills
            </Text>
            <VStack align="start" spacing={6}>
              {skills.map((cat, i) => (
                <Box key={i} w="full">
                  <Text fontWeight="bold" fontSize="lg" color="blue.600" mb={2}>{cat.category}</Text>
                  <UnorderedList pl={5} spacing={2}>
                    {cat.items.map((item, j) => (
                      <ListItem key={j}>
                        <HStack>
                          <Icon as={FaCode} color="blue.500" />
                          <Text>{item}</Text>
                        </HStack>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              ))}
            </VStack>
          </Box>
          <Box className="cv-section" mb={6}>
            <Text className="cv-section-title" fontSize="xl" fontWeight="bold" mb={4} color="teal.500">
              {sectionIcons.cert} Certifications
            </Text>
            <VStack align="start" spacing={3}>
              {certifications.map((cert, i) => (
                <HStack key={i} align="start" spacing={3}>
                  <Icon as={FaCertificate} color="orange.500" />
                  <Box>
                    <Text fontWeight="bold">{cert.title}</Text>
                    <Text color="gray.600" fontSize="sm">{cert.details}</Text>
                  </Box>
                </HStack>
              ))}
            </VStack>
          </Box>
          <Box className="cv-section" mb={6}>
            <Text className="cv-section-title" fontSize="xl" fontWeight="bold" mb={4} color="teal.500">
              {sectionIcons.edu} Education
            </Text>
            {education.map((edu, i) => (
              <Box key={i} mb={6} p={4} borderRadius="md" bg={useColorModeValue('gray.50', 'gray.800')}>
                <Text fontWeight="bold" fontSize="lg" mb={2}>{edu.degree}</Text>
                <HStack mb={3} color="blue.500">
                  <Icon as={FaUniversity} />
                  <Text fontWeight="medium">{edu.institution}</Text>
                </HStack>
                <HStack mb={3} color="gray.500" fontSize="sm">
                  <Icon as={FaLocationDot} />
                  <Text>{edu.location}</Text>
                  <Icon as={FaCalendar} ml={4} />
                  <Text>{edu.period}</Text>
                </HStack>
                <VStack align="start" spacing={2}>
                  <HStack>
                    <Icon as={FaBook} color="green.500" />
                    <Text fontWeight="medium">Thesis Project:</Text>
                  </HStack>
                  <Text ml={6} fontStyle="italic">{edu.thesis}</Text>
                  <HStack mt={3}>
                    <Icon as={FaChalkboardTeacher} color="green.500" />
                    <Text fontWeight="medium">Coursework:</Text>
                  </HStack>
                  <Wrap ml={6}>
                    {edu.courses.split(', ').map((course, j) => (
                      <WrapItem key={j}>
                        <Badge colorScheme="blue" variant="subtle" px={2} py={1} borderRadius="md">
                          {course}
                        </Badge>
                      </WrapItem>
                    ))}
                  </Wrap>
                </VStack>
              </Box>
            ))}
          </Box>
        </section>
      </div>
    </main>
  );
};

export default NimishCV;
