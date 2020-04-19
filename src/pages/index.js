import React from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import Entry from "../components/entry";
import Section from "../components/section";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Header />
    <SEO title="Clemens Kofler" />
    <Section id="about" title="About Me">
      <p>
        I'm a seasoned technologist and entrepreneur with almost 15 years experience of building
        solutions for various startups (including my own) as well as small and mid-sized companies.
      </p>
      <p>
        I'm also passionate about open source contributions and I've authored and contributed to
        multiple open source projects, including Ruby on Rails and Ruby internationalization (i18n).
      </p>
    </Section>
    <Section id="experience" title="Experience">
      <Entry
        title="Temedica"
        link="https://temedica.com"
        desc="Co-Founder, CTO and Managing Director; 2016 - Present"
      />
      <Entry
        title="Freelancer"
        link="https://www.railway.at"
        desc="Consulting & Development; 2005 - 2016"
      />
    </Section>
    <Section id="freelancing-projects" title="Freelancing Projects/Clients">
      <Entry
        title="CodeShip"
        link="https://codeship.com/"
        desc="Continuous Integration & Delivery platform; I supported CodeShip from May 2014 until June 2016 mainly with backend development."
      />
      <Entry
        title="Mobilityhouse"
        link="https://www.mobilityhouse.com/"
        desc="Provider of e-mobility solutions; I supported TMH as a lead architect and developer on 2 large-scale projects from 2014 until 2016."
      />
      <Entry
        title="Pernod Ricard Austria"
        link="https://www.pernod-ricard.at/"
        desc="World's 2nd largest spirits producer; I built (concept & development) their service barkarte.at (defunct) in 2014/15, which was a web tool to create and order heavily customizable restaurant & bar menus (including an Adobe InDesign export API)."
      />
      <Entry
        title="Shore"
        link="https://www.shore.com/"
        desc="Business management suite; I supported Shore in their early days (when they were still called Termine24) from November 2013 until March 2014 with backend and frontend development."
      />
      <Entry
        title="fingerbook"
        link="https://www.fingerbook.com/"
        desc="Photobooklet creator; I developed all the backend and large parts of the frontend for fingerbook and helped with concept creation and UX from mid 2012 until end of 2013."
      />
      <Entry
        title="meandyou"
        desc="Online dating platform (defunct); I did backend development, including a Redis-based profile matching algorithm, in winter 2011/12."
      />
      <Entry
        title="Tito"
        link="https://ti.to/"
        desc="Event management & ticket sales platform; I contributed to early development of Tito in Summer of 2011."
      />
      <Entry
        title="Noko (Freckle) / Charm"
        link="https://nokotime.com/"
        desc="Time tracking app / customer support platform; I contributed development to Slash7's time tracking app Noko (then Freckle) and built the backend for the initial prototype of their discontinued Customer Support platform Charm in 2010 and 2011."
      />
      <Entry
        title="Avarteq"
        link="https://avarteq.de/"
        desc="I was hired as a consultant, coach and developer by Avarteq for various projects between 2010 and 2014."
      />
      <Entry
        title="COMMUNITOR"
        link="https://communitor.com/"
        desc="Between 2007 and 2014, I was hired repeatedly by COMMUNITOR as a consultant and developer on various projects, including projects for the Austrian Ministry of Education, beauty.at and auto-motor.at, and contributed concepts and development for their proprietary CMS SiteWare."
      />
    </Section>
    <Section id="education" title="Education">
      <Entry
        title="Diploma / Mag. (FH) in Management & Applied Informatics"
        link="https://mci.edu/"
        desc="I studied Management & Applied Informatics at Management Center Innsbruck (with a semester abroad in Brisbane, Australia) and graduated with a diploma in 2008. My thesis analyzed usability concerns for websites with heterogeneous target groups."
      />
    </Section>
    <Section id="skills" title="Skills">
      <Entry
        title="Languages & Frameworks"
        desc="Ruby on Rails, Vue.js, JavaScript (ES6+) and some basics in Laravel and React"
      />
      <Entry title="Data Stores" desc="PostreSQL, Redis, MySQL, MongoDB" />
    </Section>
  </Layout>
);

export default IndexPage;
