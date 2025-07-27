import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ProjectImage,
  ProjectParagraph,
  ProjectTitle,
} from "../components/ProjectPageComponents";
import { TextLink } from "../components/Links";

/**
 * Project page for my various video game projects.
 */
export default function VideoGameProjectsPage() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Header useURLNavigation={true}></Header>

      <div>
        <section className="min-h-screen md:ml-20 md:mr-20">
          <div className="flex flex-row items-center">
            <ProjectTitle>Video Game Projects</ProjectTitle>

            <p className="ml-10">2020 - 2022</p>
          </div>

          {/* Project description + images (left column) */}
          <div className="flex flex-col xl:flex-row">
            <div className="flex-1">
              <ProjectParagraph>
                These various video game projects were developed over many
                years. Tetris Hacked was one of the first games that I
                developed. It was basically just a Tetris clone with some
                additional features. I made the game using Python's Pygame
                library and with some help from javidx9 (OneLoneCoder) on{" "}
                <TextLink url="https://www.youtube.com/watch?v=8OK8_tHeCIA">
                  YouTube
                </TextLink>
                . In addition to Tetris Hacked, I made various other small game
                prototypes with Python and Pygame, and also some with
                JavaScript.
              </ProjectParagraph>
              <ProjectParagraph>
                I also created a Ball Puzzle Game using the Hazel game engine
                (which I built following along with another{" "}
                <TextLink url="https://www.youtube.com/watch?v=JxIZbV_XjAs&list=PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT">
                  tutorial series
                </TextLink>
                ). The game was made using purely C++ and the Hazel engine
                (which uses OpenGL for rendering). I also made some other game
                prototypes with that tech stack.
              </ProjectParagraph>
              <ProjectParagraph>
                Finaly, for my last few game projects, I used the Godot game
                engine which uses GDScript for its scripting language (which is
                very similar to Python). I made a few game projects with the
                help of a friend who helped design the game and made the pixel
                art for the game. I did all of the programming. One of the games
                used networking to support multiple players. This set of games
                were the last ones I made. I then moved on to developing real
                world applications. Overall, while I never got to fully release
                any of these games, I did learn a considerable amount while
                developing them, and they were what got me into the realm of
                computer science.
              </ProjectParagraph>
              <ProjectImage
                title="Ball Puzzle Game"
                src="/images/ball_game.png"
              ></ProjectImage>
              <ProjectImage
                title="Godot: Multiplayer Game"
                src="/images/multiplayer_game.png"
              ></ProjectImage>
              <ProjectImage
                title="Godot: Knight Game"
                src="/images/knight_game.png"
              ></ProjectImage>
            </div>

            {/* Project images (right column) */}
            <div className="flex-1">
              <ProjectImage
                title="Tetris Hacked: Title Screen"
                src="/images/tetris_hacked1.png"
              ></ProjectImage>
              <ProjectImage
                title="Tetris Hacked: Gameplay"
                src="/images/tetris_hacked2.png"
              ></ProjectImage>
              <ProjectImage
                title="Tetris Hacked: T-Mode"
                src="/images/tetris_hacked3.png"
              ></ProjectImage>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </div>
    </main>
  );
}
