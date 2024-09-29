"use client";
import Footer from "@/components/Footer";
import Connect from "@/sections/Connect";
import Image from "next/image";
import { projects_data } from "@/utils/data";
import { motion } from "framer-motion";
import React from "react";

const tech_stack = [
  "HTML/CSS/TailwindCSS",
  "JavaScript",
  "ReactJs with TypeScript",
  "Redux",
  "Php",
  "Python",
  "SQL",
];

const About = () => {
  return (
    <section className="bg-about-img h-full">
      <div className="px-8 pt-20 pb-16 w-full md:flex">
        <h1 className="text-[#BDBDBD] md:w-1/3 md:px-12 md:py-12 md:text-3xl">
          About Me
        </h1>
        <p className="text-white mt-4 font-bold leading-loose md:mt-0 md:w-2/3 md:py-12 md:text-4xl md:leading-[3.2rem]">
          Experienced Frontend Developer creating different full-stack solutions
          that are functional and visually pleasing with modern web
          technologies. I am eager to explore innovative approaches and grow my
          tech stack. Feel free to reach out — I’m open for new, exciting
          opportunities.
        </p>
      </div>
      <div className="px-8 pt-10 pb-20 w-full md:flex">
        <h1 className="text-[#BDBDBD] md:w-1/3 md:px-12 md:py-12 md:text-3xl">
          Tech Stack
        </h1>
        <div className="mt-4 md:w-2/3">
          {tech_stack.map((tech, index) => (
            <div
              key={index}
              className="text-white py-4 border-b border-[#828282] md:text-5xl md:py-8"
            >
              {tech}
            </div>
          ))}
          <div className="py-4 text-base bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DDF,#DD7DDF)] text-transparent bg-clip-text md:text-6xl">
            Always ready for a Tech Adventure
          </div>
        </div>
      </div>
      <div className="pt-10">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="relative flex flex-none h-[510px] "
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {projects_data.map((project) => (
              <div
                key={project.altname}
                className="w-full h-full border border-[#333333]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={project.imageSrc}
                    alt={project.altname}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
              </div>
            ))}
            {projects_data.map((project) => (
              <div
                key={project.altname}
                className="w-full h-full border border-[#333333]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={project.imageSrc}
                    alt={project.altname}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <Connect />
      {/* Footer */}
      <Footer />
    </section>
  );
};

export default About;
