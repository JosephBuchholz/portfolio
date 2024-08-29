export default function SkillButton({
  children,
  highlight = false,
  clickable = false,
  onClick = () => {},
}) {
  let className = "px-4 py-2 m-2 rounded-full font-semibold";

  if (clickable) className += " cursor-pointer";
  else className += " cursor-default";

  if (highlight) {
    className += " bg-blue-400";

    if (clickable) className += " hover:bg-blue-300";
  } else {
    className += " bg-slate-300";

    if (clickable) className += " hover:bg-slate-200";
  }

  return (
    <li className={className} onClick={onClick}>
      {children}
    </li>
  );
}
