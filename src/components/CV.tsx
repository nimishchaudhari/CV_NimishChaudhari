import { Mail, MapPin, Phone, Car, Linkedin, Brain, Database, Code } from 'lucide-react';

const CV = () => {
  return (
    <div className="bg-white shadow-lg mx-auto" style={{ 
      width: '210mm', 
      minHeight: '297mm',
      fontSize: '10px',
      lineHeight: '1.4',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div className="flex h-full">
        {/* Left Sidebar - Enhanced with AI branding */}
        <div className="w-64 bg-gradient-to-br from-blue-50 to-indigo-100 p-5 border-r-2 border-blue-200">

          
          {/* Name and AI-focused Title */}
          <div className="mb-5">
            <h1 className="text-xl font-bold mb-1 text-gray-800">Nimish</h1>
            <h1 className="text-xl font-bold mb-2 text-gray-800">CHAUDHARI</h1>
            <p className="text-gray-700 text-xs leading-relaxed">Transforming Business Through AI & Data-Driven Solutions</p>
          </div>

          {/* Contact Info */}
          <div className="mb-5 space-y-1 text-xs">
            <div className="flex items-center gap-2 text-gray-700">
              <Mail className="w-3 h-3 text-blue-600" />
              <span>nimish.mailbox@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-3 h-3 text-blue-600" />
              <span>+33 763554551</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-3 h-3 text-blue-600" />
              <span>Strassen, Luxembourg</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Linkedin className="w-3 h-3 text-blue-600" />
              <a href="https://www.linkedin.com/in/nimishchaudhari/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">nimishchaudhari</a>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Car className="w-3 h-3 text-blue-600" />
              <span>EU Driving License (B1)</span>
            </div>
          </div>

          {/* AI Certifications - Prominently Featured */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-gray-800 flex items-center gap-2">
              <Database className="w-4 h-4 text-blue-600" />
              AI & CLOUD CERTIFICATIONS
            </h3>
            <div className="space-y-2">
              <div className="bg-white rounded p-2 shadow-sm">
                <p className="text-xs font-semibold text-blue-700">Microsoft Azure</p>
                <p className="text-xs text-gray-600">• AZ-900 Fundamentals</p>
                <p className="text-xs text-gray-600">• DP-100 Data Scientist</p>
              </div>
              <div className="bg-white rounded p-2 shadow-sm">
                <p className="text-xs font-semibold text-blue-700">Ivalua</p>
                <p className="text-xs text-gray-600">• Level 3 P2P & S2C</p>
              </div>
            </div>
          </div>

          {/* Core AI Skills */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-gray-800 flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-600" />
              CORE EXPERTISE
            </h3>
            <div className="space-y-1 text-xs">
              <div className="bg-blue-100 px-2 py-1 rounded">Machine Learning & Deep Learning</div>
              <div className="bg-blue-100 px-2 py-1 rounded">Computer Vision</div>
              <div className="bg-blue-100 px-2 py-1 rounded">Process Automation</div>
              <div className="bg-blue-100 px-2 py-1 rounded">Cloud AI Deployment</div>
              <div className="bg-blue-100 px-2 py-1 rounded">Business Intelligence</div>
            </div>
          </div>

          {/* Languages */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-gray-800">LANGUAGES</h3>
            <div className="space-y-2">
              <div>
                <p className="text-xs font-medium mb-1">English - Bilingual</p>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-blue-600 h-1 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium mb-1">French - B2-C1</p>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-blue-600 h-1 rounded-full w-4/5"></div>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium mb-1">Spanish - B1</p>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-blue-600 h-1 rounded-full w-3/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Interests */}
          <div>
            <h3 className="text-sm font-bold mb-3 text-gray-800">INTERESTS</h3>
            <ul className="text-xs space-y-1 text-gray-700">
              <li>• Learning Music</li>
              <li>• Vibe coding</li>
              <li>• Open source software</li>
              <li>• DE&I activist</li>
            </ul>
          </div>
        </div>

        {/* Main Content - Restructured for AI focus */}
        <div className="flex-1 p-5" style={{ fontSize: '10px' }}>
          {/* AI-Focused Professional Summary */}
          <div className="mb-5 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-sm font-bold mb-2 text-gray-800">AI & DATA SCIENCE PROFESSIONAL SUMMARY</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Results-driven AI consultant with 3+ years of experience deploying machine learning solutions in enterprise environments. 
              Proven track record of reducing process times by 97% through computer vision implementations and architecting AI-powered 
              systems for 30,000+ users. Passionate about transforming business operations through intelligent automation and data-driven insights.
            </p>
          </div>

          {/* Technical Expertise - Prominently Featured */}
          <div className="mb-5">
            <h2 className="text-sm font-bold mb-3 text-gray-800 border-b-2 border-blue-600 pb-1">TECHNICAL EXPERTISE</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xs font-semibold text-gray-800 mb-2 bg-blue-100 px-2 py-1 rounded">AI/ML Technologies</h3>
                <ul className="text-xs space-y-0 ml-2">
                  <li>• TensorFlow, PyTorch, scikit-learn</li>
                  <li>• Computer Vision (OpenCV, YOLO)</li>
                  <li>• NLP & Deep Learning</li>
                  <li>• MLOps & Model Deployment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-800 mb-2 bg-blue-100 px-2 py-1 rounded">Development & Cloud</h3>
                <ul className="text-xs space-y-0 ml-2">
                  <li>• Python, C#, JavaScript</li>
                  <li>• AWS EC2, S3, Azure ML</li>
                  <li>• Docker, Kubernetes, Git</li>
                  <li>• Tableau, Power BI</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Professional Experience - AI Projects First */}
          <div className="mb-5">
            <h2 className="text-sm font-bold mb-3 text-gray-800 border-b-2 border-blue-600 pb-1">AI & DATA EXPERIENCE</h2>
            
            {/* Vodafone - AI Project Featured First */}
            <div className="mb-4 bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
              <div className="flex items-center gap-2 mb-1">
                <Brain className="w-4 h-4 text-yellow-600" />
                <h3 className="text-xs font-bold text-gray-800">AI Developer | Computer Vision Specialist</h3>
              </div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-gray-600 text-xs">Vodafone Procurement Company - Luxembourg</p>
                <div className="text-right">
                  <p className="text-gray-600 text-xs">Oct. 2020 - Sept. 2021</p>
                  <p className="text-gray-500 text-xs italic">1 year</p>
                </div>
              </div>
              <p className="font-semibold text-xs mb-1 text-blue-700">⭐ Flagship AI Project: Computer Vision for IC Detection</p>
              <ul className="text-xs space-y-1 ml-2">
                <li>• Engineered deep learning solution reducing process time from <strong>2 weeks to 45 minutes (97% reduction)</strong></li>
                <li>• Deployed containerized AI models on AWS EC2 with automated scaling</li>
                <li>• Implemented MLOps pipeline with self-hosted Git (GOGS) and Python automation</li>
                <li>• Created comprehensive AI documentation and knowledge transfer protocols</li>
              </ul>
            </div>

            {/* PwC - Technology Consultant */}
            <div className="mb-4">
              <h3 className="text-xs font-bold text-gray-800 mb-1">Associate Technology Consultant | Enterprise AI Solutions</h3>
              <div className="flex justify-between items-center mb-1">
                <p className="text-gray-600 text-xs">PwC Advisory - Luxembourg</p>
                <div className="text-right">
                  <p className="text-gray-600 text-xs">Feb. 2023 - Present</p>
                  <p className="text-gray-500 text-xs italic">2 years 4 months</p>
                </div>
              </div>
              <ul className="text-xs space-y-1 ml-2">
                <li>• Architected a government usage document and case management system with a user base of over 30k+ Luxembourg users</li>
                <li>• Led Ivalua P2P automation implementation, achieving <strong>30% process optimization</strong></li>
                <li>• Developed enterprise-grade technical specifications for IBM CloudPak integration</li>
                <li>• Transformed business requirements into scalable AI-ready system architectures</li>
              </ul>
            </div>

            {/* Accenture */}
            <div className="mb-4">
              <h3 className="text-xs font-bold text-gray-800 mb-1">Application Development Associate | Data Migration Specialist</h3>
              <div className="flex justify-between items-center mb-1">
                <p className="text-gray-600 text-xs">Accenture France - Paris</p>
                <div className="text-right">
                  <p className="text-gray-600 text-xs">Apr. 2022 - Sept. 2022</p>
                  <p className="text-gray-500 text-xs italic">6 months</p>
                </div>
              </div>
              <ul className="text-xs ml-2">
                <li>• Designed BPMN business process flows and automated workflows using Python/VBA</li>
                <li>• Contributed to big data retail system implementation and legacy data migration</li>
              </ul>
            </div>
          </div>

          {/* Education - AI Thesis Highlighted */}
          <div className="mb-4">
            <h2 className="text-sm font-bold mb-3 text-gray-800 border-b-2 border-blue-600 pb-1">EDUCATION & RESEARCH</h2>
            
            <div>
              <h3 className="text-xs font-bold text-gray-800 mb-1">Master's in Information Systems (MIAGE)</h3>
              <div className="flex justify-between items-center mb-1">
                <p className="text-gray-600 text-xs">Université Toulouse 1 Capitole, France</p>
                <div className="text-right">
                  <p className="text-gray-600 text-xs">2019 - 2022</p>
                  <p className="text-gray-500 text-xs italic">3 years</p>
                </div>
              </div>
              <div className="bg-green-50 p-2 rounded border-l-4 border-green-500 mb-2">
                <p className="font-semibold text-xs mb-1 text-green-700">🎓 AI Research Thesis:</p>
                <p className="text-xs italic">"Game Theory-Based AI Modeling of Open COVID-19 Data in France"</p>
                <p className="text-xs text-gray-600 mt-1">Applied advanced AI modeling techniques to epidemiological data analysis</p>
              </div>
              <p className="text-xs"><strong>Relevant Coursework:</strong> AI Systems Architecture, Advanced Data Analysis, Business Intelligence, Cybersecurity</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default CV;
