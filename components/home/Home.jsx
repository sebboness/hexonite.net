import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typed from "react-typed";
import Social from "../Social";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="page_content">
          <div className="avatar">
            <Image
                width={512}
                height={167}
                src="/img/logo/logo-512.svg"
                alt="Hexonite Software Services"
              />
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <p className="by">by</p>
            <h3 className="name">Sebastian Stefaniuk</h3>
            <h4 className="typer">
              <Typed
                strings={[
                  "consulting services",
                  "software engineering",
                  "system architecture",
                  "coding awesomely",
                  "since 2012",
                ]}
                backDelay={1000}
                cursorChar='█'
                loop
                typeSpeed={40}
              />
            </h4>

            <p className="job">
              Software engineering with a passion and a good eye for design, attention to detail, and a SOLID (pun
              intended) understanding of what makes good code run your business.  
              Learn <Link href="/sebastian">more about me</Link>, then say hello and hire me for your next project.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
