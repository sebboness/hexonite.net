'use client'

import React, { useState } from "react";
import Resume from "./Resume";
import Link from "next/link";

const AboutMain = () => {

  const [picClicked, setPicClicked] = useState(false);

  const onPicClick = (e: React.MouseEvent<HTMLImageElement>) => {
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
              <h3>Projects</h3>
              <span>Side projects I build because they matter to people I care about</span>

              <p>
                Outside of my day job, I like to challenge myself and learn new things whenever time allows it. Lately
                that&apos;s meant getting into 3D printing and modeling, practicing mindfulness through meditation and
                cooking, and indulging my long-time love of electronica music and the JDM car scene. But the projects
                I&apos;m proudest of are the ones where my skills as an engineer meet a real need for people I care
                about, whether that&apos;s my family, my community, or a parent somewhere trying to make better choices
                for their kid.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="subsection interest">
        <div className="container">
          <div className="in">
            <div className="page_text">
              <h3>LyricsRay</h3>
              <span>An AI tool born from a dad&apos;s gut check</span>
              <p>
                It started with a simple question from my teenage stepdaughter about the lyrics to a popular pop
                song. When I actually read them, I realized how much questionable content can hide in plain sight in the
                music kids listen to every day, and how hard it is for parents to keep up. So I
                built <a href="https://www.lyricsray.com" target="_blank" rel="noreferrer">LyricsRay</a>, a free,
                AI-powered tool that analyzes a song&apos;s lyrics for explicit language, violence, substance use, sexual
                content, and more, and explains what it found in plain language. It doesn&apos;t tell anyone what to ban, 
                it just gives parents the information to decide what&apos;s right for their family.
              </p>
              <p>
                LyricsRay is a full-stack project built with Next.js, TypeScript, Claude for the lyrical analysis, and
                AWS/Terraform for the infrastructure. You can read the full story behind it on
                <Link href="/blog/lyricsray">my blog</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="subsection withbg lyricsray">
      </div>

      <div className="subsection interest">
        <div className="container">
          <div className="in">
            <div className="page_text">
              <h3>Built for free, kept free</h3>
              <p>
                LyricsRay is intended to be free to use. For now I cover hosting costs, but accept support
                through <a href="https://ko-fi.com/sebboness" target="_blank" rel="noreferrer">Ko-fi</a>, where supporters
                can donate a small amount as a thank-you. But honestly, the real reward isn&apos;t the
                donations. It&apos;s hearing from a parent that the tool helped them have a better conversation with
                their kid, and that&apos;s the kind of impact that keeps me building.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="subsection interest">
        <div className="container">
          <div className="in">
            <div className="page_text">
              <h3>Volunteering for my temple community</h3>
              <span>An admin portal for the S.R.F. Temple&apos;s Sunday School</span>
              <p>
                Most recently, I&apos;ve been volunteering my time to build an administrative portal for the
                Self-Realization Fellowship Temple I attend. It handles student registration, class scheduling,
                attendance, and teacher onboarding for our Sunday School program. It&apos;s designed from the ground up
                to generalize to other SRF Schools and Temples, not just ours, and it&apos;s another full-stack effort
                (Next.js, TypeScript, AWS Lambda, Cognito, DynamoDB, Terraform), giving me a meaningful way to put the
                skills I use every day at work toward a community that means a lot to me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMain;
