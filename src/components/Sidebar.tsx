import { LogOut, SidebarClose, SidebarOpen } from "lucide-react";
import { useState } from "react";
import SidebarLink from "./SidebarLink";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

function Sidebar() {
  const [isToggleSidebar, setIsToggleSidebar] = useState("-translate-x-full");

  function toggleSidebar() {
    if (isToggleSidebar === "-translate-x-full") {
      setIsToggleSidebar("translate-x-0");
    } else {
      setIsToggleSidebar("-translate-x-full");
    }
  }

  return (
    <aside className="bg-zinc-50 dark:bg-zinc-950 py-1.5">
      <Button
        size={"iconSmall"}
        variant={"ghost"}
        onClick={toggleSidebar}
        className="ml-1 sm:hidden"
      >
        <SidebarOpen className="text-zinc-300 size-5" />
      </Button>
      <div
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 sm:w-72 h-screen transition-transform sm:translate-x-0 ${isToggleSidebar}`}
        aria-label="Sidebar"
      >
        <div className="h-full px-2 py-2 overflow-y-auto bg-zinc-50 dark:bg-zinc-950 shadow-xl">
          <Button
            size={"iconSmall"}
            variant={"ghost"}
            onClick={toggleSidebar}
            className="sm:hidden"
          >
            <SidebarClose className="text-zinc-300 size-5" />
          </Button>
          <ThemeToggle />
          <ul className="space-y-1 pt-4 sm:pt-4">
            <SidebarLink />
            <li className="pt-5 inline-flex">
              <Button
                variant="outline"
                className="w-full justify-start text-left cursor-pointer"
                onClick={() => {
                  localStorage.removeItem("logado");
                  window.location.href = "/login";
                }}
              >
                <LogOut />
                Logout
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
