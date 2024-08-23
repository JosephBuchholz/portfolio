import { Link } from "react-scroll";

export default function Header() {
  return <NavigationBar></NavigationBar>;
}

function NavigationBar() {
  return (
    <div className="flex bg-gray-50 top-0 w-screen h-16 justify-between z-50 sticky">
      <div className="flex justify-center items-center text-center">
        <Link
          smooth={true}
          spy={true}
          to="home-marker"
          className="text-3xl font-bold text-black m-6 p-1 cursor-pointer"
        >
          Joseph
        </Link>
      </div>

      <ul className="flex justify-center items-center mr-8">
        <NavLink to="home-marker">Home</NavLink>
        <NavLink to="skills-marker">Skills</NavLink>
        <NavLink to="projects-marker">Projects</NavLink>
      </ul>
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <>
      <li className="text-center m-6 p-1">
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          to={to}
          className="hover:text-blue-600 transition-colors ease-in-out delay-50 font-semibold hover:underline hover:underline-offset-4 hover:decoration-2 cursor-pointer"
        >
          {children}
        </Link>
      </li>
    </>
  );
}
