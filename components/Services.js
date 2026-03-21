import { Shield, Brain, Code, Palette, Lightbulb, ShoppingCart } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Private AI & On-Premise Solutions',
      description: 'For organisations where data cannot leave the building. We design and deploy high-performance Linux servers with GPU acceleration, running open-source LLMs entirely within your own network. No cloud. No exposure. Full control.',
      featured: true,
    },
    {
      icon: Brain,
      title: 'AI Strategy & Agent Implementation',
      description: 'We help businesses understand where AI creates real value, then build and deploy multi-agent systems that automate complex workflows — from research and coding to content and data analysis.',
    },
    {
      icon: Code,
      title: 'Modern Web & Application Development',
      description: 'From static sites on Vercel to full-stack applications. We build fast, maintainable, modern web solutions — leaving behind legacy platforms like DNN where they belong.',
    },
    {
      icon: Palette,
      title: 'UI/UX & Product Design',
      description: 'Human-centred design that turns complex problems into elegant products. Strategy, prototyping, design systems and brand — delivered from our Berlin studio.',
    },
    {
      icon: Lightbulb,
      title: 'Technology Advisory',
      description: 'Senior counsel for technology decisions. Whether you are evaluating platforms, restructuring your tech stack, or planning a digital transformation — we\'ve seen it before.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce & Digital Growth',
      description: 'Six years running a live UK e-commerce business. We understand conversion, customer journeys, Shopify, and what actually drives online revenue — not just theory.',
    },
  ]

  return (
    <section id="services" className="section bg-navy-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`card ${service.featured ? 'ring-2 ring-amber' : ''}`}
              >
                <div className="flex items-center mb-4">
                  <Icon className="w-8 h-8 text-amber mr-3" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}