import Image from "next/image";
import Link from "next/link";
import sidebarData from "../../data/sidebarData";
import CopyRight from "../CopyRight";
import { isActiveLink } from "../../utilis/linkActiveChecker";
import { useRouter } from "next/router";
import { useState } from "react";

const Sidebar = () => {
  const router = useRouter();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="header">
        <div className="header-inner">
          <div className="logo">
            {router.asPath == "/"
              ? <></>
              : <Link className="navbar-brand" href="/">
              <Image
                width={128}
                height={43}
                src="/img/logo/logo-256.svg"
                alt="Hexonite Software Services"
              />
            </Link>}
            
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
          {router.asPath == "/"
            ? <div className="no-logo"></div>
            : <div className="logo">
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
            
          }
          
          {/* END LOGO */}

          <div className="menu">
            <ul>
              {sidebarData.map((item) => {
                // if (item.routePath == "/" && router.asPath == "/") {
                //   return null;
                // }

                return <li key={item.id} className={item.liClass && item.liClass} onClick={handleClick}>
                  <Link
                    className={`${
                      isActiveLink(item.routePath, router.asPath)
                        ? "active "
                        : ""
                    }`}
                    href={item.routePath}
                  >
                    {item.icon
                      ? <i className={`svg ${item.icon}`}></i>
                      : <Image
                      width={24}
                      height={24}
                      className="svg"
                      src={item.iconImage}
                      alt="homerun"
                    />}
                    <span className="menu_content">{item.menuName}</span>
                  </Link>
                </li>
              })}
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
