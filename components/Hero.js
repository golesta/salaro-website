export default function Hero() {
  return (
    <section id="hero" className="section min-h-screen flex items-center bg-gradient-to-br from-navy via-navy-light to-navy">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            30 years of technology.<br />
            <span className="text-amber">Now applied to AI.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            We help businesses navigate complexity — from AI strategy and private deployments to modern web and capital advisory. Consulting across Surrey, Berlin and Pondicherry.
          </p>
          
          <div className="mb-12">
            <a href="#contact" className="btn-primary inline-block">
              Get in Touch
            </a>
          </div>
          
          <p className="text-lg text-gray-400">
            Trusted by businesses across the UK, Europe and beyond since 1995
          </p>
        </div>
      </div>
    </section>
  )
}