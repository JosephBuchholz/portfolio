import { useEffect, useLayoutEffect, useState } from "react";
import Header from "../components/Header";
import SocialButton from "../components/SocialButton";
import SkillButton from "../components/SkillButton";
import ProjectPanel from "../components/ProjectPanel";
import { animateScroll, Link, scroller } from "react-scroll";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensionsHook";

/**
 * The home page.
 */
export default function HomePage() {
  // Window width and height
  const { height, width } = useWindowDimensions();

  // The scroll position on the page
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0.0);

  // A string that contains the currently selected skill to be highlighted (e.g.: "JavaScript")
  const [highlightSkill, setHighlightSkill] = useState("");

  // navigate object used to navigate to different pages.
  const navigate = useNavigate();

  // get section from url (ex: /home/<section>)
  const section = useParams();

  useEffect(() => {
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
    function onScrollListener() {
      setCurrentScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", onScrollListener);
    return () => {
      window.removeEventListener("scroll", onScrollListener);
    };
  }, []);

  // change how main headshot image looks depending on screen size
  let sideImage = <></>;
  let footerImage = <></>;
  if (width > 640) {
    sideImage = (
      <div className="w-1/2 h-full bg-blue-700 flex-1 content-center">
        <div className="left-0 ml-5 w-80 h-80 rounded-full bg-slate-200 overflow-clip">
          <img className="object-cover" src="/images/me.jpg"></img>
        </div>
      </div>
    );
  } else {
    sideImage = <div className="w-full h-full bg-blue-700 flex-1"></div>;

    footerImage = (
      <div className="w-full h-full bg-blue-700 flex-1 overflow-clip">
        <img className="w-full" src="/images/me2.jpg"></img>
      </div>
    );
  }

  // whether the top background (the fixed div element that contains my picture, social buttons, and "Hello I'm..." text) should be displayed
  // hides it so that the over scroll at the bottom does not show it
  let showTopBackground = true;
  if (currentScrollPosition > height) {
    showTopBackground = false;
  }

  return (
    <main id="home-marker" className="flex flex-col overflow-x-hidden">
      <Header></Header>

      <div>
        <section className="h-screen">
          {showTopBackground ? (
            <div className="fixed">
              <div className="flex flex-col sm:flex-row flex-1 h-screen w-screen">
                <div className="flex-1 flex justify-center items-center">
                  <div className="m-10">
                    {/* Main title */}
                    <h1 className="font-sans text-xl md:text-4xl">Hello</h1>
                    <h1 className="font-semibold font-sans text-xl md:text-4xl">
                      I'm <br className="md:hidden"></br>
                      <span className="font-bold text-blue-600">
                        Joseph Buchholz
                      </span>
                    </h1>

                    {/* "My Projects" button */}
                    <Link
                      activeClass="active"
                      smooth={true}
                      spy={true}
                      to="projects-marker"
                    >
                      <p className="cursor-pointer text-white text-center font-semibold font-sans text-sm sm:text-base md:text-2xl bg-blue-700 rounded-full mt-5 p-3 hover:bg-blue-600">
                        My Projects
                      </p>
                    </Link>

                    {/* Social buttons */}
                    <ul className="mt-5 mb-10">
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

                {/* Headshot photo */}
                {sideImage}
              </div>
            </div>
          ) : (
            <></>
          )}
        </section>
        <div className="p-8 bg-white relative z-10"></div>

        {/* Skills section */}
        <section id="skills-marker" className="bg-white relative z-10">
          <br className="m-4"></br>
          <h2 className="font-semibold text-4xl m-4">Skills</h2>
          <br></br>

          {/* Proficient skills */}
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
            <SkillButton
              highlight
              clickable
              onClick={() => {
                setHighlightSkill("C#");
              }}
            >
              C#
            </SkillButton>
          </ul>

          {/* Some experience skills */}
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
            <SkillButton
              clickable
              onClick={() => {
                setHighlightSkill("Svelte");
              }}
            >
              Svelte
            </SkillButton>
            <SkillButton
              clickable
              onClick={() => {
                setHighlightSkill("TypeScript");
              }}
            >
              TypeScript
            </SkillButton>
            <SkillButton
              clickable
              onClick={() => {
                setHighlightSkill("React Native");
              }}
            >
              React Native
            </SkillButton>
          </ul>
        </section>

        {/* Project section */}
        <section id="projects-marker" className="bg-white relative z-10">
          <br className="m-4"></br>
          <h2 className="font-semibold text-4xl m-4">Projects</h2>

          {/* Project panels */}
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 m-4">
            <ProjectPanel
              title="Harmonically (Musique)"
              description="A music application that displays standard music notation and
                  guitar tablature with live audio playback. The application was
                  originally developed for Android using *Kotlin* and *C++*. Though
                  now the project has been ported to the Web for greater
                  accessibility using *Emscripten*, *Django*, and *React*."
              githubLink="https://github.com/JosephBuchholz/musique-website"
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
                animateScroll.scrollToTop({ duration: 0 }); // reset scroll
                navigate("/harmonically");
              }}
            ></ProjectPanel>

            <ProjectPanel
              title="Song Scripture Referencer"
              description="A simple full-stack Web application made with *Django* and *React* that
                  displays Bible references for the lyrics of Christian songs
                  and hymns."
              githubLink="https://github.com/JosephBuchholz/scripture-ref-songs"
              websiteLink="https://scripture.josephbuchholz.com/"
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
                animateScroll.scrollToTop({ duration: 0 }); // reset scroll
                navigate("/scripture-referencer");
              }}
            ></ProjectPanel>

            <ProjectPanel
              title="Various Video Game Projects"
              description="Multiple video game projects created over many years. Most of these video games were programmed using the Godot game engine using GDScript and/or *C++*. Some of them were developed purely with *Python* using Pygame."
              highlight={
                highlightSkill == "C/C++" || highlightSkill == "Python"
              }
              highlightSkill={highlightSkill}
              onClick={() => {
                animateScroll.scrollToTop({ duration: 0 }); // reset scroll
                navigate("/video-game-projects");
              }}
            ></ProjectPanel>

            <ProjectPanel
              title="Echolog (WSU CrimsonCode 2025)"
              description="A movie recommendation website made during a 24 hour hackathon using *Svelte*."
              githubLink="https://github.com/JosephBuchholz/crimsoncode2025"
              websiteLink="https://echolog.346135.xyz"
              highlight={
                highlightSkill == "Svelte" ||
                highlightSkill == "TypeScript" ||
                highlightSkill == "HTML" ||
                highlightSkill == "Tailwind CSS"
              }
              highlightSkill={highlightSkill}
              onClick={() => {
                animateScroll.scrollToTop({ duration: 0 }); // reset scroll
                navigate("/crimson-code-2025");
              }}
            ></ProjectPanel>

            <ProjectPanel
              title="Guinea Pig Video Game"
              description="A simple bullet hell style game (the main character is a guinea pig) made for one of my classes at WSU (CPT_S 487). The game was created using *C#* and MonoGame in a team of five."
              githubLink="https://github.com/JosephBuchholz/nexus-horizon-game"
              highlight={highlightSkill == "C#"}
              highlightSkill={highlightSkill}
              onClick={() => {
                animateScroll.scrollToTop({ duration: 0 }); // reset scroll
                navigate("/guinea-pig-game");
              }}
            ></ProjectPanel>

            <ProjectPanel
              title="CampusSafe"
              description="A simple team class project developed over the course of a few months. Made using *React Native* for the frontend and *Django* for the backend."
              githubLink="https://github.com/JosephBuchholz/Campus-Safe"
              highlight={
                highlightSkill == "TypeScript" ||
                highlightSkill == "Python" ||
                highlightSkill == "Django" ||
                highlightSkill == "React Native"
              }
              highlightSkill={highlightSkill}
              onClick={() => {
                window.location.href =
                  "https://github.com/JosephBuchholz/Campus-Safe";
              }}
            ></ProjectPanel>

            <ProjectPanel
              title="My Portfolio Website"
              description="This simple portfolio website made with *React* and *Tailwind CSS*."
              githubLink="https://github.com/JosephBuchholz/portfolio"
              highlight={
                highlightSkill == "React" ||
                highlightSkill == "Tailwind CSS" ||
                highlightSkill == "HTML" ||
                highlightSkill == "JavaScript"
              }
              highlightSkill={highlightSkill}
              onClick={() => {
                animateScroll.scrollToTop({ duration: 400 }); // reset scroll
                navigate("/home");
              }}
            ></ProjectPanel>
          </div>

          <br></br>
        </section>

        {footerImage}

        <Footer highlightSkill={highlightSkill}></Footer>
      </div>
    </main>
  );
}
