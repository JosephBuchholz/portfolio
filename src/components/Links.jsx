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
