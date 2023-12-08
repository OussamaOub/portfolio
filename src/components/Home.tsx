import pic from "../assets/pic.jpg";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./Home.css";

function Home() {
  return (
    <div
      className="w-full h-screen bg-white flex flex-col items-center top-0 left-0 overflow-y-auto "
      id="Home"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0 }}
        className="h-[calc(100vh-100px)] mobile:h-[calc(100vh-250px)] w-full flex flex-row items-center justify-evenly transition-all duration-250 mobile:mt-[100px] mobile:flex-col mobile:gap-8 "
      >
        <div
          className="flex flex-row justify-around flex-nowrap 
              md:flex-col md:justify-center md:items-center md:space-y-4 mobile:flex-col 
            "
        >
          <div className="justify-center items-center mr-0 z-30 flex mobile:mb-8">
            <a
              href="https://github.com/OussamaOub"
              target="_blank"
              rel="noopener noreferrer"
              className="fill-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="reverse-svg hover:scale-150 hover:fill-black transition-all duration-300 ease-in-out md:mb-4 md:hover:fill-black"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <div className="Info lg:h-[200px] lg:w-[500px] mobile:h-[130px] mobile:w-[90vw] lg:text-3xl">
            <h2>Hi, my name is Oussama</h2>
            <h3 className="lg:text-2xl font-bold text-white lg:mt-5">I am a</h3>
            <div className="flex flex-col justify-center items-center">
              <div
                className="text-[#a0a0af] font-semibold font-serif text-xl flex flex-shrink flex-wrap
                    lg:text-m
                  "
              >
                <Typewriter
                  options={{
                    strings: ["Front End", "Back End", "Mobile"],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </div>
              <h6
                className="
                  font-bold
                  text-white
                  lg:text-2xl
                      md:text-m
                  "
              >
                Developer
              </h6>
            </div>
          </div>
        </div>

        <div
          className="PhotoContainer w-[350px] h-[350px] mobile:w-[200px] mobile:h-[200px] mobile:overflow-hidden"
          id="photo"
        >
          <img
            src={pic}
            alt="Oussama"
            className="
              w-[100%]
              h-[100%]
              object-cover
              object-center
              shadow-2xl
              hover:shadow-3xl
              transition-all
              duration-300
              ease-in-out
              faded-in
              "
            draggable="false"
          />
        </div>
      </motion.div>
      <div
        className="mobile:w-full mobile:relative mobile:h-full
        mobile:flex flex-col justify-center items-center
      "
      >
        <svg
          className="arrows scale-50 mobile:absolute mobile:transform right-0
          "
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            document.getElementById("AboutMe")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>{" "}
      </div>
    </div>
  );
}

export default Home;
