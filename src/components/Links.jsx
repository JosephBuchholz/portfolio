export function GithubLink({ url }) {
  return (
    <a className="" href={url} target="_blank">
      <img
        className="h-10 hover:opacity-80"
        src="/images/github_icon.png"
      ></img>
    </a>
  );
}

export function TextLink({ children, url }) {
  return (
    <a className="text-blue-500 underline" href={url} target="_blank">
      {children}
    </a>
  );
}
