import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#F9F5F3] px-6 py-12 text-[#6B6B6B] transition-colors duration-300 dark:bg-[#050505] dark:text-slate-400">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-sm">© {new Date().getFullYear()} Salaro — All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm transition-colors hover:text-[#1A1A1A] dark:hover:text-white">Privacy</Link>
            <Link href="/terms" className="text-sm transition-colors hover:text-[#1A1A1A] dark:hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
