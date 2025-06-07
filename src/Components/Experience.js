import { useContext } from "react";
import { useInView } from "react-intersection-observer";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AnimationContext } from "../Context/useContext";
import { Helmet } from "react-helmet-async";

export const Experience = () => {
  const { threshold } = useContext(AnimationContext);

  const certificates = [
    {
      id: 1,
      title: "MERN Stack",
      file: "Assets/mern.png",
      animation: "mern",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
    {
      id: 2,
      title: "Docker",
      file: "Assets/docker.pdf",
      animation: "dockers",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
    {
      id: 3,
      title: "AWS Solution Architect",
      file: "https://cp.certmetrics.com/amazon/en/public/verify/credential/2d0066ca65fe4ae791fb275b4e18389d",
      animation: "hex",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
    {
      id: 4,
      title: "HEx Genius HACKATHON",
      file: "/Assets/HEx.jpg",
      animation: "hex",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
    {
      id: 5,
      title: "In-House Project Competition",
      file: "Assets/dursikshya.jpg",
      animation: "dursikshya",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },

    {
      id: 6,
      title: "IIT Techfest Bombay",
      file: "Assets/Khagendra.png",
      animation: "iit",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
  ];

  const firstRow = [
    {
      id: 1,
      content: "C Programming",
      img: "/Assets/letter-c.png",
      names: "cProgramming",
      animation: "cProgramming",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
    {
      id: 2,
      content: "C++ Programming",
      img: "/Assets/c-.png",
      names: "oop",
      animation: "oop",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
    {
      id: 3,
      content: "JavaScript",
      img: "/Assets/java-script.png",
      names: "js",
      animation: "js",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
    {
      id: 4,
      content: "TypeScript",
      img: "/Assets/ts.png",
      names: "ts",
      animation: "ts",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
  ];

  const secondRow = [
    {
      id: 1,
      content: "HTML",
      img: "/Assets/html-5.png",
      names: "html",
      animation: "html",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
    {
      id: 2,
      content: "CSS",
      img: "/Assets/css-3.png",
      names: "css",
      animation: "css",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
    {
      id: 3,
      content: "Bootstrap 5",
      img: "/Assets/bootstrap.png",
      names: "bootstrap",
      animation: "bootstrap",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
    {
      id: 4,
      content: "Tailwind Css",
      img: "/Assets/tailwind.png",
      names: "tss",
      animation: "tss",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
  ];

  const thirdRow = [
    {
      id: 1,
      content: "React",
      img: "/Assets/react.png",
      names: "react",
      animation: "react",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
    {
      id: 2,
      content: "Express.Js",
      img: "/Assets/express-js.png",
      names: "express",
      animation: "express",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
    {
      id: 3,
      content: "Node.JS",
      img: "/Assets/nodejs.png",
      names: "node",
      animation: "node",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
    {
      id: 4,
      content: "Next.js",
      img: "/Assets/nextjs.png",
      names: "nextjs",
      animation: "nextjs",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
  ];

  const fourthRow = [
    {
      id: 1,
      content: "MongoDB",
      img: "/Assets/mdb.png",
      names: "mongodb",
      animation: "mongodb",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },

    {
      id: 2,
      content: "PostgreSQL",
      img: "/Assets/icons8-postgresql-96.png",
      names: "postgresql",
      animation: "postgresql",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
  ];

  const fifthRow = [
    {
      id: 1,
      content: "Version Control Git",
      img: "/Assets/github.png",
      names: "git",
      animation: "git",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
    {
      id: 2,
      content: "Docker",
      img: "/Assets/dockerpng.png",
      names: "docker",
      animation: "docker",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
    {
      id: 3,
      content: "AWS Solution Architect",
      img: "/Assets/images.png",
      names: "AWSSolutionArchitect",
      animation: "docker",
      ref: useInView({ threshold: threshold, triggerOnce: false }),
    },
  ];

  const openFile = (file) => {
    window.open(file, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Skills and Certificates</title>
        <meta
          name="description"
          content="real-world projects built using React, Software Developer  AWS, Nextjs , Node.js, Express, MongoDb, postgreSQL, Docker and more. Showcasing web development, UI/UX, and backend skills."
        />
        <meta
          name="keywords"
          content="React projects, Full stack developer, Software Developer, AWS, Nextjs, React , MERN stack, Node.js, MongoDB, postgreSQL, Docker, Laravel, Portfolio, Web Development, UI/UX , Frontend, Backend"
        />
        <meta name="author" content="Khagendra Jora" />
        <meta property="og:title" content="Web Development Projects" />
        <meta
          property="og:description"
          content="Browse portfolio projects built by Khagendra Jora using modern web technologies like React, Express, node.js, next.js and Docker."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.khagendrajora.com.np/" />
        <meta
          property="og:image"
          content="https://www.khagendrajora.com.np/Assets/kj.JPG"
        />
        <link
          rel="canonical"
          href="https://www.khagendrajora.com.np/Assets/kj.JPG"
        />
      </Helmet>
      <Tooltip id="my-tooltip" />
      <div className="Experiences">
        <div className="skills">
          <div className="title">Skills</div>
          <div className="programmingLanguages">
            {firstRow.map(({ id, content, names, animation, img, ref }) => {
              const { ref: proRef, inView } = ref;
              const animationClass = inView ? animation : "hidden";

              return (
                <div key={id} className="icon" ref={proRef}>
                  <img
                    src={img}
                    alt="letter"
                    className={`animated-img ${animationClass}`}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={content}
                    data-tooltip-class-name={names}
                    data-tooltip-place="top"
                  />
                </div>
              );
            })}
          </div>
          <hr />

          <div className="programmingLanguages">
            {secondRow.map(({ id, content, names, animation, img, ref }) => {
              const { ref: proRef, inView } = ref;
              const animationClass = inView ? animation : "hidden";

              return (
                <div key={id} className="icon" ref={proRef}>
                  <img
                    src={img}
                    alt="letter"
                    className={`animated-img ${animationClass}`}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={content}
                    data-tooltip-class-name={names}
                    data-tooltip-place="top"
                  />
                </div>
              );
            })}
          </div>
          <hr />
          <div className="programmingLanguages">
            {thirdRow.map(({ id, content, names, animation, img, ref }) => {
              const { ref: proRef, inView } = ref;
              const animationClass = inView ? animation : "hidden";

              return (
                <div key={id} className="icon" ref={proRef}>
                  <img
                    src={img}
                    alt="letter"
                    className={`animated-img ${animationClass}`}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={content}
                    data-tooltip-class-name={names}
                    data-tooltip-place="top"
                  />
                </div>
              );
            })}
          </div>
          <hr />
          <div className="programmingLanguages">
            {fourthRow.map(({ id, content, names, animation, img, ref }) => {
              const { ref: proRef, inView } = ref;
              const animationClass = inView ? animation : "hidden";

              return (
                <div key={id} className="icon" ref={proRef}>
                  <img
                    src={img}
                    alt="letter"
                    className={`animated-img ${animationClass}`}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={content}
                    data-tooltip-class-name={names}
                    data-tooltip-place="top"
                  />
                </div>
              );
            })}
          </div>
          <hr />
          <div className="programmingLanguages">
            {fifthRow.map(({ id, content, names, animation, img, ref }) => {
              const { ref: proRef, inView } = ref;
              const animationClass = inView ? animation : "hidden";

              return (
                <div key={id} className="icon" ref={proRef}>
                  <img
                    src={img}
                    alt="letter"
                    className={`animated-img ${animationClass}`}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={content}
                    data-tooltip-class-name={names}
                    data-tooltip-place="top"
                  />
                </div>
              );
            })}
          </div>
          <hr />
        </div>
        <div className="certificates">
          <div className="title">Participation And Certificates</div>
          <div className="workshops">
            {certificates.map(({ id, title, file, animation, ref }) => {
              const { ref: certRef, inView } = ref;
              const animationClass = inView ? animation : "hidden";
              return (
                <div
                  key={id}
                  ref={certRef}
                  className={`certificate-one ${animationClass}`}
                  onClick={() => openFile(file)}
                >
                  <h1 className="one">{id}.</h1>
                  <div className="file">
                    <span>{title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
