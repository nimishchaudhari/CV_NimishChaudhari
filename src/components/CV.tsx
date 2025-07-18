const CV = () => {
  return (
    <div className="bg-white shadow-lg mx-auto" style={{ 
      width: '210mm', 
      minHeight: '297mm',
      fontSize: '11pt',
      lineHeight: '1.4',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div className="p-8 max-w-full">
        {/* Header & Contact Section */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Nimish Chaudhari — Luxembourg · <a href="mailto:nimish.mailbox@gmail.com" className="text-blue-600">nimish.mailbox@gmail.com</a> · +33 (0)7 63 55 45 51 · <a href="https://github.com/nimishchaudhari" className="text-blue-600">GitHub</a> / <a href="https://linkedin.com/in/nimishchaudhari" className="text-blue-600">LinkedIn</a>
          </h1>
        </div>

        {/* Professional Summary */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-blue-600 mb-3 border-b border-blue-600 pb-1">PROFESSIONAL SUMMARY</h2>
          <p className="text-gray-700 leading-relaxed">
            Client-facing technology consultant specializing in production-grade deployments, with 3+ years transforming business processes. Engineered computer vision model pipeline at Vodafone reducing workflow from 2 weeks to 45 minutes (97% efficiency gain) via specialized component detection AI model, shipped it on AWS. Fluent in English and French.
          </p>
        </div>

        {/* Core Expertise */}
        <div className="mb-6">
          <div className="text-center bg-blue-50 py-2 px-4 rounded">
            <span className="text-gray-700 font-medium">RAG Workflows · LLM Finetuning · Edge AI · MLOps · Client Workshops · Multi-lingual EN/FR</span>
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-blue-600 mb-3 border-b border-blue-600 pb-1">TECHNICAL EXPERTISE</h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Model Development:</h3>
              <p className="text-gray-700">Python, PyTorch, TensorFlow, LangChain, Rust</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Deployment & Cloud:</h3>
              <p className="text-gray-700">Docker, AWS (EKS, S3, SageMaker), Azure ML, GitHub Actions, Power Automate</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Additional tools: Tableau, Power BI</p>
        </div>

        {/* Selected GenAI Projects */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-blue-600 mb-3 border-b border-blue-600 pb-1">SELECTED GENAI PROJECTS</h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">Orchestrated Power Automate & n8n RAG Suite – integrated data sources as in consulting projects</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">Finetuning Falcon-3B 1.58-bit – for function calling, based on edge AI focus</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">Implemented RecursiveNet-Rust from information theory paper</span>
            </li>
          </ul>
        </div>

        {/* Professional Experience */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-blue-600 mb-3 border-b border-blue-600 pb-1">PROFESSIONAL EXPERIENCE</h2>
          
          {/* PwC */}
          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-gray-800">Associate Technology Consultant</h3>
              <span className="text-gray-600">Feb. 2023 - Present</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-gray-600 italic">PwC Advisory - Luxembourg</span>
              <span className="text-gray-500 text-sm">2 years 4 months</span>
            </div>
            <ul className="space-y-1 ml-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Designed agentic RAG workflows for government clients serving 30,000+ Luxembourg users</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Led Ivalua P2P automation implementation, achieving 30% process optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Developed enterprise-grade technical specifications for IBM CloudPak integration</span>
              </li>
            </ul>
          </div>

          {/* Vodafone */}
          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-gray-800">AI Developer | Computer Vision Specialist</h3>
              <span className="text-gray-600">Oct. 2020 - Sept. 2021</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-gray-600 italic">Vodafone Procurement Company - Luxembourg (Design 2 cost)</span>
              <span className="text-gray-500 text-sm">1 year</span>
            </div>
            <div className="bg-yellow-50 p-2 rounded border-l-4 border-yellow-500 mb-2">
              <p className="font-semibold text-xs text-yellow-700">⭐ Flagship AI Project: Computer Vision for IC Detection</p>
            </div>
            <ul className="space-y-1 ml-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Engineered deep learning solution reducing process time from 2 weeks to 45 minutes (97% reduction)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Deployed containerized AI models on AWS EC2 with automated scaling</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Implemented MLOps pipeline with self-hosted Git (GOGS) and Python automation</span>
              </li>
            </ul>
          </div>

          {/* Accenture */}
          <div className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-gray-800">Application Development Associate</h3>
              <span className="text-gray-600">Apr. 2022 - Sept. 2022</span>
            </div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-gray-600 italic">Accenture France - Paris</span>
              <span className="text-gray-500 text-sm">6 months</span>
            </div>
            <ul className="space-y-1 ml-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Designed BPMN business process flows and automated workflows using Python/VBA</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Contributed to big data retail system implementation with large-scale legacy data migration</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Managed enterprise data migration projects across multiple client environments</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Open-Source & Community */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-blue-600 mb-3 border-b border-blue-600 pb-1">OPEN-SOURCE & COMMUNITY</h2>
          <ul className="space-y-1">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span className="text-gray-700">RecursiveNet-Rust: <a href="https://github.com/nimishchaudhari/RecursiveNet_rust" className="text-blue-600">https://github.com/nimishchaudhari/RecursiveNet_rust</a></span>
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-blue-600 mb-3 border-b border-blue-600 pb-1">EDUCATION</h2>
          <div className="mb-2">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-gray-800">Master's in Information Systems (MIAGE)</h3>
              <span className="text-gray-600">2019 - 2022</span>
            </div>
            <p className="text-gray-600 italic mb-1">Université Toulouse 1 Capitole, France</p>
            <p className="text-gray-700">Thesis: "Game Theory-Based AI Modeling of Open COVID-19 Data in France"</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-blue-600 mb-3 border-b border-blue-600 pb-1">CERTIFICATIONS</h2>
          <p className="text-gray-700">Azure AZ-900 · DP-100 | Ivalua Level 3 P2P/S2C</p>
        </div>

        {/* Languages */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-blue-600 mb-3 border-b border-blue-600 pb-1">LANGUAGES</h2>
          <p className="text-gray-700">English (C2), French (C1), Hindi/Marathi (native), Spanish (B1)</p>
        </div>
      </div>
    </div>
  );
};

export default CV;