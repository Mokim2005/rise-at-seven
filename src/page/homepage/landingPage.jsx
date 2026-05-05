import React from "react";

const LandingPage = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/flight.jpg"  
          alt="bg"
          className="w-full h-full object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white px-4">

        {/* Top text */}
        <p className="text-xs md:text-sm tracking-wide mb-4 opacity-80">
          #1 MOST RECOMMENDED CONTENT MARKETING AGENCY
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-7xl font-bold leading-tight">
          We Create <br />
          Category
          <span className="inline-block mx-3 align-middle">
            <img
              src="/flight.jpg"
              alt="center"
              className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-xl"
            />
          </span>
          Leaders
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl opacity-80">
          on every searchable platform
        </p>

        {/* Bottom Left */}
        <div className="absolute bottom-6 left-6 text-left text-xs md:text-sm max-w-xs opacity-80">
          Organic media planners creating, distributing & optimising
          search-first content for SEO, Social, PR, AI and LLM search
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-6 right-6 text-right text-xs md:text-sm opacity-80">
          4 Global Offices serving <br />
          UK, USA (New York) & EU
        </div>

      </div>
    </section>
  );
};

export default LandingPage;