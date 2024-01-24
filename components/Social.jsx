import React from "react";

const SocialShare = [
  // {
  //   iconName: "facebook",
  //   link: "https://www.facebook.com/",
  // },
  // { iconName: "twitter", link: "https://twitter.com/" },
  // {
  //   iconName: "instagram",
  //   link: "https://www.instagram.com/",
  // },
  // { iconName: "dribbble", link: "https://dribbble.com/" },
  {
    alt: "Sebastian Stefaniuk",
    img: "/img/seb-headshot-closeup-256.svg",
    link: "/sebastian",
    liClass: "seb-icon",
  },
  {
    iconName: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/sebboness/",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li className={val.liClass} key={i}>
            <a href={`${val.link}`} rel="noreferrer">
              {val.img
                ? <img
                    src={val.img}
                    alt={val.alt}
                    width={48}
                    height={48}
                  ></img>
                : <i className={val.iconName}></i>}
              
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
