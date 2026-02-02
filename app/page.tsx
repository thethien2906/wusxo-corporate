export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold tracking-tight text-blue-500">
        Next.js + Tailwind CSS v4
      </h1>
      <p className="mt-4 text-lg text-gray-400">
        If you see this, the setup is working correctly!
      </p>
      <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-xl border border-gray-700">
        <p className="font-mono text-sm text-green-400">@import "tailwindcss";</p>
      </div>
    </div>
  );
}
