import React from "react";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white">
      <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Manjeet Kumar</h1>
      <p className="text-xl mt-4">Frontend Developer | Learner | Coder</p>
      <a href="#projects" className="mt-6 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-700">
        View My Work
      </a>
    </section>
  );
};

export default Hero;
