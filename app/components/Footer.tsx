export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <a href="/" className="text-xl font-bold text-green-600">
              EarnOnline<span className="text-gray-900">.PK</span>
            </a>
            <p className="text-sm text-gray-500 mt-2">
              Complete guide to earning money online in Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-gray-500 hover:text-green-600">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm text-gray-500 hover:text-green-600">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Topics */}
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Topics</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog/fiverr-pakistan-beginners" className="text-sm text-gray-500 hover:text-green-600">
                  Fiverr Pakistan
                </a>
              </li>
              <li>
                <a href="/blog/upwork-profile-tips-pakistan" className="text-sm text-gray-500 hover:text-green-600">
                  Upwork Pakistan
                </a>
              </li>
              <li>
                <a href="/blog/payoneer-jazzcash-guide" className="text-sm text-gray-500 hover:text-green-600">
                  Payoneer to JazzCash
                </a>
              </li>
              <li>
                <a href="/blog/best-skills-pakistan-2026" className="text-sm text-gray-500 hover:text-green-600">
                  Best Skills 2026
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2026 EarnOnline.PK — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}