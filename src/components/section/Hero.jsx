export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-12 py-20 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-4">
          Build Modern Websites Faster
        </h2>
        <p className="text-gray mb-6">
          Pixel-perfect React UI built directly from the Figma design.
          Fully responsive across all devices.
        </p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg">
          Learn More
        </button>
      </div>
      <div>
        <img
          src="https://via.placeholder.com/500x350"
          alt="Hero"
          className="w-full"
        />
      </div>
    </section>
  );
}
