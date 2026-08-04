import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ProjectImage,
  ProjectParagraph,
} from "../components/ProjectPageComponents";
import { TextLink } from "../components/Links";
import MainContainer from "../components/MainContainer";
import ProjectHeader from "../components/ProjectHeader";

/**
 * Project page for CPT_S 487 game project.
 */
export default function GuineaPigGamePage() {
  return (
    <MainContainer>
      <Header useURLNavigation={true}></Header>

      <div>
        <section className="min-h-screen md:ml-20 md:mr-20">
          <ProjectHeader
            title="Guinea Pig Video Game"
            githubUrl="https://github.com/JosephBuchholz/nexus-horizon-game"
            date="Jan. 2025 - Apr. 2025"
          />

          {/* Project description */}
          <div className="flex flex-col xl:flex-row">
            <div className="flex-1">
              <ProjectParagraph>
                This was a simple bullet hell style game I helped make with a
                team of five other students for CPT_S 487 (Software Design &
                Architecture) at WSU. The game was created using C# and MonoGame
                over the course of about four months. Significant focus was put
                on design over playability/features. Because of this the project
                won "Best Design" points on the class assignment. The game was
                inspired by{" "}
                <TextLink url="https://www.youtube.com/@GuineaPigsAdventures">
                  my friend&apos;s YouTube channel
                </TextLink>
                .
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
    </MainContainer>
  );
}
