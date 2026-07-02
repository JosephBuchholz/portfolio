import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SkillButton from "../components/SkillButton";
import ProjectPanel from "../components/ProjectPanel";

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
  const [highlightSkill, setHighlightSkill] = useState("");

  return (
    <main
      id="home-marker"
      className="flex flex-col overflow-x-hidden bg-background h-screen"
    >
      <Header></Header>

      <div className="self-center w-2/3 max-w-3xl">
        <Card>
          <div className="flex flex-row justify-between">
            <div>
              <h1 className="font-primary text-3xl font-semibold text-text">
                Hello,
                <br />
                I&apos;m Joseph Buchholz
              </h1>
              <Paragraph>
                I am a hardworking and skilled computer science student at WSU
                (entering my first year for a masters in CS). I enjoy both the
                problem solving and creative aspects of computer programming
                which I have been exploring for over 7 years now. As I begin
                pursuing my masters degree, I am excited to start delving into
                the world of programming language research.
              </Paragraph>
            </div>

            <div className="min-w-60 w-60 h-60 rounded-sm ml-4 bg-background overflow-clip">
              <img className="object-cover" src="/images/me.jpg"></img>
            </div>
          </div>
        </Card>

        <Card>
          <HeaderText>Programming Languages</HeaderText>

          <Paragraph>Languages I have used extensively:</Paragraph>

          <ul className="flex flew-row flex-wrap ml-4">
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

          <Paragraph>Languages that I am competent in:</Paragraph>

          <ul className="flex flew-row flex-wrap ml-4">
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

          <ul className="flex flew-row flex-wrap ml-4">
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
            <SkillButton highlight>Datalog</SkillButton>
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
                window.open(
                  "https://github.com/JosephBuchholz/lean-practice",
                  "_blank",
                );
              }}
            >
              Lean
            </SkillButton>
            <SkillButton highlight>PHP</SkillButton>
            <SkillButton highlight>GDScript</SkillButton>
          </ul>
        </Card>

        <Card>
          <HeaderText>Projects</HeaderText>

          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 m-4">
            <ProjectPanel
              title="Datalog Interpreter"
              description="A Datalog interpreter written in *Racket* in collaboration with other students."
              highlight={highlightSkill == "Racket"}
              highlightSkill={highlightSkill}
              date="2025"
            ></ProjectPanel>
          </div>
        </Card>

        <Card>
          <Paragraph>More text ....</Paragraph>
        </Card>

        <Card>
          <Paragraph>More text ....</Paragraph>
        </Card>
      </div>

      <Footer className="mt-20" highlightSkill={highlightSkill}></Footer>
    </main>
  );
}
