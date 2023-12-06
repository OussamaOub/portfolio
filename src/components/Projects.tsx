import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

function Projects() {
  type ProjectProp = {
    name: string;
    description: string;
    link: string | null;
    pic?: string;
  };

  const projects: ProjectProp[] = [
    {
      name: "JoyRide",
      description: "A carpooling app for AUI students",
      link: null,
      pic: "",
    },
    {
      name: "CareBooker",
      description: "A doctor booking mobile application",
      link: "https://github.com/OussamaOub/CareBooker",
      pic: "https://github.com/OussamaOub/CareBooker/raw/main/assets/screenshots/PatientMain.png?raw=true",
    },
    {
      name: "Job-Board",
      description: "A online job board application",
      link: "https://github.com/OussamaOub/Job-Board",
      pic: "",
    },
  ];

  return (
    <div className=" w-full h-fit">
      <h1 className="text-3xl font-bold text-center text-white pt-20">
        Some of my recent projects:
      </h1>
      <div className="aboutcontainer w-full grid px-[10%] py-[5%] text-center justify-items-center">
        {projects.map((project, index) => {
          return (
            <Card
              isFooterBlurred
              className="h-[300px] w-[300px] hover:-translate-y-2 transition-all duration-300 ease-in-out 
              {col-span-12 sm:col-span-5}
              "
              radius="lg"
              key={index}
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className="text-black font-medium text-2xl">
                  {project.name}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-125 -translate-y-6 object-contain"
                src={project.pic}
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-black text-tiny">{project.description}</p>
                </div>
                <Button
                  className="text-tiny"
                  variant="shadow"
                  color={project.link ? "success" : "default"}
                  radius="lg"
                  size="sm"
                >
                  {project.link ? (
                    <a
                      href={project.link ?? ""}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tiny text-white bg-black/20 w-full h-full flex justify-center items-center absolute"
                    >
                      Visit
                    </a>
                  ) : (
                    "Coming Soon"
                  )}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
