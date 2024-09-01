export default function HighlightDiv({
  children,
  className = "",
  highlight = true,
}) {
  let clsName = "transition-all duration-200 " + className;

  if (highlight) clsName += " bg-yellow-100";

  return <div className={clsName}>{children}</div>;
}

export function HighlightSpan({
  children,
  highlight = true,
  highlightColor = "bg-yellow-200",
}) {
  let className = "transition-all duration-200 rounded-sm";

  if (highlight) className += " " + highlightColor + " pr-0.5 pl-0.5";

  return <span className={className}>{children}</span>;
}
