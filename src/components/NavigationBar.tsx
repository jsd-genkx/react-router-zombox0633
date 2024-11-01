import { NavLink } from "react-router-dom";
import { navList } from "../constraint/NAV_DATA";

function NavigationBar() {
  return (
    <div className=" fixed top-0 w-full flex items-center bg-black text-white p-5">
      <ul className="flex items-center gap-4">
        {navList.map((item) => (
          <li key={item.id}>
            <NavLink to={item.path} className=" uppercase">
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationBar;
