// Icons removed for ATS compatibility

const CV = () => {
  return (
    <div className="bg-white shadow-lg mx-auto cv-container" style={{ 
      width: '210mm', 
      height: 'auto',
      maxHeight: '297mm',
      fontSize: '10px',
      lineHeight: '1.25',
      fontFamily: 'Calibri, Arial, Helvetica, sans-serif'
    }}>
      <div className="flex h-full">
        {/* Left Sidebar */}
        <div className="w-64 bg-gradient-to-br from-blue-50 to-indigo-100 p-5 border-r-2 border-blue-200">
          
          {/* Name and Title */}
          <div className="mb-5">
            <h1 className="text-xl font-bold mb-1 text-gray-800">Nimish CHAUDHARI</h1>
            <p className="text-gray-700 text-xs leading-relaxed">AI & ML Solution Engineer</p>
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

          {/* Certifications */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-gray-800">
              CERTIFICATIONS
            </h3>
            <div className="space-y-2">
              <div className="bg-white rounded p-2 shadow-sm">
                <p className="text-xs font-semibold text-blue-700">Microsoft Azure</p>
                <p className="text-xs text-gray-600">• Azure Fundamentals (AZ-900)</p>
                <p className="text-xs text-gray-600">• Azure Data Scientist (DP-100)</p>
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-gray-800">
              SOFT SKILLS
            </h3>
             <ul className="text-xs space-y-1 ml-2">
              <li>• Client-facing Consulting</li>
              <li>• Presentation & Communication</li>
              <li>• Training & Knowledge Transfer</li>
              <li>• Cross-functional Collaboration</li>
              <li>• Problem Solving & Analysis</li>
              <li>• Stakeholder Management</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-gray-800">LANGUAGES</h3>
            <div className="space-y-2">
              <div>
                <p className="text-xs font-medium mb-1">English - C1</p>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-blue-600 h-1 rounded-full w-5/6"></div>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium mb-1">French - B2</p>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-blue-600 h-1 rounded-full w-4/6"></div>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium mb-1">Hindi - Native</p>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-blue-600 h-1 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium mb-1">Spanish - B1</p>
                <div className="w-full bg-gray-300 rounded-full h-1">
                  <div className="bg-blue-600 h-1 rounded-full w-3/6"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-sm font-bold mb-3 text-gray-800">INTERESTS</h3>
            <ul className="text-xs space-y-1 text-gray-700">
              <li>• Starcraft 2</li>
              <li>• Running</li>
              <li>• Self-hosting</li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-5" style={{ fontSize: '10px' }}>
          
          {/* Professional Summary */}
          <div className="mb-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-sm font-bold mb-2 text-gray-800">PROFESSIONAL SUMMARY</h2>
             <p className="text-xs text-gray-700 leading-relaxed">
              AI & ML Solution Engineer who bridges client requirements and scalable AI/HPC solutions. Experienced in AI/ML model development, deployment, and benchmarking on cloud and self-hosted infrastructure. I design tailored architectures, deliver hands-on demonstrations, and support pre-sales engagement. Focused on making advanced computing platforms accessible and impactful for real-world workloads.
            </p>
          </div>

          {/* Technical Expertise */}
          <div className="mb-4">
            <h2 className="text-sm font-bold mb-2 text-gray-800 border-b-2 border-blue-600 pb-1">TECHNICAL SKILLS</h2>
            
            <div className="grid grid-cols-3 gap-3">
              <div>
                <h3 className="text-xs font-semibold text-gray-800 mb-1 bg-blue-100 px-2 py-1 rounded">AI & ML</h3>
                <ul className="text-xs space-y-0 ml-2">
                  <li>• PyTorch, TensorFlow</li>
                  <li>• LLM Fine-tuning, LoRA/PEFT</li>
                  <li>• Model Serving (vLLM, llama.cpp)</li>
                  <li>• RAG, Prompt Orchestration</li>
                  <li>• Computer Vision, DL</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-800 mb-1 bg-blue-100 px-2 py-1 rounded">INFRASTRUCTURE</h3>
                <ul className="text-xs space-y-0 ml-2">
                  <li>• Cloud (AWS, Azure, GCP)</li>
                  <li>• Self-hosted HPC/LLM Infra</li>
                  <li>• Containerization, Docker</li>
                  <li>• DevOps, CI/CD, GitHub</li>
                  <li>• Hypervisor, VM Networking</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-800 mb-1 bg-blue-100 px-2 py-1 rounded">ENGINEERING</h3>
                <ul className="text-xs space-y-0 ml-2">
                  <li>• Python, TypeScript, Bash</li>
                  <li>• Microsoft Copilot & Studio</li>
                  <li>• Power Automate</li>
                  <li>• Solution Architecture</li>
                  <li>• Training & Knowledge Transfer</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Selected GenAI Projects */}
          <div className="mb-4">
            <h2 className="text-sm font-bold mb-2 text-gray-800 border-b-2 border-blue-600 pb-1">PROJECTS</h2>
            <ul className="text-xs space-y-0 ml-2">
              <li>• <strong>Self-Hosted LLM/HPC Infrastructure</strong> – Designed and deployed containerized LLM services (vLLM, llama.cpp) with benchmarking, CI/CD, and autoscaling</li>
              <li>• <strong>AI/ML Model Development Pipeline</strong> – End-to-end LLM pipelines: RAG, fine-tuning, prompt orchestration, evaluation benchmarks</li>
              <li>• <strong>Enterprise AI Solutions</strong> – Copilot Studio & Power Automate integrations for consulting clients</li>
              <li>• <strong>Maiboli Programming Language</strong> – Marathi-based Python solution (<a href="https://ieeexplore.ieee.org/document/8973043" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">link</a>)</li>
            </ul>
          </div>

          {/* Professional Experience */}
          <div className="mb-4">
            <h2 className="text-sm font-bold mb-2 text-gray-800 border-b-2 border-blue-600 pb-1">AI & DATA EXPERIENCE</h2>
            
            {/* PwC */}
            <div className="mb-2">
              <h3 className="text-xs font-bold text-gray-800 mb-1">Technology Consultant | AI & Enterprise Solutions</h3>
              <div className="flex justify-between items-center mb-1">
                <p className="text-gray-600 text-xs">PwC Advisory - Luxembourg</p>
                <div className="text-right">
                  <p className="text-gray-600 text-xs">February 2023 – Present</p>
                  <p className="text-gray-500 text-xs italic">3 years</p>
                </div>
              </div>
              <ul className="text-xs space-y-0 ml-2">
                <li>• AI/ML model development and deployment — RAG, fine-tuning, prompt orchestration, evaluation benchmarks</li>
                <li>• Designed and delivered tailored AI solutions for enterprise clients in consulting engagements</li>
                <li>• Client-facing consulting: requirements gathering, solution design, pre-sales technical support</li>
                <li>• Self-hosted LLM/HPC infrastructure with containerization, benchmarking, and CI/CD</li>
                <li>• Conducted training sessions and knowledge transfer on AI/ML platforms and best practices</li>
                <li>• Copilot Studio & Power Automate solution architecture for enterprise workflows</li>
              </ul>
               <p className="font-semibold text-xs mt-1 text-blue-700">🏆 AI/ML model development → architecture design → client delivery → infrastructure deployment</p>
            </div>

            {/* Vodafone */}
            <div className="mb-2">
              <h3 className="text-xs font-bold text-gray-800 mb-1">AI Development Intern | Computer Vision</h3>
              <div className="flex justify-between items-center mb-1">
                <p className="text-gray-600 text-xs">Vodafone Procure & Connect (D2C Lab) - Luxembourg</p>
                <div className="text-right">
                  <p className="text-gray-600 text-xs">October 2020 – September 2021</p>
                  <p className="text-gray-500 text-xs italic">1 year</p>
                </div>
              </div>
              <ul className="text-xs space-y-0 ml-2">
                <li>• Deep Learning for Electronic Component Identification — 99.44% precision on chipsets and motherboards</li>
                <li>• Designed DL approach, implemented algorithm, deployed on AWS EC2</li>
                <li>• Built GUI for non-technical users</li>
                <li>• Featured in European Business Review (<a href="https://www.europeanbusinessreview.com/powering-costing-with-artificial-intelligence-the-case-of-vodafone-procurement/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">link</a>)</li>
              </ul>
              <p className="font-semibold text-xs mt-1 text-blue-700">🏆 End-to-end full-stack computer vision pipeline with cloud services</p>
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
                <li>• Designed business processes with BPMN, automated workflows with Python/VBA</li>
                <li>• Big data retail system implementation with large-scale legacy data migration</li>
              </ul>
              <p className="font-semibold text-xs mt-1 text-blue-700">🏆 Successful first experience in retail software migration working full-time in French</p>
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
            <p className="text-xs"><strong>Coursework:</strong> AI Systems Architecture, Advanced Data Analysis, Business Intelligence, Cybersecurity</p>
            <h3 className="text-xs font-bold text-gray-800 mt-3">Bachelor's in Computer Science</h3>
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-xs">University of Mumbai, India</p>
              <p className="text-gray-600 text-xs">2016 – 2019</p>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default CV;