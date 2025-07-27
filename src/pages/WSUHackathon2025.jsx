import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ProjectImage,
  ProjectParagraph,
  ProjectTitle,
} from "../components/ProjectPageComponents";
import { GithubLink, ProjectWebsiteLink } from "../components/Links";

/**
 * Project page for the project I did for the WSU 2025 Crimson Hackathon.
 */
export default function WSUHackathon2025Page() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Header useURLNavigation={true}></Header>

      <div>
        <section className="min-h-screen md:ml-20 md:mr-20">
          <div className="flex flex-row items-center">
            <ProjectTitle>Echolog (WSU CrimsonCode 2025)</ProjectTitle>
            <div className="min-w-10">
              <GithubLink url="https://github.com/JosephBuchholz/crimsoncode2025"></GithubLink>
            </div>
            <div className="ml-4">
              <ProjectWebsiteLink url="https://echolog.346135.xyz"></ProjectWebsiteLink>
            </div>

            <p className="ml-10">Feb. 2025</p>
          </div>

          <div className="flex flex-col xl:flex-row">
            {/* Project description */}
            <div className="flex-1">
              <ProjectParagraph>
                This was a quick project that me and another student (Evan
                Glasscock) worked on for a hackathon at WSU (CrimsonCode). The
                project was developed in 24 hours. TypeScript, Svelte, and
                TailwindCSS were used to create the website. The website
                provides a platform for users to find good movie recommendations
                based on other user&apos;s ratings.
              </ProjectParagraph>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </div>
    </main>
  );
}
