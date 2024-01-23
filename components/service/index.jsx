import React from "react";
import Services from "./Services";

const index = () => {
  return (
    <>
      {/* SERVICE */}

      <div className="container">
        <div className="services">
          <div className="title">
            <div className="title_flex">
              <div className="left">
                <span>Services</span>
                <h3>Let&apos;s work together</h3>
              </div>
            </div>
          </div>
          {/* End title */}

          <div className="list">
            <ul>
              <Services />
            </ul>
          </div>
          {/* End list */}
        </div>
      </div>
      {/* End .container */}

      {/* /SERVICE */}
    </>
  );
};

export default index;
