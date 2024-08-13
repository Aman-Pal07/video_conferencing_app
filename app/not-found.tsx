// app/not-found.js (or pages/404.js depending on your routing setup)

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold animate-bounce mb-8">404</h1>
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors duration-300"
        >
          Go Back Home
        </a>
      </div>
      <div className="mt-12">
        <img
          src="/images/404-illustration.svg"
          alt="404 Illustration"
          className="w-64 md:w-96 mx-auto animate-pulse"
        />
      </div>
    </div>
  );
}
