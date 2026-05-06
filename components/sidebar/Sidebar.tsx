'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import sidebarData from "@/data/sidebarData";
import CopyRight from "@/components/CopyRight";
import { isActiveLink } from "@/lib/linkActiveChecker";

const Sidebar = () => {
  const pathname = usePathname();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="header">
        <div className="header-inner">
          <div className="logo">
            {pathname !== "/" && (
              <Link className="navbar-brand" href="/">
                <Image
                  width={128}
                  height={43}
                  src="/img/logo/logo-256.svg"
                  alt="Hexonite Software Services"
                />
              </Link>
            )}
          </div>
          {/* End logo */}

          <div className="my_trigger" onClick={handleClick}>
            <div
              className={
                click
                  ? "hamburger hamburger--collapse-r is-active"
                  : "hamburger"
              }
            >
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
            {/* End hamburger menu */}
          </div>
        </div>
      </div>
      {/* Header */}

      {/* START LEFT MENU CONTENT */}
      <div className={click ? "leftpart active" : "leftpart"}>
        <div className="leftpart_inner">
          {pathname === "/" ? (
            <div className="no-logo"></div>
          ) : (
            <div className="logo">
              <Link className="navbar-brand" href="/">
                <Image
                  width={256}
                  height={87}
                  src="/img/logo/logo-256.svg"
                  alt="Hexonite Software Services"
                  title="Hexonite Software Services"
                />
              </Link>
            </div>
          )}
          {/* END LOGO */}

          <div className="menu">
            <ul>
              {sidebarData.map((item) => (
                <li key={item.id} className={item.liClass && item.liClass} onClick={handleClick}>
                  <Link
                    className={isActiveLink(item.routePath, pathname) ? "active" : ""}
                    href={item.routePath}
                  >
                    {item.icon ? (
                      <i className={`svg ${item.icon}`}></i>
                    ) : (item.iconImage ? (
                      <Image
                        width={24}
                        height={24}
                        className="svg"
                        src={item.iconImage}
                        alt="homerun"
                      />
                    ) : null)}
                    <span className="menu_content">{item.menuName}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* END MENU */}

          <CopyRight />
          {/* END COPYRIGHT */}
        </div>
      </div>
      {/* END LEFT MENU CONTENT */}
    </>
  );
};

export default Sidebar;
