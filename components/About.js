export default function About() {
  return (
    <section id="about" className="section bg-navy">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Salaro</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Salaro was founded by Salar Golestanian, a physicist turned software developer turned AI consultant — based in Woking, Surrey.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With an MPhil in Physics from Brunel University and over 30 years building technology solutions across the UK, Europe and beyond, Salar brings an unusual combination of scientific rigour, commercial experience and hands-on technical delivery.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              From semiconductor research to DNN and WordPress platforms, from iOS and Android apps to natural resources finance — and now to AI agent systems and on-premise LLM deployments — the thread has always been the same: understand the problem deeply, then build the right solution.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Salaro works with a trusted network of designers, developers and consultants across Guildford, Berlin and Pondicherry — bringing the right people to each engagement without the overhead of a large agency.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="card text-center">
              <div className="text-3xl font-bold text-amber mb-2">30+</div>
              <div className="text-gray-300">Years experience</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-amber mb-2">4</div>
              <div className="text-gray-300">Countries active</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-amber mb-2">£500k+</div>
              <div className="text-gray-300">E-commerce managed</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-amber mb-2">1</div>
              <div className="text-gray-300">Book in progress (Quantime)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}