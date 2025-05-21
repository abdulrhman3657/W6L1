import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav>
        <ul className="flex bg-gray-100 gap-x-3 p-3 justify-center items-center">
          <li className="hover:bg-[#4931AF] hover:text-white p-2 rounded">
            <Link to="./">Home</Link>
          </li>
          <li className="hover:bg-[#4931AF] hover:text-white p-2 rounded">
            <Link to="./programs">programs</Link>
          </li>
          <li className="hover:bg-[#4931AF] hover:text-white p-2 rounded">
            <Link to="./about">about</Link>
          </li>
          <li className="hover:bg-[#4931AF] hover:text-white p-2 rounded">
            <Link to="./contact">contact</Link>
          </li>
        </ul>
        
      </nav>
      
    </>
  );
}

export default Nav;
