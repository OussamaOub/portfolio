import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Wave from "react-wavify";
import CircleLogo from "../assets/circle.svg";

type NavItemProp = {
  name: string;
  link: string;
  active?: boolean;
};

const navItems: NavItemProp[] = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
  {
    name: "Projects",
    link: "#",
  },
  {
    name: "Contact",
    link: "#",
  },
];

function Navigation() {
  const [active, setActive] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Wave
        mask="url(#mask)"
        fill="#00008b"
        style={{
          position: "fixed",
          zIndex: "1",
          width: "100%",
          height: "100px",
          left: 0,
          rotate: "180deg",
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(15)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
      <Wave
        mask="url(#mask)"
        fill="green"
        style={{
          zIndex: "1",
          width: "100%",
          height: "100px",
          rotate: "180deg",
          right: 0,
          position: "fixed",
        }}
        className="scale-x-[-1]"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(-10)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.8" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>

      <Navbar onMenuOpenChange={(open) => setIsMenuOpen(open)}>
        <NavbarBrand aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          <img
            src={CircleLogo}
            alt="Logo"
            className="w-8 h-8"
            data-spin="true"
          />
          <p
            className="font-bold text-inherit ml-1
          mobile:hidden
          "
          >
            ussama
          </p>
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarContent
          className="hidden sm:flex gap-14
        mobile:gap-0 mobile:flex-col mobile:items-center mobile:justify-center mobile:text-red-500
        "
          justify="center"
        >
          {navItems.map((item, index) => {
            return (
              <NavbarItem
                key={index}
                isActive={active === index}
                onClick={() => setActive(index)}
                // aria-hidden="false"
              >
                <Link color="foreground" href={item.link}>
                  {item.name}
                </Link>
              </NavbarItem>
            );
          })}
          <NavbarMenu>
            {navItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === navItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  className="w-full"
                  href="#"
                  size="lg"
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </NavbarContent>
        <NavbarContent justify="end"></NavbarContent>
        {/* <div className="-z-10 absolute left-1/2"> */}
        {/* </div> */}
      </Navbar>
    </>
  );
}

export default Navigation;
