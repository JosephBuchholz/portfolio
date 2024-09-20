import { useEffect, useLayoutEffect, useState } from "react";
import Header from "../components/Header";
import SocialButton from "../components/SocialButton";
import SkillButton from "../components/SkillButton";
import ProjectPanel from "../components/ProjectPanel";
import { Link, scroller } from "react-scroll";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

export default function HomePage() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const [currentScrollPosition, setCurrentScrollPosition] = useState(0.0);
  const [highlightSkill, setHighlightSkill] = useState("");

  const navigate = useNavigate();

  const section = useParams();

  useEffect(() => {
    console.log("section useEffect: ", section);

    if (section.section == "skills") {
      scroller.scrollTo("skills-marker", {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    } else if (section.section == "projects") {
      scroller.scrollTo("projects-marker", {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    }
  }, [section]);

  // add event listeners
  useLayoutEffect(() => {
    function onResizeListener() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    function onScrollListener() {
      setCurrentScrollPosition(window.scrollY);
    }

    window.addEventListener("resize", onResizeListener);
    window.addEventListener("scroll", onScrollListener);
    return () => {
      window.removeEventListener("resize", onResizeListener);
      window.removeEventListener("scroll", onScrollListener);
    };
  }, []);

  // change how my image looks depending on screen size
  let sideImage = <></>;
  if (windowSize[0] > 500) {
    sideImage = (
      <div className="w-1/2 h-full bg-blue-700 flex-1 content-center">
        <div className="left-0 ml-5 w-80 h-80 rounded-full bg-slate-200 overflow-clip">
          <img className="object-cover" src="/images/me.jpg"></img>
        </div>
      </div>
    );
  } else {
    sideImage = (
      <div className="w-1/2 h-full bg-blue-700 flex-1 overflow-clip">
        <img className="h-full object-cover" src="/images/me.jpg"></img>
      </div>
    );
  }

  // whether the top background (the fixed div element that contains my picture, social buttons, and "Hello I'm..." text) should be displayed
  // hides it so that the over scroll at the bottom does not show it
  let showTopBackground = true;
  if (currentScrollPosition > windowSize[1]) {
    showTopBackground = false;
  }

  return (
    <main id="home-marker" className="flex flex-col">
      <Header></Header>

      <div>
        <section className="h-screen">
          {showTopBackground ? (
            <div className="fixed">
              <div className="flex flex-row flex-1 h-screen w-screen">
                <div className="flex-1 flex justify-center items-center">
                  <div className="">
                    <h1 className="font-sans text-4xl">Hello</h1>
                    <h1 className="font-semibold font-sans text-4xl">
                      I'm <br className="md:hidden"></br>
                      <span className="font-bold text-blue-600">
                        Joseph Buchholz
                      </span>
                    </h1>

                    <Link
                      activeClass="active"
                      smooth={true}
                      spy={true}
                      to="projects-marker"
                    >
                      <p className="cursor-pointer text-white text-center font-semibold font-sans text-2xl bg-blue-700 rounded-full mt-5 p-3 hover:bg-blue-600">
                        My Projects
                      </p>
                    </Link>

                    <ul className="mt-5">
                      <SocialButton
                        link="https://github.com/JosephBuchholz/"
                        imageSrc="/images/github_icon.png"
                        text="GitHub"
                      ></SocialButton>
                      <SocialButton
                        link="https://www.linkedin.com/in/joseph-buchholz-8b6769323/"
                        imageSrc="/images/linkedin_icon.png"
                        text="LinkedIn"
                      ></SocialButton>
                      <SocialButton
                        link="https://wsu.joinhandshake.com/profiles/43552814/"
                        imageSrc="/images/handshake_icon.png"
                        text="Handshake"
                      ></SocialButton>
                      <SocialButton
                        link="mailto:joseph.buchholz@outlook.com"
                        imageSrc="/images/email_icon.png"
                        text="joseph.buchholz@outlook.com"
                      ></SocialButton>
                    </ul>
                  </div>
                </div>

                {sideImage}
              </div>
            </div>
          ) : (
            <></>
          )}
        </section>
        <div className="p-8 bg-white relative z-10"></div>
        <section id="skills-marker" className="bg-white relative z-10">
          <br className="m-4"></br>
          <h2 className="font-semibold text-4xl m-4">Skills</h2>
          <br></br>
          <p className="ml-4 font-semibold text-xl">Proficient:</p>
          <ul className="flex flew-row flex-wrap ml-4">
            <SkillButton
              highlight
              clickable
              onClick={() => {
                setHighlightSkill("C/C++");
              }}
            >
              C/C++
            </SkillButton>
            <SkillButton
              highlight
              clickable
              onClick={() => {
                setHighlightSkill("Python");
              }}
            >
              Python
            </SkillButton>
            <SkillButton
              highlight
              clickable
              onClick={() => {
                setHighlightSkill("JavaScript");
              }}
            >
              JavaScript
            </SkillButton>
            <SkillButton
              highlight
              clickable
              onClick={() => {
                setHighlightSkill("React");
              }}
            >
              React
            </SkillButton>
            <SkillButton
              highlight
              clickable
              onClick={() => {
                setHighlightSkill("HTML");
              }}
            >
              HTML
            </SkillButton>
          </ul>
          <p className="ml-4 font-semibold text-xl">Some Experience:</p>
          <ul className="flex flew-row flex-wrap ml-4">
            <SkillButton
              clickable
              onClick={() => {
                setHighlightSkill("Django");
              }}
            >
              Django
            </SkillButton>
            <SkillButton
              clickable
              onClick={() => {
                setHighlightSkill("Tailwind CSS");
              }}
            >
              Tailwind CSS
            </SkillButton>
            <SkillButton
              clickable
              onClick={() => {
                setHighlightSkill("Kotlin");
              }}
            >
              Kotlin
            </SkillButton>
            <SkillButton
              clickable
              onClick={() => {
                setHighlightSkill("Jetpack Compose");
              }}
            >
              Jetpack Compose
            </SkillButton>
            <SkillButton>LaTeX</SkillButton>
            <SkillButton
              clickable
              onClick={() => {
                setHighlightSkill("Emscripten");
              }}
            >
              Emscripten
            </SkillButton>
          </ul>
        </section>
        <section id="projects-marker" className="bg-white relative z-10">
          <br className="m-4"></br>
          <h2 className="font-semibold text-4xl m-4">Projects</h2>

          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 m-4">
            <ProjectPanel
              title="Musique/Harmonically"
              description="A music application that displays standard music notation and
                  guitar tablature with live audio playback. The application was
                  originally developed for Android using *Kotlin* and *C++*. Though
                  now the project is being ported to the Web for greater
                  accessibility using *Emscripten*, *Django*, and *React*."
              highlight={
                highlightSkill == "C/C++" ||
                highlightSkill == "Python" ||
                highlightSkill == "JavaScript" ||
                highlightSkill == "HTML" ||
                highlightSkill == "Django" ||
                highlightSkill == "React" ||
                highlightSkill == "Tailwind CSS" ||
                highlightSkill == "Kotlin" ||
                highlightSkill == "Jetpack Compose" ||
                highlightSkill == "Emscripten"
              }
              highlightSkill={highlightSkill}
              onClick={() => {
                navigate("/harmonically");
              }}
            ></ProjectPanel>

            <ProjectPanel
              title="Song Scripture Referencer"
              description="A simple Web application made with *Django* and *React* that
                  displays Bible references for the lyrics of Christian songs
                  and hymns."
              githubLink="https://github.com/JosephBuchholz/scripture-ref-songs"
              highlight={
                highlightSkill == "Python" ||
                highlightSkill == "JavaScript" ||
                highlightSkill == "HTML" ||
                highlightSkill == "Django" ||
                highlightSkill == "React" ||
                highlightSkill == "Tailwind CSS"
              }
              highlightSkill={highlightSkill}
              onClick={() => {
                navigate("/scripture-referencer");
              }}
            ></ProjectPanel>

            <ProjectPanel
              title="Various Video Game Projects"
              description="Multiple projects consisting of programming and designing
                  video games. Most of these video games were programmed using
                  the Godot game engine (using *Python*/GDScript) or *C++*."
              highlight={
                highlightSkill == "C/C++" || highlightSkill == "Python"
              }
              highlightSkill={highlightSkill}
              onClick={() => {
                navigate("/video-game-projects");
              }}
            ></ProjectPanel>

            <ProjectPanel
              title="My Portfolio Website"
              description="This simple portfolio website made with *React* and *Tailwind CSS*."
              highlight={
                highlightSkill == "React" ||
                highlightSkill == "Tailwind CSS" ||
                highlightSkill == "HTML" ||
                highlightSkill == "JavaScript"
              }
              highlightSkill={highlightSkill}
            ></ProjectPanel>
          </div>

          <br></br>
        </section>

        <Footer highlightSkill={highlightSkill}></Footer>
      </div>
    </main>
  );
}
