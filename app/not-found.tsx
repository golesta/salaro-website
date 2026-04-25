import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full">
        <p className="text-xs font-mono text-fg-mute mb-4">404</p>
        <h1 className="text-4xl font-semibold mb-4">Page not found.</h1>
        <p className="text-fg-mute mb-8">The page you're looking for doesn't exist or has moved.</p>
        <Link href="/" className="text-sm text-accent hover:underline">Back to home</Link>
      </div>
    </div>
  );
}
