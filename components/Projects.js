export default function Projects() {
  const projects = [
    {
      title: 'Clever Botanics',
      url: 'cleverbotanics.com',
      description: 'UK hemp and CBD wellness e-commerce. Founded and built on Shopify, running for 6 years with over 2,400 five-star Trustpilot reviews and peak turnover of £500k. Still active.',
      tag: 'E-Commerce',
    },
    {
      title: 'HBM Partners',
      url: 'hbm.salaro.com',
      description: 'Natural resources capital advisory. Structuring debt and equity for oil, gas, mining and renewables projects across Europe, Africa and the Middle East. $300M+ in structured transactions.',
      tag: 'Finance & Advisory',
    },
    {
      title: 'Askdroid',
      url: 'askdroid.com',
      description: 'A global directory of AI tools, robotics companies, developers and solutions. Currently in development — planned as a comprehensive resource for the AI and robotics industry.',
      tag: 'In Development',
    },
    {
      title: 'Properties.co.uk',
      url: 'properties.co.uk',
      description: 'UK directory of property-related businesses, agents and services. A long-standing domain and directory asset being redeveloped.',
      tag: 'Property',
    },
    {
      title: 'Quantime',
      url: null,
      description: 'A book bridging quantum mechanics and general relativity — with time as the central unifying concept. An MPhil in physics, decades of thinking, nearly complete.',
      tag: 'Research & Publishing',
    },
    {
      title: 'Salaro Legacy',
      url: 'salaro.com (legacy)',
      description: 'Over 20 years of client delivery across web, mobile, DNN, WordPress, e-commerce and digital marketing — from Surrey to London and internationally.',
      tag: 'Consulting',
    },
  ]

  return (
    <section id="projects" className="section bg-navy-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Projects</h2>
          <p className="text-xl text-gray-300">
            A portfolio built over three decades — across technology, e-commerce, finance and research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <div className="mb-4">
                <span className="inline-block bg-amber/20 text-amber px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {project.tag}
                </span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                {project.url && (
                  <a
                    href={`https://${project.url}`}
                    className="text-amber hover:text-amber-light transition-colors duration-200 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.url}
                  </a>
                )}
              </div>
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}