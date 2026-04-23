export default function NotFound() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>

      <a
        href="/"
        className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Go Back Home
      </a>
    </main>
  )
}