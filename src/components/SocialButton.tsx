import { useTheme } from "../hooks/useTheme";

/**
 * Button component for linking to socials such as GitHub or LinkedIn.
 */
export default function SocialButton({
  link,
  imageSrc = null,
  text = "",
}: {
  link: string;
  imageSrc?: string | null;
  text?: any;
}) {
  const { theme: theme } = useTheme();

  return (
    <li className="flex flex-row items-center w-min h-14 m-2 overflow-clip rounded-sm">
      {imageSrc ? (
        <div className="bg-background-panel2 hover:opacity-80 w-14 h-14">
          <a href={link} target="_blank">
            <img
              className={
                theme === "dark"
                  ? "w-14 h-14 hover:opacity-80 bg-background-panel2 p-1"
                  : "w-14 h-14 hover:opacity-80 invert p-1"
              }
              src={imageSrc}
            ></img>
          </a>
        </div>
      ) : (
        <div className="flex h-14">
          <a
            className="flex px-4 h-full items-center hover:opacity-80 bg-background-panel2 text-text hover:text-primary rounded-sm"
            href={link}
            target="_blank"
          >
            <p className="text-md sm:text-lg">{text}</p>
          </a>
        </div>
      )}
    </li>
  );
}
