export function ProjectImage({ title, src }) {
  return (
    <div className="m-2 md:m-10">
      <p className="font-semibold text-md sm:text-2xl m-2 text-center">
        {title}
      </p>
      <img className="border border-slate-700 p-2" src={src}></img>
    </div>
  );
}

export function ProjectParagraph({ children }) {
  return <p className="m-5 text-md">{children}</p>;
}

export function ProjectTitle({ children }) {
  return <h1 className="font-bold sm:text-4xl text-xl m-5">{children}</h1>;
}
