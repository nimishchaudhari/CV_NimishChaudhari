// Icons removed for ATS compatibility

const CV = () => {
  return (
    <div className="bg-white shadow-lg mx-auto cv-container" style={{ 
      width: '210mm', 
      height: 'auto',
      maxHeight: '297mm',
      fontSize: '10px',
      lineHeight: '1.3',
      fontFamily: 'Calibri, Arial, Helvetica, sans-serif'
    }}>
      <div className="flex h-full">
        {/* Left Sidebar */}
        <div className="w-64 bg-gradient-to-br from-blue-50 to-indigo-100 p-5 border-r-2 border-blue-200">
          
          {/* Name and Title */}
          <div className="mb-5">
            <h1 className="text-xl font-bold mb-1 text-gray-800">Nimish</h1>
            <h1 className="text-xl font-bold mb-2 text-gray-800">CHAUDHARI</h1>
            <p className="text-gray-700 text-xs leading-relaxed">Client-facing Technology Consultant at PwC Luxembourg</p>
          </div>

          {/* Contact Info */}
          <div className="mb-5 space-y-1 text-xs">
            <div className="text-gray-700">
              <span className="font-medium">Email:</span> nimish.mailbox@gmail.com
            </div>
            <div className="text-gray-700">
              <span className="font-medium">Phone:</span> +33 (0)7 63 55 45 51
            </div>

            <div className="text-gray-700">
              <span className="font-medium">Location:</span> Luxembourg
            </div>
            <div className="text-gray-700">
              <span className="font-medium">LinkedIn:</span> <a href="https://linkedin.com/in/nimishchaudhari" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">nimishchaudhari</a>
            </div>
            <div className="text-gray-700">
              <span className="font-medium">GitHub:</span> <a href="https://github.com/nimishchaudhari" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">nimishchaudhari</a>
            </div>
          </div>

          {/* AI & Cloud Certifications */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-gray-800">
              AI & CLOUD CERTIFICATIONS
            </h3>
            <div className="space-y-2">
              <div className="bg-white rounded p-2 shadow-sm">
                <p className="text-xs font-semibold text-blue-700">Microsoft Azure</p>
                <p className="text-xs text-gray-600">• Azure Fundamentals (AZ-900)</p>
                <p className="text-xs text-gray-600">• Azure Data Scientist (DP-100)</p>
              </div>
              <div className="bg-white rounded p-2 shadow-sm">
                <p className="text-xs font-semibold text-blue-700">AI & Data Analytics</p>
                <p className="text-xs text-gray-600">• Neural Networks and Deep Learning (Coursera)</p>
                <p className="text-xs text-gray-600">• Apache Spark SQL for Data Analysts (Databricks)</p>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-gray-800">
              SOFT SKILLS
            </h3>
            <ul className="text-xs space-y-1 ml-2">
              <li>• Client Workshops & Training</li>
              <li>• Cross-functional Collaboration</li>
              <li>• Problem Solving & Analysis</li>
              <li>• Stakeholder Management</li>
              <li>• Technical Documentation</li>
              <li>• Abstract concept building</li>
              <li>• Coaching and Mentoring</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-gray-800">LANGUAGES</h3>
            <div className="space-y-2">
              <div>
                <p className="text-xs font-medium mb-1">English - C2</p>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-blue-600 h-1 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium mb-1">French - C1</p>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-blue-600 h-1 rounded-full w-5/6"></div>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium mb-1">Hindi/Marathi - Native</p>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-blue-600 h-1 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium mb-1">Spanish - A2</p>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-blue-600 h-1 rounded-full w-2/5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-sm font-bold mb-3 text-gray-800">INTERESTS</h3>
            <ul className="text-xs space-y-1 text-gray-700">
              <li>• Learning music</li>
              <li>• DEI Activism</li>
              <li>• Dota 2</li>
              <li>• Self hosting</li>
              <li>• Vibe coding</li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-5" style={{ fontSize: '10px' }}>
          
          {/* Professional Summary */}
          <div className="mb-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-sm font-bold mb-2 text-gray-800">PROFESSIONAL SUMMARY</h2>
            <p className="text-xs text-gray-700 leading-relaxed">
              Long-time neural network enthusiast turned techno-functional consultant, combining technical depth with business acumen. Uses 'AI Centaur' approach - collaborating with GenAI for brainstorming and implementation. Driven to expand AI adoption through rigorous, client-focused delivery and knowledge sharing.
            </p>
          </div>

          {/* Technical Expertise */}
          <div className="mb-4">
            <h2 className="text-sm font-bold mb-2 text-gray-800 border-b-2 border-blue-600 pb-1">TECHNICAL SKILLS</h2>
            
            <div className="grid grid-cols-3 gap-3">
              <div>
                <h3 className="text-xs font-semibold text-gray-800 mb-1 bg-blue-100 px-2 py-1 rounded">INFRASTRUCTURE</h3>
                <ul className="text-xs space-y-0 ml-2">
                  <li>• Hypervisor & Containerization</li>
                  <li>• VM Networking</li>
                  <li>• Ansible, Tunneling</li>
                  <li>• Full Stack DevOps</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-800 mb-1 bg-blue-100 px-2 py-1 rounded">MACHINE LEARNING</h3>
                <ul className="text-xs space-y-0 ml-2">
                  <li>• Python, TypeScript, Bash</li>
                  <li>• PyTorch, TensorFlow</li>
                  <li>• vLLM, llama.cpp</li>
                  <li>• LoRA/PEFT</li>
                  <li>• Model Serving & Inference</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-800 mb-1 bg-blue-100 px-2 py-1 rounded">AI SYSTEMS</h3>
                <ul className="text-xs space-y-0 ml-2">
                  <li>• RAG</li>
                  <li>• Multi-Agent Orchestration</li>
                  <li>• Agentic Workflows</li>
                  <li>• Workflow Automation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Selected GenAI Projects */}
          <div className="mb-4">
            <h2 className="text-sm font-bold mb-2 text-gray-800 border-b-2 border-blue-600 pb-1">SELECTED GENAI PROJECTS</h2>
            <ul className="text-xs space-y-0 ml-2">
              <li>• <strong>Power Automate & n8n RAG Suite</strong> – Orchestrated integrated data sources as in consulting projects</li>

              <li>• <strong>Maiboli Programming Language</strong> – Marathi-based Python solution (<a href="https://ieeexplore.ieee.org/document/8973043" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">link</a>)</li>
            </ul>
          </div>

          {/* Professional Experience */}
          <div className="mb-4">
            <h2 className="text-sm font-bold mb-2 text-gray-800 border-b-2 border-blue-600 pb-1">AI & DATA EXPERIENCE</h2>
            
            {/* PwC */}
            <div className="mb-2">
              <h3 className="text-xs font-bold text-gray-800 mb-1">Associate Technology Consultant | Enterprise AI Solutions</h3>
              <div className="flex justify-between items-center mb-1">
                <p className="text-gray-600 text-xs">PwC Advisory - Luxembourg</p>
                <div className="text-right">
                  <p className="text-gray-600 text-xs">February 2023 – Present</p>
                  <p className="text-gray-500 text-xs italic">2 years 4 months</p>
                </div>
              </div>
              <ul className="text-xs space-y-0 ml-2">
                <li>• Developed enterprise-grade technical specifications for IBM CloudPak integration</li>
              </ul>
            </div>

            {/* Vodafone */}
            <div className="mb-2">
              <h3 className="text-xs font-bold text-gray-800 mb-1">AI Intern | Computer Vision Specialist</h3>
              <div className="flex justify-between items-center mb-1">
                <p className="text-gray-600 text-xs">Vodafone Procurement Company - Luxembourg</p>
                <div className="text-right">
                  <p className="text-gray-600 text-xs">October 2020 – September 2021</p>
                  <p className="text-gray-500 text-xs italic">1 year</p>
                </div>
              </div>
              <p className="font-semibold text-xs mb-1 text-blue-700">⭐ Flagship AI Project: Computer Vision for IC Detection</p>
              <ul className="text-xs space-y-0 ml-2">
                <li>• Implemented deep learning model for object detection achieving <strong>99.44% precision</strong></li>
                <li>• Contributed to CO2 emissions tracking software project (in partnership with KPMG)</li>
                <li>• Set up local development version control and backup system (GOGS - GIT)</li>
                <li>• Featured in European Business Review (<a href="https://www.europeanbusinessreview.com/powering-costing-with-artificial-intelligence-the-case-of-vodafone-procurement/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">link</a>)</li>
              </ul>
            </div>

            {/* Accenture */}
            <div className="mb-2">
              <h3 className="text-xs font-bold text-gray-800 mb-1">Application Development Associate | Data Migration Specialist</h3>
              <div className="flex justify-between items-center mb-1">
                <p className="text-gray-600 text-xs">Accenture France - Paris</p>
                <div className="text-right">
                  <p className="text-gray-600 text-xs">April 2022 – September 2022</p>
                  <p className="text-gray-500 text-xs italic">6 months</p>
                </div>
              </div>
              <ul className="text-xs space-y-0 ml-2">
                <li>• Designed and modelled business processes using BPMN and automated workflows using Python/VBA</li>
                <li>• Contributed to big data retail system implementation with large-scale legacy data migration</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h2 className="text-sm font-bold mb-1 text-gray-800 border-b-2 border-blue-600 pb-1">EDUCATION & RESEARCH</h2>
            <h3 className="text-xs font-bold text-gray-800">Master's in Information Systems (MIAGE)</h3>
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-xs">Université Toulouse 1 Capitole, France</p>
              <p className="text-gray-600 text-xs">2019 – 2022</p>
            </div>
            <div className="bg-green-50 p-1 rounded border-l-4 border-green-500 mb-1">
              <p className="font-semibold text-xs text-green-700">🎓 AI Research Thesis: <span className="italic">"Game Theory-Based AI Modeling of Open COVID-19 Data in France"</span></p>
              <p className="text-xs text-gray-600">Applied advanced AI modeling techniques to epidemiological data analysis</p>
            </div>
            <p className="text-xs"><strong>Coursework:</strong> AI Systems Architecture, Advanced Data Analysis, Business Intelligence, Cybersecurity</p>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default CV;