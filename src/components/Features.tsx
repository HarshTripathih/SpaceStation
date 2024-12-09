import duplex from "../assets/duplex.jpg";

const featuredCategories = [
  {
    title: "2 BHK",
    location: "Tellapur-Gachibowli, Hyderabad",
    area: "1315",
    image: duplex, // Replace with actual image path
  },
  {
    title: "2+1 BHK",
    location: "Tellapur-Gachibowli, Hyderabad",
    area: "1410-1497",
    image: duplex, // Replace with actual image path
  },
  {
    title: "3 BHK",
    location: "Tellapur-Gachibowli, Hyderabad",
    area: "1675-2297",
    image: duplex, // Replace with actual image path
  },
  {
    title: "Duplex",
    location: "Tellapur-Gachibowli, Hyderabad",
    area: "3751-4112",
    image: duplex, // Replace with actual image path
  },
  {
    title: "Duplex",
    location: "Tellapur-Gachibowli, Hyderabad",
    area: "3751-4112",
    image: duplex, // Replace with actual image path
  },
  {
    title: "Duplex",
    location: "Tellapur-Gachibowli, Hyderabad",
    area: "3751-4112",
    image: duplex, // Replace with actual image path
  },
  {
    title: "Duplex",
    location: "Tellapur-Gachibowli, Hyderabad",
    area: "3751-4112",
    image: duplex, // Replace with actual image path
  },
  {
    title: "Duplex",
    location: "Tellapur-Gachibowli, Hyderabad",
    area: "3751-4112",
    image: duplex, // Replace with actual image path
  },
];

const Features = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Featured Categories
          </h2>
          <button className="text-gray-600 hover:text-gray-800 font-semibold flex items-center">
            View All Categories →
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {featuredCategories.map((category, index) => (
            <div
              key={index}
              className="min-w-[280px] md:min-w-[320px] bg-white shadow-md rounded-lg overflow-hidden flex-shrink-0"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600">{category.location}</p>
                <p className="text-sm text-gray-600">Area: {category.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
