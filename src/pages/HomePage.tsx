import { useEffect, useLayoutEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SkillButton from "../components/SkillButton";
import ProjectPanel from "../components/ProjectPanel";
import { useNavigate, useParams } from "react-router-dom";
import { animateScroll, scroller } from "react-scroll";
import SocialButton from "../components/SocialButton";

export function Paragraph({ children, className = "" }) {
  return (
    <p className={`font-primary text-lg text-text my-2 ${className}`}>
      {children}
    </p>
  );
}

export function HeaderText({ children, className = "" }) {
  return (
    <h2
      className={`font-primary text-2xl font-semibold text-text mb-4 ${className}`}
    >
      {children}
    </h2>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-background-panel p-6 mt-10 rounded-sm ${className}`}>
      {children}
    </div>
  );
}

/**
 * The home page.
 */
export default function HomePage() {
  // The scroll position on the page
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0.0);

  // A string that contains the currently selected skill to be highlighted (e.g.: "JavaScript")
  const [highlightSkill, setHighlightSkill] = useState("");

  // navigate object used to navigate to different pages.
  const navigate = useNavigate();

  // get section from url (ex: /home/<section>)
  const section = useParams();

  useEffect(() => {
    console.log("section: ", section);
    if (section.section == "skills") {
      scroller.scrollTo("skills-marker", {
        duration: 1500,
        delay: 100,
        smooth: true,
      });
    } else if (section.section == "projects") {
      console.log("scrolling to projects");
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

  return (
    <main
      id="home-marker"
      className="flex flex-col overflow-x-hidden bg-background h-screen"
    >
      <Header></Header>

      <div className="self-center w-11/12 sm:w-2/3 max-w-3xl">
        <Card>
          <div>
            <div className="sm:min-w-60 md:w-60 max-h-96 sm:h-80 md:h-60 rounded-sm ml-4 mb-4 bg-background overflow-clip md:float-right">
              <img className="object-cover" src="/images/me.jpg"></img>
            </div>

            <h1 className="font-primary text-3xl font-semibold text-text">
              Hello,
              <br />
              I&apos;m Joseph Buchholz
            </h1>

            <Paragraph>
              I am a hardworking and skilled computer science student at WSU
              (entering my first year for a masters in CS). I enjoy both the
              problem solving and creative aspects of computer programming which
              I have been exploring for over 7 years now. As I begin pursuing my
              masters degree, I am excited to start delving into the world of
              programming language research.
            </Paragraph>
          </div>
        </Card>

        <Card>
          <ul className="flex flex-row flex-wrap">
            <SocialButton
              link="https://github.com/JosephBuchholz/"
              imageSrc="/images/github_icon.png"
              text="GitHub"
            ></SocialButton>
            <SocialButton
              link="https://www.linkedin.com/in/joseph-buchholz-8b6769323/"
              text="LinkedIn"
            ></SocialButton>
            <SocialButton
              link="https://wsu.joinhandshake.com/profiles/43552814/"
              text="Handshake"
            ></SocialButton>
            <SocialButton
              link="mailto:joseph.buchholz@outlook.com"
              text={
                <span>
                  <span className="inline sm:hidden">
                    Email
                  </span>
                  <span className="hidden sm:inline">
                    joseph.buchholz@outlook.com
                  </span>
                </span>
              }
            ></SocialButton>
          </ul>
        </Card>

        <Card>
          <HeaderText>Programming Languages</HeaderText>

          <Paragraph>Languages I know quite well:</Paragraph>

          <ul className="flex flew-row flex-wrap sm:ml-4">
            <SkillButton
              highlight
              clickable
              onClick={() => {
                setHighlightSkill("C++");
              }}
            >
              C++
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
                setHighlightSkill("Racket");
              }}
            >
              Racket
            </SkillButton>
            <SkillButton
              highlight
              clickable
              onClick={() => {
                setHighlightSkill("TypeScript");
              }}
            >
              TypeScript
            </SkillButton>
          </ul>

          <Paragraph>Languages that I am familiar with:</Paragraph>

          <ul className="flex flew-row flex-wrap sm:ml-4">
            <SkillButton
              highlight
              clickable
              onClick={() => {
                setHighlightSkill("JavaScript");
              }}
            >
              JavaScript
            </SkillButton>
            <SkillButton highlight>C</SkillButton>
            <SkillButton
              highlight
              clickable
              onClick={() => {
                setHighlightSkill("C#");
              }}
            >
              C#
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
                setHighlightSkill("LaTeX");
              }}
            >
              LaTeX
            </SkillButton>
          </ul>

          <Paragraph>
            Languages I have touched at least once (not that that says much):
          </Paragraph>

          <ul className="flex flew-row flex-wrap sm:ml-4">
            <SkillButton
              highlight
              clickable
              onClick={() => {
                setHighlightSkill("Kotlin");
              }}
            >
              Kotlin
            </SkillButton>
            <SkillButton highlight>Java</SkillButton>
            <SkillButton highlight>Dart</SkillButton>
            <SkillButton
              highlight
              clickable
              onClick={() => {
                setHighlightSkill("Datalog");
              }}
            >
              Datalog
            </SkillButton>
            <SkillButton highlight>R</SkillButton>
            <SkillButton highlight>Haskell</SkillButton>
            <SkillButton highlight>PostScript</SkillButton>
            <SkillButton highlight>Logo</SkillButton>
            <SkillButton highlight>CSS</SkillButton>
            <SkillButton highlight>SQL</SkillButton>
            <SkillButton highlight>Flix</SkillButton>
            <SkillButton
              highlight
              clickable
              onClick={() => {
                setHighlightSkill("GLSL");
              }}
            >
              GLSL
            </SkillButton>
            <SkillButton
              highlight
              clickable
              onClick={() => {
                window.open(
                  "https://github.com/JosephBuchholz/lean-practice",
                  "_blank",
                );
              }}
            >
              Lean
            </SkillButton>
            <SkillButton highlight>PHP</SkillButton>
            <SkillButton
              highlight
              clickable
              onClick={() => {
                setHighlightSkill("GDScript");
              }}
            >
              GDScript
            </SkillButton>
          </ul>
        </Card>

        <Card>
          <section id="projects-marker">
            <HeaderText>Main/Recent Projects</HeaderText>
          </section>

          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 sm:m-4">
            <ProjectPanel
              title="Tinkr"
              description="A programming language research project that I am currently assisting my professor Dr. Thomas Gilray on. Tinkr is a language that handles algebraic effects in a new way."
              highlight={
                highlightSkill == "Racket" || highlightSkill == "Python"
              }
              highlightSkill={highlightSkill}
              date="2026"
            ></ProjectPanel>

            <ProjectPanel
              title="Boringlog"
              description="A *Datalog* interpreter written in *Racket* in collaboration with other students."
              highlight={
                highlightSkill == "Racket" || highlightSkill == "Datalog"
              }
              highlightSkill={highlightSkill}
              date="2025-2026"
            ></ProjectPanel>

            <ProjectPanel
              title="Asteroids++"
              description="A small video game made in under 48 hours for the WSU Crimon Game Jam 2025. Created in Godot using *GDScript*."
              websiteLink="https://goldenlava77.itch.io/asteroids"
              highlight={highlightSkill == "GDScript"}
              highlightSkill={highlightSkill}
              date="2025"
              onClick={() => {
                window.location.href = "https://goldenlava77.itch.io/asteroids";
              }}
            ></ProjectPanel>

            <ProjectPanel
              title="Harmonically (Musique)"
              description="A music application that displays standard music notation and
                  guitar tablature with live audio playback. The application was
                  originally developed for Android using *Kotlin* and *C++*. Though
                  now the project has been ported to the Web for greater
                  accessibility using *Emscripten*, *Django*, and *React*."
              githubLink="https://github.com/JosephBuchholz/musique-website"
              highlight={
                highlightSkill == "C++" ||
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
              date="2021-2024"
              onClick={() => {
                animateScroll.scrollToTop({ duration: 0 }); // reset scroll
                navigate("/harmonically");
              }}
            ></ProjectPanel>
          </div>
        </Card>

        <Card>
          <HeaderText>Other Projects</HeaderText>

          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 sm:m-4">
            <ProjectPanel
              title="HotStuff BFT Visualizer"
              description="A simple visualizer website for the HotStuff Byzantine fault tolerance (BFT) algorithm created as a class project for CPT_S 427 at WSU (Spring 2026)."
              githubLink="https://github.com/JosephBuchholz/byzantine-visualizer"
              websiteLink="https://bft.josephbuchholz.com/"
              highlight={highlightSkill == "TypeScript"}
              highlightSkill={highlightSkill}
              date="2026"
              onClick={() => {
                window.location.href = "https://bft.josephbuchholz.com/";
              }}
            ></ProjectPanel>

            <ProjectPanel
              title="Data Science Project"
              description="A small research project aimed at creating a scalable terrain graph representation
                  for watershed delineation and flow routing. The project was done for a course on data science."
              githubLink="https://github.com/JosephBuchholz/cpts-475-watershed-delineation"
              highlight={
                highlightSkill == "Python" || highlightSkill == "LaTeX"
              }
              highlightSkill={highlightSkill}
              date="2025"
              onClick={() => {
                animateScroll.scrollToTop({ duration: 0 }); // reset scroll
                navigate("/data-science-project");
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
              date="2024"
              onClick={() => {
                animateScroll.scrollToTop({ duration: 0 }); // reset scroll
                navigate("/scripture-referencer");
              }}
            ></ProjectPanel>

            <ProjectPanel
              title="Various Video Game Projects"
              description="Multiple video game projects created over many years. Most of these video games were programmed using the Godot game engine using *GDScript* and/or *C++*. Some of them were developed purely with *Python* using Pygame."
              highlight={
                highlightSkill == "C++" ||
                highlightSkill == "Python" ||
                highlightSkill == "GDScript" ||
                highlightSkill == "JavaScript" ||
                highlightSkill == "GLSL"
              }
              highlightSkill={highlightSkill}
              date="2020-2022"
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
              date="2025"
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
              date="2025"
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
              date="2024"
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
                highlightSkill == "JavaScript" ||
                highlightSkill == "TypeScript"
              }
              date="2024-2026"
              highlightSkill={highlightSkill}
              onClick={() => {
                animateScroll.scrollToTop({ duration: 400 }); // reset scroll
                navigate("/home");
              }}
            ></ProjectPanel>
          </div>
        </Card>
      </div>

      <Footer className="mt-20" highlightSkill={highlightSkill}></Footer>
    </main>
  );
}
