import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AdminSidebar } from "../util/Products";

const SidebarLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openSubmenu, setOpenSubmenu] = useState(null); // State to handle open submenu

  const toggleSubmenu = (idx) => {
    setOpenSubmenu(openSubmenu === idx ? null : idx);
  };

  return (
    <div>
      {AdminSidebar.map((item, idx) => {
        const isActive = location.pathname === item.path;
        const isSubmenuOpen = openSubmenu === idx;

        return (
          <div key={idx} className="rounded-md py-2 px-3 my-1 dark:bg-black ">
            <section
              className={`flex items-center px-0 lg:px-2 py-1 rounded-md 
                  ${
                    isActive
                      ? "bg-violet-600 transition duration-500 text-white"
                      : "hover:bg-zinc-400 hover:transition hover:duration-500 duration-700 hover:scale-105 hover:text-black"
                  }`}
              onClick={() => {
                `${
                  item.submenu
                    ? toggleSubmenu(idx) && navigate(item.path)
                    : navigate(item.path)
                }`;
              }}
            >
              <p className=" mx-auto lg:mx-0">{item.icon}</p>
              <h1 className="px-2 py-1.5 lg:block hidden">{item.title}</h1>
            </section>

            {isSubmenuOpen && item.submenu && (
              <div className="pl-0 lg:pl-3">
                {item.submenu.map((submenuItem) => (
                  <section
                    key={submenuItem.id}
                    className={`flex items-center px-0 lg:px-2 py-1 my-1 rounded-md 
                        ${
                          location.pathname === submenuItem.path
                            ? "bg-violet-600 transition duration-500 text-white"
                            : "hover:bg-zinc-400 hover:transition hover:duration-500 duration-700 hover:scale-105 hover:text-black"
                        }`}
                    onClick={() => navigate(submenuItem.path)}
                  >
                    <p className=" mx-auto lg:mx-0">{submenuItem.icon}</p>
                    <h1 className="px-2 py-1.5 lg:block hidden">
                      {submenuItem.name}
                    </h1>
                  </section>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SidebarLayout;
