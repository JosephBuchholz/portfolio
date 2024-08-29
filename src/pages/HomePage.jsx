import { useLayoutEffect, useState } from "react";
import Header from "../components/Header";
import SocialButton from "../components/SocialButton";
import HighlightDiv from "../components/Highlighters";
import SkillButton from "../components/SkillButton";
import { Link } from "react-scroll";
import Footer from "../components/Footer";

export default function HomePage() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const [highlightSkill, setHighlightSkill] = useState("");

  useLayoutEffect(() => {
    function onResizeListener() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener("resize", onResizeListener);
    return () => window.removeEventListener("resize", onResizeListener);
  }, []);

  let sideImage = <></>;
  if (windowSize[0] > 500) {
    sideImage = (
      <div className="w-1/2 h-full bg-blue-700 flex-1 content-center">
        <div className="left-0 ml-5 w-80 h-80 rounded-full bg-slate-200 overflow-clip">
          <img className="object-cover" src="images/me.jpg"></img>
        </div>
      </div>
    );
  } else {
    sideImage = (
      <div className="w-1/2 h-full bg-blue-700 flex-1 overflow-clip">
        <img className="h-full object-cover" src="images/me.jpg"></img>
      </div>
    );
  }

  return (
    <main id="home-marker" className="flex flex-col">
      <Header></Header>

      <div>
        <section className="h-screen">
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
                      imageSrc="images/github_icon.png"
                      text="GitHub"
                    ></SocialButton>
                    <SocialButton
                      link="https://www.linkedin.com/in/joseph-buchholz-8b6769323/"
                      imageSrc="images/linkedin_icon.png"
                      text="LinkedIn"
                    ></SocialButton>
                    <SocialButton
                      link="https://wsu.joinhandshake.com/profiles/43552814/"
                      imageSrc="images/handshake_icon.png"
                      text="Handshake"
                    ></SocialButton>
                    <SocialButton
                      link="mailto:joseph.buchholz@outlook.com"
                      imageSrc="images/email_icon.png"
                      text="joseph.buchholz@outlook.com"
                    ></SocialButton>
                  </ul>
                </div>
              </div>

              {sideImage}
            </div>
          </div>
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
                setHighlightSkill("React");
              }}
            >
              React
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

          <HighlightDiv
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
          >
            <p className="ml-4 font-semibold">
              Android/Web Music Application - 2021 to Present
            </p>
            <p className="ml-4">
              Description: A music application that displays standard music
              notation and guitar tablature with live audio playback. The
              application was originally developed for Android using Kotlin and
              C++. Though now I am porting the project to the Web for greater
              accessibility using Emscripten, Django, and React.
            </p>
          </HighlightDiv>

          <br></br>

          <HighlightDiv
            highlight={
              highlightSkill == "Python" ||
              highlightSkill == "JavaScript" ||
              highlightSkill == "HTML" ||
              highlightSkill == "Django" ||
              highlightSkill == "React" ||
              highlightSkill == "Tailwind CSS"
            }
          >
            <p className="ml-4 font-semibold">
              Song Scripture Referencer - 2024 to Present
            </p>
            <p className="ml-4">
              Description: A simple Web application made with Django and React
              that displays Bible references for the lyrics of Christian songs
              and hymns.
            </p>
          </HighlightDiv>

          <br></br>

          <HighlightDiv
            highlight={highlightSkill == "C/C++" || highlightSkill == "Python"}
          >
            <p className="ml-4 font-semibold">
              Video Game Projects - 2020 to 2022
            </p>
            <p className="ml-4">
              Description: Multiple projects consisting of programming and
              designing video games. Most of these video games were programmed
              using the Godot game engine (using Python/GDScript) or C++.
            </p>
          </HighlightDiv>

          <br></br>
        </section>

        <Footer highlightSkill={highlightSkill}></Footer>
      </div>
    </main>
  );
}
