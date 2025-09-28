export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-xl mb-8">The page you're looking for doesn't exist.</p>
        <a 
          href="/"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
