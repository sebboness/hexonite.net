import React from "react";

const FlashMessage = ({ type, message, title }) => {
  return (
    <div className="flash">
      <div className={type}>
        {title
          ? <h3>{title}</h3>
          : <></>}
        {message
          ? <p>{message}</p>
          : <></>}
      </div>
    </div>
  );
};

export default FlashMessage;
