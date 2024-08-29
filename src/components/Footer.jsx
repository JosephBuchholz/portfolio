import HighlightSpan from "./Highlighters";

export default function Footer({ highlightSkill }) {
  return (
    <footer className="h-52 p-4 bg-slate-900 relative z-10">
      <a href="https://www.freepik.com/icon/email_542689#fromView=keyword&page=1&position=0&uuid=9cf6f7e3-e86b-41c6-8051-5349d31a321e">
        <p className="text-slate-400 m-5 underline">Email Icon by Freepik</p>
      </a>
      <p className="text-slate-400 m-5 flex flex-row whitespace-pre">
        Made with{" "}
        <HighlightSpan highlight={highlightSkill == "React"}>
          React
        </HighlightSpan>
        {" and "}
        <HighlightSpan highlight={highlightSkill == "Tailwind CSS"}>
          Tailwind CSS
        </HighlightSpan>
      </p>
    </footer>
  );
}
