import Seo from "../components/Seo";
import Contact from "../components/contact/Contact";
import Sidebar from "../components/sidebar/Sidebar";

const index = () => {
  return (
    <>
      <Seo pageTitle="Contact" />

      <Sidebar />

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="section">
            <div data-aos="fade-right" data-aos-duration="1200">
              
              <div className="container">
                <div className="contact">
                  <div className="title">
                    <div className="title_flex">
                      <div className="left">
                        <span>Get in Touch</span>
                        <h3>Say hello!</h3>
                      </div>
                    </div>
                  </div>
                  
                  <Contact />
                </div>    
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
