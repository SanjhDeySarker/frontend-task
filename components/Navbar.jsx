export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
      <h1 className="text-xl font-bold">Brand</h1>
      <button className="hidden md:block bg-black text-white px-5 py-2 rounded-lg">
        Get Started
      </button>
    </nav>
  );
}
