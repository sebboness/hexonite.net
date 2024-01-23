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
    iconName: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/sebboness/",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} rel="noreferrer">
              {/* <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img> */}
              <i className={val.iconName}></i>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
