import "./index.scss";
import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { TfiBarChart } from "react-icons/tfi";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { MdOutlineArrowDropDown, MdOutlinePeopleAlt } from "react-icons/md";
import { RiAppsLine } from "react-icons/ri";
import {
  Menu,
  MenuButton,
  Box,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import icon1 from "assets/app-bar-list-1.png";
import icon2 from "assets/app-bar-list-2.png";
import icon3 from "assets/app-bar-list-3.png";
import icon4 from "assets/app-bar-list-4.png";

const appList = [
  {
    id: 1,
    img: icon1,
    label: "Link in Bio",
    description: "Manage your Link in Bio",
  },
  {
    id: 2,
    img: icon2,
    label: "Store",
    description: "Manage your Store activities",
  },
  {
    id: 3,
    img: icon3,
    label: "Media Kit",
    description: "Manage your Media Kit",
  },
  {
    id: 4,
    img: icon4,
    label: "Invoicing",
    description: "Manage your invoices",
  },
  { id: 5, img: icon4, label: "Bookings", description: "Manage your bookings" },
];
const links = [
  {
    id: 1,
    name: "Home",
    icon: <IoHomeOutline size="20px" />,
  },
  {
    id: 2,
    name: "Analytics",
    icon: <TfiBarChart size="20px" />,
  },
  {
    id: 3,
    name: "Revenue",
    icon: <LiaMoneyBillSolid size="20px" />,
  },
  {
    id: 4,
    name: "CRM",
    icon: <MdOutlinePeopleAlt size="20px" />,
  },
];
const Navigation = () => {
  const [active, setActive] = useState(3);

  return (
    <div className="app-header-nav-container flex items-center gap-[25px]">
      {links.map((link) => (
        <div
          key={link.id}
          className={`app-header-nav-link flex items-center gap-1 cursor-pointer ${
            link.id === active ? "active" : ""
          }`}
          onClick={() => setActive(link.id)}
        >
          {link.icon}
          <span className="app-header-nav-link-text inline-block">
            {link.name}
          </span>
        </div>
      ))}
      <Menu isLazy closeOnSelect={false}>
        <MenuButton
          as={Box}
          className="cursor-pointer app-custom-app-header-menu"
          onClick={() => setActive(5)}
        >
          <div className="app-header-actions-user-toggle flex items-center gap-2 ">
            <div
              className={`app-header-nav-link flex items-center gap-1 cursor-pointer ${
                active === 5 ? "active" : ""
              }`}
            >
              <RiAppsLine size="20px" />
              <span className="app-header-nav-link-text inline-block">
                Apps
              </span>
              {active === 5 ? (
                <Button
                  rightIcon={
                    <MdOutlineArrowDropDown className="" size="20px" />
                  }
                  className="flex items-center text-white"
                  variant={"ghost"}
                  size={"sm"}
                >
                  Link in Bio
                </Button>
              ) : (
                ""
              )}
            </div>
          </div>
        </MenuButton>
        <MenuList className="app-custom-header-menu-options flex flex-col gap-6">
          <div className="flex flex-col font-semibold text-sm gap-1">
            {appList.map((app) => (
              <MenuItem
                className="hover:bg-white app-custom-header-menu-option hover:rounded-xl hover:border-1 hover:shadow-sm hover:border-gray-50 "
                icon={
                  <div className="rounded-xl border-2 p-1 border-gray-100">
                    <img src={app.img} alt="Icon" />
                  </div>
                }
                key={app.id}
              >
                <div className="flex items-center gap-3 justify-between">
                  <div className="flex flex-col gap-1 py-3">
                    <p className="font-semibold">{app.label}</p>{" "}
                    <p className="text-sm font-normal text-gray-500">
                      {app.description}
                    </p>
                  </div>
                  <p className="hidden--icon text-gray-400">{">"}</p>
                </div>
              </MenuItem>
            ))}
          </div>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Navigation;
