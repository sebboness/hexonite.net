import React from "react";
import Image from "next/image";

const Resume = () => {
  const resumeContent = [
    {
      id: 1,
      title: "",
      resume: [
        {
          id: 1,
          year: "2023 - 2024",
          institute: "Tilia",
          website: "https://www.tilia.io/",
          websiteIcon: "/img/logo/tilia-32.png",
          degree: "Senior Software Engineer",
          desc: <>
            <p>
              At Tilia, I had the opportunity to work on different parts of a leading virtual economy backend, which
              included payment processing, invoicing systems, tax processing, as well as accounting and PII management.
              The company provides services to power virtual economies using payments, virtual tokens, and in-app
              purchases in a highly distributed system. My experience included being on week-long on-call shifts
              responsible for responding to alerts and outages.
            </p>
          </>,
        },
        {
          id: 2,
          year: "2020 - 2022",
          institute: "Mitek Systems",
          website: "https://www.miteksystems.com/",
          websiteIcon: "/img/logo/mitek-32.png",
          degree: "Senior Software Engineer",
          desc: <>
            <p>
              In 2020 I wanted to try something new and decided to change direction and move away from web development
              and into another branch of software engineering. At Mitek Systems in San Diego, I joined the internal
              tooling team responsible for building tools to help the development of an industry-leading digital identity
              verification system. This experience allowed me to get a good understanding of a highly available system
              with strict security and protection of PII data. I also had the opportunity to be a technical lead on a
              project and mentor fellow team members.
            </p>
          </>,
        },
        {
          id: 3,
          year: "2012 - 2019",
          institute: (<>Webitects.com <span>(now out of business)</span></>),
          degree: "Fullstack Software Engineer",
          desc: <>
            <p>
              I started my career in 2012 as a Fullstack Web Developer at Webitects.com (now out of business) where I
              stayed for almost eight years. I spent a lot of time at that company crafting my front and back end skills
              primarily in .NET (first ASP.NET 4.x, then .NET Core) and various JavaScript frameworks ranging
              from jQuery to KnockoutJS, to Angular, to ReactJS, and NextJS.
            </p>
            <p>
              I have to admit it was a lot of fun learning all the different technologies, and
              applying good coding practices to a wide range of projects. But the most satisfying aspect was to receive
              feedback from clients about how useful our work was to what they needed.
            </p>
          </>,
        },
      ],
    },
  ];
  return (
    <>
      {resumeContent.map((item) => (
        <div key={item.id}>
          <div className="section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="resume_list">
            <ul>
              {item?.resume?.map((value) => (
                <li key={value.id}>
                  <div className="list_inner">
                    <div className="time">
                      <span>{value.year}</span>
                    </div>
                    <div className="place">
                      <h4>
                        {value.websiteIcon
                          ? <Image width={24} height={24} src={value.websiteIcon} alt={value.institute} />
                          : <></>}
                        {value.website
                          ? <a href={value.website} target="_blank">{value.institute}</a>
                          : value.institute}
                      </h4>
                      <span>{value.degree}</span>
                      {value.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
