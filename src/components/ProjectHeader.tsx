import { GithubLink, ProjectWebsiteLink } from "./Links";
import { ProjectTitle } from "./ProjectPageComponents";

export default function ProjectHeader({
  title,
  githubUrl,
  projectWebsiteUrl,
  date,
}: {
  title: string;
  githubUrl?: string;
  projectWebsiteUrl?: string;
  date: string;
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center">
      <ProjectTitle>{title}</ProjectTitle>

      <div className="flex flex-row items-center ml-5">
        {githubUrl && (
          <div className="min-w-10">
            <GithubLink url={githubUrl}></GithubLink>
          </div>
        )}

        {projectWebsiteUrl && (
          <div className="ml-4">
            <ProjectWebsiteLink url={projectWebsiteUrl}></ProjectWebsiteLink>
          </div>
        )}

        <p className="ml-5 lg:ml-10 text-text-secondary text-sm lg:text-base">
          {date}
        </p>
      </div>
    </div>
  );
}
