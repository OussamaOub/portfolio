import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import native from "../assets/react-native.svg";
import Card from "./Card";
import about from "../assets/about.svg";
import muscle from "../assets/muscles.svg";
import improve from "../assets/personal-development.svg";
import postgresql from "../assets/postgresql.svg";
import typescript from "../assets/typescript.svg";
import reactsvg from "../assets/react.svg";
import next from "../assets/next.svg";
import html from "../assets/html-5svg.svg";
import css from "../assets/css.svg";
import firebase from "../assets/firebase.svg";
import supabase from "../assets/supabas.svg";
import git from "../assets/git.svg";
import tailwind from "../assets/tailwind.svg";
import python from "../assets/python.svg";
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import prisma from "../assets/prisma.svg";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

type StatsProps = {
  name: string;
  value: number;
  img: string;
  fill: string;
  link: string;
};

const normal = [
  `Quick learner, adaptable to new concepts and technologies.`,
  `I am a self-taught developer with a passion for learning new things.`,
  `Passion for web development and continuous learning.`,
  "Strong problem-solving skills and dedication to skill improvement.",
];
const goals = [
  `I am looking for a part-time job to gain experience and improve my skills.`,
  "Curious to discover the numerous possibilities of solving problems with code.",
  "Eager to acquire new skills and adapt to changing technologies.",
];
const weaknes = [
  "Proactive in identifying areas for improvement and growth.",
  "Commitment to continuous learning and seeking new challenges.",
  "Open to feedback and dedicated to self-improvement.",
  "Willingness to embrace new technologies and expand skill set.",
];

const stats: StatsProps[] = [
  {
    name: "Nextjs",
    value: 80,
    img: next,
    fill: "#000",
    link: "https://nextjs.org/",
  },

  {
    name: "React",
    value: 75,
    img: reactsvg,
    fill: "#00D8FF",
    link: "https://react.dev/",
  },
  {
    name: "React Native",
    value: 85,
    img: native,
    fill: "#c822ff",
    link: "https://reactnative.dev/",
  },
  {
    name: "Typescript",
    value: 80,
    img: typescript,
    fill: "#3178c6",
    link: "https://www.typescriptlang.org/",
  },

  {
    name: "HTML",
    value: 75,
    img: html,
    fill: "#e34f26",
    link: "https://web.dev/learn/html/overview/",
  },
  {
    name: "CSS",
    value: 80,
    img: css,
    fill: "#2965f1",
    link: "https://www.geeksforgeeks.org/css-introduction/",
  },
  {
    name: "Tailwind",
    value: 90,
    img: tailwind,
    fill: "#06b6d4",
    link: "https://tailwindcss.com/",
  },
  {
    name: "PostgreSQL",
    value: 70,
    img: postgresql,
    fill: "#646cff",
    link: "https://www.postgresql.org/",
  },

  {
    name: "Firebase",
    value: 82,
    img: firebase,
    fill: "#f6820c",
    link: "https://firebase.google.com/",
  },
  {
    name: "Supabase",
    value: 80,
    img: supabase,
    fill: "#3ecf8e",
    link: "https://supabase.io/",
  },
  {
    name: "Git",
    value: 70,
    img: git,
    fill: "#f34f29",
    link: "https://git-scm.com/",
  },
  {
    name: "Prisma",
    value: 40,
    img: prisma,
    fill: "#0c344b",
    link: "https://www.prisma.io/",
  },

  {
    name: "Python",
    value: 40,
    img: python,
    fill: "#4b8bbe",
    link: "https://www.python.org/",
  },
  {
    name: "NodeJS",
    value: 40,
    img: node,
    fill: "#8cc84b",
    link: "https://nodejs.org/en/",
  },
  {
    name: "Express",
    value: 40,
    img: express,
    fill: "#5c9a54",
    link: "https://expressjs.com/",
  },
];

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full
    custombg flex flex-col
      "
      id="AboutMe"
    >
      <div id="AboutMeContainer">
        <span className="aboutcontainer w-full grid px-[10%] py-[5%] text-center justify-items-center">
          <Card content={normal} icon={about} />
          <Card content={goals} icon={muscle} />
          <Card content={weaknes} icon={improve} />
        </span>
        <main className="flex flex-col text-white text-xl md:mt-0">
          <h1 className="text-4xl font-bold text-center mb-10 mobile:mt-8">
            Technologies I use:
          </h1>
          <span className="statscontainer grid text-center justify-items-center items-center mb-12">
            {stats.map((stat, index) => (
              <div
                className="w-[100px] h-[100px] hover:scale-105 transition mobile:w-[80px] mobile:h-[80px]"
                key={index}
                title={stat.name}
              >
                <VisibilitySensor>
                  {({ isVisible }: { isVisible: boolean }) => {
                    const percentage = isVisible ? stat.value : 0;
                    return (
                      <a href={stat.link} target="_blank">
                        <CircularProgressbarWithChildren
                          value={percentage}
                          strokeWidth={7}
                          styles={{
                            path: {
                              stroke: stat.fill,
                              strokeLinecap: "round",
                              transition: "stroke-dashoffset 1s ease 0s",
                            },
                            trail: {
                              strokeLinecap: "round",
                            },
                          }}
                        >
                          <img
                            src={stat.img}
                            alt={stat.name}
                            className="w-10 h-10"
                          />
                        </CircularProgressbarWithChildren>
                      </a>
                    );
                  }}
                </VisibilitySensor>
              </div>
            ))}
          </span>
        </main>
      </div>
    </motion.div>
  );
}

export default About;
