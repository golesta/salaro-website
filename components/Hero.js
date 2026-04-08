export default function Hero() {
  return (
    <section id="hero" className="section min-h-[60vh] md:min-h-[80vh] lg:min-h-screen flex flex-col justify-end pt-[70px] pb-12 relative overflow-hidden">
      <video autoPlay muted loop className="absolute inset-0 w-full h-1/2 md:h-full object-cover z-0">
        <source src="/images/Salaro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="container relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 style={{ fontFamily: 'Kaipara Support', letterSpacing: '0.15em' }} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase text-white mb-6 leading-tight">
            30 years of technology.<br />
            <span className="block text-amber text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-[0.35em] uppercase mt-2">Now applied to AI.</span>
          </h1>
                    
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