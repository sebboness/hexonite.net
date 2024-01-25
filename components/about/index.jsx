import React, { useState } from "react";
import Modal from "react-modal";
import Resume from "./Resume";
import Link from "next/link";

Modal.setAppElement("#__next");

const AboutMain = () => {
  
  const [picClicked, setPicClicked] = useState(false);

  const onPicClick = (e) => {
    e.preventDefault();
    setPicClicked(!picClicked);
    console.log("clicked pic", picClicked);
  }

  return (
    <>
      <div className="container">
        <div className="about">
          <div className="title">
            <div className="title_flex">
              <div className="left">
                <span>About</span>
                <h3>Sebastian Stefaniuk</h3>
              </div>
            </div>
          </div>

          <div className="top_author_image">
            <img src="/img/seb-headshot-512.svg" alt="Sebastian Stefaniuk" />
            <img className={`overlay${picClicked ? " clicked" : ""}`} src="/img/seb-512.jpg" alt="Sebastian Stefaniuk" onClick={onPicClick} />
          </div>

          <h3>Software engineer</h3>

          <p>
            <span className="code-text">
              <i className="fa-solid fa-chevron-left"></i>coding awesomely since 2012<i className="fa-solid fa-chevron-right"></i>
            </span>
            <br />
            Son, husband, father, brother
          </p>

          <div className="profile-links">
            <a className="ib-button" href="https://www.linkedin.com/in/sebboness/" title="View my LinkedIn profile">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            &nbsp;
            <a className="ib-button" href="/sebastian-stefaniuk-resume.pdf" title="Download my resume" target="_blank">
              <i className="fa-solid fa-download"></i> Resume
            </a>
            &nbsp;
            <Link className="ib-button" href="/contact"><i className="fa-regular fa-handshake"></i> Hire me!</Link>
          </div>

          <ul className="languages">
            <li title="I speak German">Ich spreche Deutsch.</li>
            <li title="I speak Polish">Mówie po polsku.</li>
            <li>I speak English.</li>
            <li title="I am learning Persian">دارم فارسی یاد می گیرم</li>
          </ul>
        </div>
      </div>

      <div className="subsection strip">
        <div className="container">
          <div className="in">
            <div className="page_text">
              <h3>Background</h3>
              <span>A bit more about my technical background</span>
            </div>

            <Resume />
          </div>
        </div>
      </div>

      <div className="subsection">
        <div className="container">
          <div className="in">
            <div className="page_text">
              <h3>Languages</h3>
              <span>A passion for languages</span>
              
              <p>
                Spoken and coding languages have some things in common, such as having specific syntax and shortcuts.
                I was fortunate to grow up in a bilingual household. I was born in Poland to Polish parents, and when I
                was two years old, my family moved to Germany. Living most of my childhood in quaint villages near Hamburg,
                I learned the German language, but never forgot Polish.
              </p>
              <p>
                Then, starting in fitfh grade, English was added to my repertoire of spoken languages. Living in the
                United States as an adult, I&apos;ve developed a deep appreciation for the art of multilingual communication,
                and my gratitude for speaking multiple languages has flourished.
              </p>
              <p>
                More recently I have started to learn the Persian language after it became apparent that my mother-in-law
                would not learn English so quickly (giggle).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="subsection strip">
        <div className="container">
          <div className="in">
            <div className="page_text">
              <h3>Interests</h3>
              <span>Things I love to do outside of tech</span>
              
              <p>
                Besides my career, I do like to challenge myself and learn new things whenever time allows it. Here are a
                few things that caught my interest in recent years:
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="subsection interest">
        <div className="container">
          <div className="in">
            <div className="page_text">
              <h3>3D printing</h3>            
              <p>
                This is a rather new hobby of mine, and it has brought out a new creative side of me. In my late teens and
                early 20s I really liked 3D modeling, and one of the things I always wanted was to hold a piece of my designs
                in my hands. With the advent of 3D printing at home, this has finally become a reality. I&apos;m spending a
                lot of time 3D modeling and printing, and it&apos;s fun!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="subsection withbg _3dprinting">
      </div>

      <div className="subsection interest">
        <div className="container">
          <div className="in">
            <div className="page_text">
              <h3>Mindfulness</h3>
              <span>Practicing meditation and simple activities with mindfulness</span>
              <p>
                Let me emphasize the significance of how much meditation has helped me in calming down that inner
                chatterbox. Having made it a daily practice, the calmness has brought with it increased focus as well as
                an open awareness of the things around and within me.
              </p>
              <p>
                Meditation is not for everyone. However, you may practice other activities, but with a mindful attitude.
                For example: I love cooking. Experimenting with new flavors or cooking my favorite dishes is such a 
                satisfying activity. When I cook, I&apos;m being mindful and use all of my attention for just that.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="subsection withbg cooking">
      </div>

      <div className="subsection interest">
        <div className="container">
          <div className="in">
            <div className="page_text">
              <h3>Electronica & JDM</h3>
              <span>Absolute joys: driving and music</span>
              <p>
                One of the purest joys since I can remember has been music. It fascinates me how much music can
                influence our emotions and mood. My favorite genre is electronica, which in itself has many, many
                subgenres. I love the sound of synthesizers - those spacey, lofty, otherwordly sounds - and I have been 
                dabbling occasionally with keyboards, hoping to some day be able to create my own electronica composures.
              </p>
              <p>
                For me, driving has perpetually symbolized the essence of freedom: That feeling of being able to go anywhere, anytime.
                Cars have always interested me, and although I am not much mechanically talented, I love the tuning
                scene, in particular that of 
                the <a href="https://duckduckgo.com/?q=JDM+community&atb=v362-1&iax=images&ia=images">JDM community</a>:
                The sound of a Japanese twin-turbo inline-6 engine has to be among the things I enjoy the most.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="subsection withbg others">
      </div>
    </>
  );
};

export default AboutMain;
