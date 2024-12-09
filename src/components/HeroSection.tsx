import Navbar from "./Navbar";
import bckgimg from "../assets/bckgimg.png";

const HeroSection = () => {
  return (
    <section
      className="relative bg-gray-900 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bckgimg})` }}
    >
      <Navbar />
      <main className="relative flex flex-col md:flex-row items-center justify-between text-white p-6 md:p-12 min-h-screen">
        <div className="max-w-md md:max-w-lg space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Redefining <span className="text-yellow-500 text-7xl">Luxury</span>{" "}
            Living in Hyderabad
          </h2>
          <p className="text-sm md:text-base text-gray-300">
            Exclusive luxury homes in Tellapur.
          </p>
          <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded shadow">
            Know More →
          </button>
        </div>

        <div className="mt-8 md:mt-0 bg-black/80 p-6 md:p-8 rounded-lg w-full max-w-sm">
          <h3 className="text-lg font-bold text-center text-yellow-500 mb-4">
            Get a Call Back
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:border-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:border-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:border-yellow-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded shadow"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
