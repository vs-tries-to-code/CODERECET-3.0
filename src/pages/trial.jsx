export default function SponsorsSection() {
  return (
    <div
      id="sponsorship"
      className="min-h-screen w-screen bg-custom-black relative flex flex-col lg:grid lg:grid-cols-12 lg:p-6 lg:pr-20 lg:pl-10"
    >
      {/* Sponsors Section */}
      <h2 className="text-center text-5xl font-seasons_r text-custom-white">
        OUR <span className="text-custom-yellow">SPONSORS.</span>
      </h2>

      <div className="mt-6 flex flex-col items-center gap-4">
        {/* Sponsor Boxes */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-full max-w-3xl h-28 border border-yellow-500 rounded-lg flex items-center justify-center"
          >
            <img
              src="https://via.placeholder.com/300x100"
              alt="Sponsor Logo"
              className="h-20 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Community Partners Section */}
      <h2 className="text-center text-3xl font-semibold text-custom-white mt-12">
        COMMUNITY <span className="text-yellow-500">PARTNERS.</span>
      </h2>

      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-3xl h-28 border border-yellow-500 rounded-lg flex items-center justify-center">
          <img
            src="https://via.placeholder.com/300x100"
            alt="Community Partner Logo"
            className="h-20 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
