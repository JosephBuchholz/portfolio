/**
 * A button for displaying skills.
 */
export default function SkillButton({
  children,
  highlight = false,
  clickable = false,
  onClick = () => {},
}) {
  let className = "px-4 py-2 m-2 rounded-sm font-semibold text-text-on-primary";

  if (clickable) className += " cursor-pointer";
  else className += " cursor-default";

  if (highlight) {
    className += " bg-primary";

    if (clickable) className += " hover:bg-primary-hover";
  } else {
    className += " bg-secondary";

    if (clickable) className += " hover:bg-secondary-hover";
  }

  return (
    <li className={className} onClick={onClick}>
      {children}
    </li>
  );
}
