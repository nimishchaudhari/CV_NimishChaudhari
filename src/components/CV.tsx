// Icons removed for ATS compatibility

const CV = () => {
  return (
    <div className="bg-white shadow-lg mx-auto cv-container" style={{ 
      width: '210mm', 
      height: 'auto',
      maxHeight: '297mm',
      fontSize: '10px',
      lineHeight: '1.2',
      fontFamily: 'Calibri, Arial, Helvetica, sans-serif'
    }}>
      <div className="flex h-full">
        {/* Left Sidebar */}
        <div className="w-64 bg-gradient-to-br from-blue-50 to-indigo-100 p-5 border-r-2 border-blue-200">
          
          {/* Name and Title */}
          <div className="mb-5">
            <h1 className="text-xl font-bold mb-1 text-gray-800">Nimish CHAUDHARI</h1>
            <p className="text-gray-700 text-xs leading-relaxed">AI Infrastructure Engineer</p>
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
              CERTIFICATIONS & TRAINING
            </h3>
            <div className="space-y-2">
              <div className="bg-white rounded p-2 shadow-sm">
                <p className="text-xs font-semibold text-blue-700">Microsoft Azure</p>
                <p className="text-xs text-gray-600">• Azure Fundamentals (AZ-900)</p>
                <p className="text-xs text-gray-600">• Azure Data Scientist (DP-100)</p>
              </div>
              <div className="bg-white rounded p-2 shadow-sm">
                <p className="text-xs font-semibold text-blue-700">AI Security</p>
                <p className="text-xs text-gray-600">• LLM Red Teaming & Jailbreak Benchmarking (PwC)</p>
              </div>
            </div>
          </div>

          {/* Key Attributes */}
          <div className="mb-5">
            <h3 className="text-sm font-bold mb-3 text-gray-800">
              KEY ATTRIBUTES
            </h3>
             <ul className="text-xs space-y-1 ml-2">
              <li>• Client Relationship Management</li>
              <li>• Fast Learner</li>
              <li>• Technical Troubleshooting</li>
              <li>• Cross-functional Collaboration</li>
              <li>• Stakeholder Communication (Non-Technical)</li>
              <li>• Technical Documentation</li>
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
              <li>• Self hosting</li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4" style={{ fontSize: '10px' }}>
          
          {/* Professional Summary */}
          <div className="mb-3 bg-gradient-to-r from-blue-50 to-indigo-50 p-2 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-sm font-bold mb-1 text-gray-800">PROFESSIONAL SUMMARY</h2>
            <p className="text-xs text-gray-700 leading-snug">
              AI Infrastructure Engineer focused on sovereign AI deployment and production-ready systems. I bridge local AI and cloud infrastructure — deploying LLMs on-premise and in-cloud with vLLM and llama.cpp, with security benchmarking and automation that balance performance, cost, and data sovereignty.
            </p>
          </div>

          {/* Technical Expertise */}
          <div className="mb-3">
            <h2 className="text-sm font-bold mb-1 text-gray-800 border-b-2 border-blue-600 pb-1">TECHNICAL SKILLS</h2>
            
            <div className="grid grid-cols-3 gap-2">
              <div>
                <h3 className="text-xs font-semibold text-gray-800 mb-1 bg-blue-100 px-2 py-1 rounded">CLOUD & INFRASTRUCTURE</h3>
                <ul className="text-xs space-y-0 ml-2">
                  <li>• Azure, AWS, GCP</li>
                  <li>• Docker, Containerization</li>
                  <li>• Terraform, Ansible (IaC)</li>
                  <li>• CI/CD, DevOps Pipelines</li>
                  <li>• Proxmox, VM Networking, Coolify</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-800 mb-1 bg-blue-100 px-2 py-1 rounded">AI ENGINEERING</h3>
                <ul className="text-xs space-y-0 ml-2">
                  <li>• Python, TypeScript, Bash</li>
                  <li>• LLM Deployment (vLLM, llama.cpp)</li>
                  <li>• RAG, Prompt Orchestration</li>
                  <li>• LoRA/PEFT Fine-tuning</li>
                  <li>• Model Serving & Benchmarking</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold text-gray-800 mb-1 bg-blue-100 px-2 py-1 rounded">AI SECURITY</h3>
                <ul className="text-xs space-y-0 ml-2">
                  <li>• AI Security Benchmarking & Red Teaming</li>
                  <li>• LLM Jailbreak Testing & Evaluation</li>
                  <li>• Prompt Injection Analysis</li>
                  <li>• Secure Cloud Infrastructure</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Selected GenAI Projects */}
          <div className="mb-3">
            <h2 className="text-sm font-bold mb-1 text-gray-800 border-b-2 border-blue-600 pb-1">PROJECTS</h2>
            <ul className="text-xs space-y-0 ml-2">
              <li>• <strong>AI Security Benchmarking Framework</strong> — Jailbreak evaluation across 3 benchmarks (300 prompts/model) on Qwen, Gemma, Minimax, Kimi — TTFT, throughput, and safety scores for sovereign AI provider selection</li>
              <li>• <strong>Self-Hosted LLM/HPC Infrastructure</strong> — Containerized LLM services (vLLM, llama.cpp) with GPU optimization, quantization, and autoscaling</li>
              <li>• <strong>Proxmox Home Lab</strong> — Self-hosted stack (Proxmox, Coolify, Docker): containerized services, VM networking, IaC workflows</li>
              <li>• <strong>Local AI Deployment Pipeline</strong> — End-to-end sovereign AI: model selection, LoRA fine-tuning, inference optimization, monitoring</li>
            </ul>
          </div>

          {/* Professional Experience */}
          <div className="mb-3">
            <h2 className="text-sm font-bold mb-1 text-gray-800 border-b-2 border-blue-600 pb-1">AI & DATA EXPERIENCE</h2>
            
            {/* PwC */}
            <div className="mb-1">
              <h3 className="text-xs font-bold text-gray-800 mb-1">Technology Consultant | AI & Cloud Infrastructure</h3>
              <div className="flex justify-between items-center mb-1">
                <p className="text-gray-600 text-xs">PwC Advisory - Luxembourg</p>
                <div className="text-right">
                  <p className="text-gray-600 text-xs">February 2023 – Present</p>
                  <p className="text-gray-500 text-xs italic">3 years</p>
                </div>
              </div>
              <ul className="text-xs space-y-0 ml-2">
                <li>• Led client-facing enterprise AI evaluations — RFI/RFP assessment, maturity analysis, vendor benchmarking; translated findings for non-technical stakeholders</li>
                <li>• Deployed self-hosted LLM infrastructure (vLLM, llama.cpp) with GPU optimization, quantization, and containerized orchestration</li>
                <li>• Built an AI security benchmarking framework for sovereign AI provider selection — jailbreak evaluation, TTFT/throughput, and safety scoring across open-weight models</li>
                <li>• Designed LLM pipelines (RAG, serving, benchmarking) and automated infrastructure with AI-driven agents (Ansible, Docker, Coolify)</li>
              </ul>
            </div>

            {/* Vodafone */}
            <div className="mb-1">
              <h3 className="text-xs font-bold text-gray-800 mb-1">AI Development Intern | Computer Vision</h3>
              <div className="flex justify-between items-center mb-1">
                <p className="text-gray-600 text-xs">Vodafone Procure & Connect (D2C Lab) - Luxembourg</p>
                <div className="text-right">
                  <p className="text-gray-600 text-xs">October 2020 – September 2021</p>
                  <p className="text-gray-500 text-xs italic">1 year</p>
                </div>
              </div>
              <ul className="text-xs space-y-0 ml-2">
                <li>• Deep learning computer vision for electronic component identification — model design, AWS EC2 deployment, and a GUI for non-technical users</li>
                <li>• Achieved <strong>99.44% precision</strong> in object detection for chipsets and motherboards</li>
                <li>• Featured in European Business Review (<a href="https://www.europeanbusinessreview.com/powering-costing-with-artificial-intelligence-the-case-of-vodafone-procurement/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">link</a>)</li>
              </ul>
            </div>

            {/* Accenture */}
            <div className="mb-1">
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
          <div className="mb-3">
            <h2 className="text-sm font-bold mb-1 text-gray-800 border-b-2 border-blue-600 pb-1">EDUCATION & RESEARCH</h2>
            <h3 className="text-xs font-bold text-gray-800">Master's in Information Systems (MIAGE)</h3>
            <div className="flex justify-between items-center">
              <p className="text-gray-600 text-xs">Université Toulouse 1 Capitole, France</p>
              <p className="text-gray-600 text-xs">2019 – 2022</p>
            </div>
            <p className="text-xs"><strong>Coursework:</strong> AI Systems Architecture, Advanced Data Analysis, Business Intelligence</p>
            <h3 className="text-xs font-bold text-gray-800 mt-2">Bachelor's in Computer Science</h3>
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