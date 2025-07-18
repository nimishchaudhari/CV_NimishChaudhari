const CV = () => {
  return (
    <div className="bg-white shadow-lg mx-auto" style={{ 
      width: '210mm', 
      minHeight: '297mm',
      fontSize: '11pt',
      lineHeight: '1.4',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div className="p-6">
        {/* Header & Contact Section - Single Line */}
        <div className="text-center mb-6">
          <h1 className="text-lg font-bold text-gray-900 mb-2">
            Nimish Chaudhari — Luxembourg · <a href="mailto:nimish.mailbox@gmail.com" className="text-blue-600 hover:underline">nimish.mailbox@gmail.com</a> · +33 (0)7 63 55 45 51 · <a href="https://github.com/nimishchaudhari" className="text-blue-600 hover:underline">GitHub</a> / <a href="https://www.linkedin.com/in/nimishchaudhari/" className="text-blue-600 hover:underline">LinkedIn</a>
          </h1>
        </div>

        {/* Professional Summary Section - 4 concise lines */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-blue-600" style={{ fontSize: '14pt' }}>Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Client-facing technology consultant specializing in production-grade deployments, with 3+ years transforming business processes. 
            Engineered computer vision model pipeline at Vodafone reducing workflow from 2 weeks to 45 minutes (97% efficiency gain) via specialized component detection AI model, shipped it on AWS. 
            Fluent in English and French.
          </p>
        </div>

        {/* Core Expertise / Skill Matrix Section - Single Horizontal Row */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm">RAG Workflows</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm">LLM Finetuning</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm">Edge AI</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm">MLOps</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm">Client Workshops</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm">Multi-lingual EN/FR</span>
          </div>
        </div>

        {/* Technical Expertise Section - Two Columns */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-blue-600" style={{ fontSize: '14pt' }}>Technical Expertise</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-bold mb-2 text-gray-800">Model Development</h3>
              <p className="text-gray-700">Python, PyTorch, TensorFlow, LangChain</p>
            </div>
            <div>
              <h3 className="text-base font-bold mb-2 text-gray-800">Deployment & Cloud</h3>
              <p className="text-gray-700">Docker, AWS (EKS, S3, SageMaker), Azure ML, GitHub Actions, Power Automate</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3">Additional tools: Tableau, Power BI. Programming: Rust (RecursiveNet project).</p>
        </div>

        {/* Selected GenAI Projects Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-blue-600" style={{ fontSize: '14pt' }}>Selected GenAI Projects</h2>
          <ul className="space-y-2">
            <li className="text-gray-700">• Orchestrated Power Automate & n8n RAG Suite – integrated data sources as in consulting projects.</li>
            <li className="text-gray-700">• Finetuning Falcon-3B 1.58-bit – for function calling, based on edge AI focus.</li>
            <li className="text-gray-700">• Implemented RecursiveNet-Rust from information theory paper.</li>
          </ul>
        </div>

        {/* Professional Experience Section - Reverse Chronology */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-blue-600" style={{ fontSize: '14pt' }}>Professional Experience</h2>
          
          {/* PwC - Most Recent */}
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-base font-bold text-gray-800">Associate Technology Consultant</h3>
                <p className="text-gray-600">PwC Advisory - Luxembourg</p>
              </div>
              <p className="text-gray-600 text-sm">Feb. 2023 - Present</p>
            </div>
            <ul className="space-y-1 ml-4">
              <li className="text-gray-700">• Designed agentic RAG workflows for government clients with 30k+ Luxembourg users</li>
              <li className="text-gray-700">• Led Ivalua P2P automation implementation, achieving 30% process optimization</li>
              <li className="text-gray-700">• Developed enterprise-grade technical specifications for IBM CloudPak integration</li>
            </ul>
          </div>

          {/* Accenture */}
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-base font-bold text-gray-800">Application Development Associate</h3>
                <p className="text-gray-600">Accenture France - Paris</p>
              </div>
              <p className="text-gray-600 text-sm">Apr. 2022 - Sept. 2022</p>
            </div>
            <ul className="space-y-1 ml-4">
              <li className="text-gray-700">• Designed BPMN business process flows for large-scale retail data migration</li>
              <li className="text-gray-700">• Automated workflows using Python/VBA for legacy system integration</li>
              <li className="text-gray-700">• Contributed to big data retail system implementation with enterprise-scale data migration</li>
            </ul>
          </div>

          {/* Vodafone */}
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-base font-bold text-gray-800">AI Developer | Computer Vision Specialist</h3>
                <p className="text-gray-600">Vodafone Procurement Company - Luxembourg</p>
              </div>
              <p className="text-gray-600 text-sm">Oct. 2020 - Sept. 2021</p>
            </div>
            <ul className="space-y-1 ml-4">
              <li className="text-gray-700">• Cut invoice-processing time 97% by containerizing CV models on AWS EC2 GPUs using YOLOv5 and OpenCV</li>
              <li className="text-gray-700">• Implemented MLOps pipeline with self-hosted Git (GOGS) and Python automation</li>
              <li className="text-gray-700">• Created comprehensive AI documentation and knowledge transfer protocols</li>
            </ul>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-blue-600" style={{ fontSize: '14pt' }}>Certifications</h2>
          <p className="text-gray-700">Azure AZ-900 · DP-100 | Ivalua Level 3 P2P/S2C</p>
        </div>

        {/* Open-Source & Community Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-blue-600" style={{ fontSize: '14pt' }}>Open-Source & Community</h2>
          <p className="text-gray-700">RecursiveNet-Rust (https://github.com/nimishchaudhari/RecursiveNet_rust)</p>
        </div>

        {/* Education Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-blue-600" style={{ fontSize: '14pt' }}>Education</h2>
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-base font-bold text-gray-800">MSc in Data Science</h3>
              <p className="text-gray-600">University of Liverpool</p>
            </div>
          </div>
          <p className="text-gray-700">Thesis achieved 0.82 AUC forecasting infection peaks</p>
        </div>

        {/* Languages Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3 text-blue-600" style={{ fontSize: '14pt' }}>Languages</h2>
          <p className="text-gray-700">English (C2), French (C1), Hindi/Marathi (native), Spanish (B1)</p>
        </div>
      </div>
    </div>
  );
};

export default CV;
