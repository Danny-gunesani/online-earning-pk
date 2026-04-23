export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-green-600">
          EarnOnline<span className="text-gray-900">.PK</span>
        </a>

        <nav className="flex items-center gap-6">
          <a href="/" className="text-sm text-gray-600 hover:text-green-600 transition">
            Home
          </a>

          <a href="/blog" className="text-sm text-gray-600 hover:text-green-600 transition">
            Blog
          </a>

          <a
            href="/blog/best-skills-pakistan-2026"
            className="text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  )
}