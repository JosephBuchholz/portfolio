import HighlightDiv from "../components/Highlighters";
import { Paragraph } from "../pages/HomePage";
import { HighlightSpan } from "./Highlighters";
import { GithubLink } from "./Links";
import { ProjectWebsiteLink } from "./Links";

/**
 * Project panel component, links to the project page (on the home page).
 */
export default function ProjectPanel({
  title,
  description,
  githubLink = "",
  websiteLink = "",
  highlight,
  highlightSkill = "",
  date = "",
  onClick = () => {},
}) {
  let links = [];

  // add GitHub link if there is one
  if (githubLink != "") {
    links.push(
      <div className="m-2" key={"github-link"}>
        <GithubLink url={githubLink}></GithubLink>
      </div>
    );
  }

  // add Website link if there is one
  if (websiteLink != "") {
    links.push(
      <div className="m-2" key={"website-link"}>
        <ProjectWebsiteLink url={websiteLink}></ProjectWebsiteLink>
      </div>
    );
  }

  // add variations of the name of the skill
  let skills = [];
  if (highlightSkill == "C/C++") {
    skills.push("C++");
    skills.push("C");
    skills.push("C/C++");
  } else {
    skills.push(highlightSkill);
  }

  // highlight words in the description that match the skill (these words are surrounded by '*')
  let words = description.split("*");
  let newWords = [];
  let key = 0;
  for (let word of words) {
    let noSkill = true;
    for (let skill of skills) {
      if (word == skill) {
        newWords.push(
          <HighlightSpan highlight={highlight} highlightColor="bg-primary" key={key++}>
            {word}
          </HighlightSpan>
        );

        noSkill = false;
        break;
      }
    }

    if (noSkill) {
      newWords.push(word);
    }
  }

  return (
    <HighlightDiv
      className="flex p-4 bg-background-panel2 rounded-sm"
      highlight={highlight}
    >
      <div className="flex flex-col">
        <p
          className="font-semibold text-2xl cursor-pointer text-text hover:text-primary"
          onClick={onClick}
        >
          {title}
        </p>
        <p className="mb-2 text-text-secondary">{date}</p>
        <Paragraph className="mb-2">{newWords}</Paragraph>
        <div className="flex-1 flex">
          <div className="ml-auto mt-auto mr-0 mb-0 flex flex-row items-center">{links}</div>
        </div>
      </div>
    </HighlightDiv>
  );
}
