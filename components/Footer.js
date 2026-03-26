export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gray-800 py-5">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center px-3">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2026 Salaro. All rights reserved. | Guildford, Surrey, UK
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a
              href="https://uk.linkedin.com/pub/salar-golestanian/1/178/778"
              className="text-gray-400 hover:text-amber transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}