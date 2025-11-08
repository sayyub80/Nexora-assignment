import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-900 shadow-xl lg:h-[500px]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2850&q=80"
          alt="Fashion models"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/80 via-gray-900/50 to-transparent" />
      </div>
      <div className="relative flex h-full flex-col justify-center p-8 lg:w-1/2 lg:p-12">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Where Vibes Meet Fashion
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Ditch the endless scrolls. Discover hyper-personalized fashion,
          beauty, and lifestyle picks powered by AI.
        </p>
        <a
          href="#products"
          className="mt-10 inline-block w-full max-w-xs rounded-lg bg-indigo-600 px-8 py-3 text-center text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg"
        >
          Explore Collection
        </a>
      </div>
    </div>
  );
};

export default Hero;
