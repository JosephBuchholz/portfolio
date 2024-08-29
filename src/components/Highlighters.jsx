export default function HighlightDiv({ children, highlight = true }) {
  let className = "transition-all duration-200";

  if (highlight) className += " bg-yellow-200";

  return <div className={className}>{children}</div>;
}

export function HighlightSpan({ children, highlight = true }) {
  let className = "transition-all duration-200";

  if (highlight) className += " bg-yellow-200";

  return <span className={className}>{children}</span>;
}
