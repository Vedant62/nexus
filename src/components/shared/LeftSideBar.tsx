import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";
import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";
import { Button } from "../ui/button";
const LeftSideBar = () => {
  const { pathname } = useLocation();
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  useEffect(() => {
    if (isSuccess) {
      navigate(0);
    }
  }, [isSuccess]);

  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/nexus-new.png"
            alt="logo"
            width={230}
            height={100}
          />
        </Link>
        <Link to={`/profile/${user.id}`} className="flex gap-2 items-center">
          <img
            src={user.imageUrl || "/assets/images/profile-placeholder.svg"}
            alt="profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex flex-col">
            <p className=" body-bold">{user.name}</p>
            <p className=" small-regular text-light-3"> @{user.username}</p>
          </div>
        </Link>

        <ul className="flex-col flex gap-6">
          {sidebarLinks.map((link: INavLink) => {
            const isActive = pathname === link.route;
            return (
              <li
                className={`leftsidebar-link group ${
                  isActive && "bg-primary-500"
                }`}
                key={link.label}
              >
                <NavLink
                  to={link.route}
                  className="flex gap-4 items-center p-4"
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`group-hover:invert-white ${
                      isActive && "invert-white"
                    }`}
                  />
                  {link.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Button
        variant="ghost"
        className="shad-button_ghost"
        onClick={() => signOut()}
      >
        <img src="/assets/icons/logout.svg" alt="" />
        <p className=" small-medium lg:base-medium text-gray-300">Logout</p>
      </Button>
    </nav>
  );
};

export default LeftSideBar;
