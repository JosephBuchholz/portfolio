import { HighlightSpan } from "./Highlighters";
import { useTheme } from "../hooks/useTheme";

/**
 * Basic reusable footer.
 */
export default function Footer({ highlightSkill = "", className = "" }) {
  const { theme: theme, onChangeTheme: onChangeTheme } = useTheme();

  return (
    <footer className={`h-52 p-4 bg-background-footer relative z-10 bottom-0 w-full ${className}`}>
      <button
        className="text-text-footer m-5 flex flex-row whitespace-pre cursor-pointer underline"
        onClick={() => {
          console.log("Theme: " + theme);
          onChangeTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Toggle Theme
      </button>
      <p className="text-text-footer m-5 flex flex-row whitespace-pre">
        Made with{" "}
        <HighlightSpan
          highlight={highlightSkill == "React"}
          highlightColor="bg-slate-700"
        >
          React
        </HighlightSpan>
        {" and "}
        <HighlightSpan
          highlight={highlightSkill == "Tailwind CSS"}
          highlightColor="bg-slate-700"
        >
          Tailwind CSS
        </HighlightSpan>
      </p>
      <p className="text-text-footer m-5 flex flex-row whitespace-pre">
        &copy; 2026 Joseph Buchholz
      </p>
    </footer>
  );
}
