export default function Team() {
  const team = [
    {
      name: 'Salar Golestanian',
      role: 'Founder & Lead Consultant',
      location: 'Guildford, Surrey, UK',
      description: 'MPhil Physics, Brunel University. 30+ years in technology, software, e-commerce and AI. Specialist in on-premise AI deployments and technology strategy.',
      linkedin: 'https://uk.linkedin.com/pub/salar-golestanian/1/178/778',
    },
    {
      name: 'Abi Golestanian',
      role: 'Design Lead & Strategy Consultant',
      location: 'Berlin, Germany',
      description: '14 years experience in product design, brand strategy and UX. Former Accenture management consultant. Works in English, German and French.',
      website: 'https://www.abigolestanian.com/',
    },
    {
      name: 'Delivery & Development Team',
      role: '',
      location: 'Pondicherry, India',
      description: 'Our India-based delivery team handles graphics, video production, front-end development and mobile applications — providing high-quality output at scale.',
    },
  ]

  return (
    <section id="team" className="section bg-navy">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
          <p className="text-xl text-gray-300">
            A small, trusted network of experienced people — across three locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="card text-center">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              {member.role && (
                <p className="text-amber font-medium mb-2">{member.role}</p>
              )}
              <p className="text-gray-400 mb-4">{member.location}</p>
              <p className="text-gray-300 leading-relaxed mb-4">{member.description}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  className="text-amber hover:text-amber-light transition-colors duration-200 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              )}
              {member.website && (
                <a
                  href={member.website}
                  className="text-amber hover:text-amber-light transition-colors duration-200 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}