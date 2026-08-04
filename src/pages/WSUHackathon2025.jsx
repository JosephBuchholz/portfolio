import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ProjectParagraph,
} from "../components/ProjectPageComponents";
import MainContainer from "../components/MainContainer";
import ProjectHeader from "../components/ProjectHeader";

/**
 * Project page for the project I did for the WSU 2025 Crimson Hackathon.
 */
export default function WSUHackathon2025Page() {
  return (
    <MainContainer>
      <Header useURLNavigation={true}></Header>

      <div>
        <section className="min-h-screen md:ml-20 md:mr-20">
          <ProjectHeader
            title="Echolog (WSU CrimsonCode 2025)"
            githubUrl="https://github.com/JosephBuchholz/crimsoncode2025"
            projectWebsiteUrl="https://echolog.346135.xyz"
            date="Feb. 2025"
          />

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
    </MainContainer>
  );
}
