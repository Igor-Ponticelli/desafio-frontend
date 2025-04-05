import { HandCoins, Home, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

function SidebarLink() {
  const baseLinkSidebar =
    "flex items-center gap-3 rounded p-2 transition-colors";
  const linkSidebar = ({ isActive }: { isActive: boolean }) =>
    `${baseLinkSidebar} ${isActive ? "bg-zinc-800" : "hover:bg-zinc-800"}`;
  const iconClass = (isActive: boolean) =>
    isActive ? "stroke-white" : "stroke-zinc-400";
  const textClass = (isActive: boolean) =>
    isActive ? "text-white" : "text-zinc-400";

  return (
    <>
      <li>
        <NavLink to="/dashboard" end className={linkSidebar}>
          {({ isActive }) => (
            <>
              <Home size={20} className={iconClass(isActive)} />
              <span className={`block ${textClass(isActive)}`}>Início</span>
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/clientes" className={linkSidebar}>
          {({ isActive }) => (
            <>
              <Users size={20} className={iconClass(isActive)} />
              <span className={`block ${textClass(isActive)}`}>Clientes</span>
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cobrancas" className={linkSidebar}>
          {({ isActive }) => (
            <>
              <HandCoins size={20} className={iconClass(isActive)} />
              <span className={`block ${textClass(isActive)}`}>Cobranças</span>
            </>
          )}
        </NavLink>
      </li>
    </>
  );
}

export default SidebarLink;
