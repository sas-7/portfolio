import React, { useTransition, useState, useRef } from "react";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University School of Information, Communication and Technology</li>
        <li>Adarsh Secondary School</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Web Development-Udemy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl-gap-16 sm:py-16 xl:px-16">
        <img src="/images/about.png" alt="About" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 ">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience with
            JavaScript, React, Node.js, Express, HTML, CSS, and Git. I'm a quick
            learner, always seeking to expand my skills.
          </p>
          <div className="flex flex-row justify-start mt-6">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
          <div
            className="mt-6 flex flex-col gap-4 justify-center"
            ref={skillRef}
          >
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-black">
                C/C++
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-black">
                MySQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-black">
                HTML
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-black">
                CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-black">
                Bootstrap
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:text-black">
                Git
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
