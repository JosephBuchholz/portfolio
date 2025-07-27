import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ProjectImage,
  ProjectParagraph,
  ProjectTitle,
} from "../components/ProjectPageComponents";
import { GithubLink } from "../components/Links";

/**
 * Project page for CPT_S 487 game project.
 */
export default function GuineaPigGamePage() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Header useURLNavigation={true}></Header>

      <div>
        <section className="min-h-screen md:ml-20 md:mr-20">
          <div className="flex flex-row items-center">
            <ProjectTitle>Guinea Pig Video Game</ProjectTitle>
            <div className="min-w-10">
              <GithubLink url="https://github.com/JosephBuchholz/nexus-horizon-game"></GithubLink>
            </div>

            <p className="ml-10">Jan. 2025 - Apr. 2025</p>
          </div>

          {/* Project description */}
          <div className="flex flex-col xl:flex-row">
            <div className="flex-1">
              <ProjectParagraph>
                This was a simple bullet hell style game I helped make with a
                team of five other students for CPT_S 487 (Software Design &
                Architecture) at WSU. The game was created using C# and MonoGame
                over the course of about four months. Significant focus was put
                on design over playability/features. Because of this the project
                won "Best Design" points on the class assignment.
              </ProjectParagraph>
            </div>

            {/* Project images */}
            <div className="flex-1">
              <ProjectImage
                title="Cats and Birds"
                src="/images/guinea_pig_game1.png"
              ></ProjectImage>
            </div>

            <div className="flex-1">
              <ProjectImage
                title="Evil Guinea Pig Boss"
                src="/images/guinea_pig_game2.png"
              ></ProjectImage>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </div>
    </main>
  );
}
