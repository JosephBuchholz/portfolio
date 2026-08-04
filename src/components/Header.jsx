import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import useWindowDimensions from "../hooks/useWindowDimensionsHook";

/**
 * Basic reusable header.
 */
export default function Header({ useURLNavigation = false }) {
  return <NavigationBar useURLNavigation={useURLNavigation}></NavigationBar>;
}

function NavigationBar({ useURLNavigation = false }) {
  // Window width and height
  const { height, width } = useWindowDimensions();

  return (
    <div className="flex bg-background-header top-0 w-screen h-16 justify-between z-50 sticky">
      <ul className="flex justify-end items-center mx-6 sm:mx-16 md:mx-28 w-full">
        {width > 200 ? (
          <ListLink
            toID="home-marker"
            toURL="/home"
            useURLNavigation={useURLNavigation}
          >
            Home
          </ListLink>
        ) : (
          <></>
        )}
        {/*<ListLink
          toID="skills-marker"
          toURL="/home/skills"
          useURLNavigation={useURLNavigation}
        >
          Skills
        </ListLink>
        <ListLink
          toID="projects-marker"
          toURL="/home/projects"
          useURLNavigation={useURLNavigation}
        >
          Projects
        </ListLink>*/}
        <ListLink toURL="/resume" useURLNavigation={useURLNavigation}>
          Resume
        </ListLink>
      </ul>
    </div>
  );
}

function ListLink({
  toID = "",
  toURL = "",
  useURLNavigation = false,
  children,
}) {
  return (
    <>
      <li className="text-center text-text mt-6 mb-6 mr-1 ml-1 sm:m-6 p-1">
        <NavLink
          activeClass="active"
          toID={toID}
          toURL={toURL}
          useURLNavigation={useURLNavigation}
          className="hover:text-primary transition-colors ease-in-out delay-50 font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer"
        >
          {children}
        </NavLink>
      </li>
    </>
  );
}

function NavLink({
  toID = "",
  toURL = "",
  useURLNavigation = false,
  activeClass = "",
  className = "",
  children,
}) {
  const navigate = useNavigate();

  let link = <></>;
  if (useURLNavigation || toID == "") {
    link = (
      <p
        className={className}
        onClick={() => {
          navigate(toURL);
        }}
      >
        {children}
      </p>
    );
  } else {
    link = (
      <Link
        activeClass={activeClass}
        smooth={true}
        spy={true}
        to={toID}
        className={className}
      >
        {children}
      </Link>
    );
  }

  return <>{link}</>;
}
