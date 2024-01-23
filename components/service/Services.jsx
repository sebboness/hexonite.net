import React from "react";
import { useRouter } from 'next/navigation'
import Modal from "react-modal";
import servicesData from "../../data/servicesData";

Modal.setAppElement("#__next");

const Services = () => {
  const router = useRouter()

  return (
    <>
      {servicesData.map((item, i) => (
        <li key={i}>
          <div className={`list_inner ${item.bgImgClass}`} onClick={(e) => router.push({ pathname: "/contact" })}>
            <span className="number"><i className={`fa-solid fa-${item.no}`}></i></span>
            <h3 className="title">{item.title}</h3>
            <p className="text">{item.text}</p>
            <div className="read_more">
              <div className="read-more">
                <span>Ask me about it</span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default Services;
