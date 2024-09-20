import HighlightDiv from "../components/Highlighters";
import { HighlightSpan } from "./Highlighters";

export default function ProjectPanel({
  title,
  description,
  githubLink = "",
  highlight,
  highlightSkill = "",
  onClick = () => {},
}) {
  let links = [];

  // add GitHub link if there is one
  if (githubLink != "") {
    links.push(
      <div className="w-10 ml-auto mt-auto mr-0 mb-0" key={"github-link"}>
        <a className="" href={githubLink} target="_blank">
          <img
            className="h-10 hover:opacity-80"
            src="/images/github_icon.png"
          ></img>
        </a>
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
  for (let word of words) {
    let noSkill = true;
    for (let skill of skills) {
      if (word == skill) {
        newWords.push(
          <HighlightSpan highlight={highlight} highlightColor="bg-yellow-300">
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
      className="flex p-4 bg-slate-200 rounded-lg"
      highlight={highlight}
    >
      <div className="flex flex-col">
        <p className="font-semibold text-2xl cursor-pointer" onClick={onClick}>
          {title}
        </p>
        <p className="">{newWords}</p>
        <div className="flex-1">{links}</div>
      </div>
    </HighlightDiv>
  );
}
