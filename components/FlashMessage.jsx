import React from "react";

const FlashMessage = ({ type, message, title, errors }) => {
  return (
    <div className="flash">
      <div className={type}>
        {title
          ? <h4>{title}</h4>
          : <></>}
        {message
          ? <p>{message}</p>
          : <></>}
        {errors
          ? <ul>{errors.map((e, i) => <li key={i}>{e}</li>)}</ul>
          : <></>}
      </div>
    </div>
  );
};

export default FlashMessage;
