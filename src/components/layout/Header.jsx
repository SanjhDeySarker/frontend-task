export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Brand</h1>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:text-primary">Home</a>
          <a href="#" className="hover:text-primary">Features</a>
          <a href="#" className="hover:text-primary">Contact</a>
        </nav>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm">
          Get Started
        </button>
      </div>
    </header>
  );
}
