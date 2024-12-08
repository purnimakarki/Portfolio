import { useEffect, useRef } from "react";
import { PROJECTS } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, projectsRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-16" id="projects" ref={projectsRef}>
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-card flex flex-col h-full">
              <div className="flex-grow overflow-hidden rounded-lg border border-purple-300/20 shadow-lg hover:shadow-purple-300/20 transition-all duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium lg:text-xl">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-300">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <strong className="text-sm">Tech Stack:</strong>
                    <ul className="flex flex-wrap gap-2 mt-2">
                      {project.techStack.map((tech, index) => (
                        <li
                          key={index}
                          className="rounded-full border border-pink-500/30 px-3 py-1 text-xs font-medium hover:bg-pink-500/10 transition-colors"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
