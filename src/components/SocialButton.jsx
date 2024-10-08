import { useState } from "react";

/**
 * Button component for linking to socials such as GitHub or LinkedIn.
 */
export default function SocialButton({ link, imageSrc, text }) {
  const [hover, setHover] = useState(false);

  return (
    <li
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="flex flex-row items-center w-min h-8 md:h-14 mt-2 overflow-clip transition-all duration-75 hover:bg-slate-200 hover:w-full rounded-r-full rounded-l-md"
    >
      <div className="w-20 h-8 md:h-14">
        <a className="" href={link} target="_blank">
          <img className="h-8 md:h-14 bg-white p-1" src={imageSrc}></img>
        </a>
      </div>

      {hover ? (
        <p className="text-gray-800 font-semibold text-xs sm:text-sm text-ellipsis md:text-base">
          {text}
        </p>
      ) : (
        <></>
      )}
    </li>
  );
}
