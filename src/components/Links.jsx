/**
 * Components for links.
 */

import { useTheme } from "../hooks/useTheme";

export function GithubLink({ url }) {
  const { theme: theme } = useTheme();

  return (
    <a className="" href={url} target="_blank">
      <img
        className={theme === "dark" ? "h-14 opacity-90 hover:opacity-80" : "h-14 opacity-90 hover:opacity-80 invert"}
        src="/images/github_icon.png"
      ></img>
    </a>
  );
}

export function ProjectWebsiteLink({ url }) {
  return (
    <a className="text-primary underline" href={url} target="_blank">
      Project<br></br>Website
    </a>
  );
}

export function TextLink({ children, url }) {
  return (
    <a className="text-primary underline" href={url} target="_blank">
      {children}
    </a>
  );
}
