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
        timeSpan="2016 – Present"
        role="Co-Founder, CTO and Managing Director"
      >
        After more than a decade of freelancing as a consultant and developer, I co-founded my own
        startup Temedica with the goal of developing sustainable solutions for the healthcare
        industry. My co-founder Gloria and I grew the company from 2 people in a tiny 20sqm office
        to ~40 people in 4 years, raising more than 17 million Euros from reputable investors,
        including <a href="https://www.crunchbase.com/organization/mig-ag">MIG Funds</a> and <a
        href="https://www.crunchbase.com/organization/santo-venture-capital">Santo Venture
        Capital</a>.
      </Entry>
      <Entry
        title="Freelancer"
        link="https://www.railway.at"
        timeSpan="2005 – 2016"
        role="Consulting & Development"
      >
        I did consulting and development for various startups and small to mid-sized companies for
        more than 10 years. A list of the most relevant projects and clients can be found below.
      </Entry>
    </Section>
    <Section id="freelancing-projects" title="Freelancing Projects/Clients">
      <Entry
        title="CodeShip"
        link="https://codeship.com/"
        timeSpan="May 2014 – June 2016"
        desc="Continuous Integration & Delivery platform; I supported CodeShip from May 2014 until June 2016 mainly with backend development."
      />
      <Entry
        title="Mobilityhouse"
        link="https://www.mobilityhouse.com/"
        timeSpan="2014 – 2016"
        desc="Provider of e-mobility solutions; I supported TMH as a lead architect and developer on 2 large-scale projects from 2014 until 2016."
      />
      <Entry
        title="bergshop.com"
        link="https://bergshop.com/"
        timeSpan="2012 – 2014"
        desc="I built this online shop based on the Spree Commerce platform for a friend."
      />
      <Entry
        title="Pernod Ricard Austria"
        link="https://www.pernod-ricard.at/"
        timeSpan="2013 – 2014"
        desc="World's 2nd largest spirits producer; I built (concept & development) their service barkarte.at (defunct) in 2014/15, which was a web tool to create and order heavily customizable restaurant & bar menus (including an Adobe InDesign export API)."
      />
      <Entry
        title="Shore"
        link="https://www.shore.com/"
        timeSpan="November 2013 – March 2014"
        desc="Business management suite; I supported Shore in their early days (when they were still called Termine24) from November 2013 until March 2014 with backend and frontend development."
      />
      <Entry
        title="fingerbook"
        link="https://www.fingerbook.com/"
        timeSpan="March 2012 – December 2013"
        desc="Photobooklet creator; I developed all the backend and large parts of the frontend for fingerbook and helped with concept creation and UX from mid 2012 until end of 2013."
      />
      <Entry
        title="meandyou"
        timeSpan="Winter 2011/12"
        desc="Online dating platform (defunct); I did backend development, including a Redis-based profile matching algorithm, in winter 2011/12."
      />
      <Entry
        title="Tito"
        link="https://ti.to/"
        timeSpan="Summer 2011"
        desc="Event management & ticket sales platform; I contributed to early development of Tito in Summer of 2011."
      />
      <Entry
        title="Noko (Freckle) / Charm"
        link="https://nokotime.com/"
        timeSpan="2010/11"
        desc="Time tracking app / customer support platform; I contributed development to Slash7's time tracking app Noko (then Freckle) and built the backend for the initial prototype of their discontinued Customer Support platform Charm in 2010 and 2011."
      />
      <Entry
        title="Avarteq"
        link="https://avarteq.de/"
        timeSpan="2010 – 2014"
        desc="I was hired as a consultant, coach and developer by Avarteq for various projects between 2010 and 2014."
      />
      <Entry
        title="betterplace.org"
        link="https://www.betterplace.org/"
        timeSpan="January 2010"
        desc="I helped betterplace.org in their challenges to upgrade from Rails 2.1 to 2.3 with a particular focus on getting i18n running properly."
      />
      <Entry
        title="upstream"
        link="https://upstre.am"
        timeSpan="2010 – 2011"
        desc="I helped my friends of upstream out with a couple of projects, including the reading platform PaperC and Twilio competitor Jamii."
      />
      <Entry
        title="COMMUNITOR"
        link="https://communitor.com/"
        timeSpan="2007 – 2014"
        desc="Between 2007 and 2014, I was hired repeatedly by COMMUNITOR as a consultant and developer on various projects, including projects for the Austrian Ministry of Education, beauty.at and auto-motor.at, and contributed concepts and development for their proprietary CMS SiteWare."
      />
      <Entry
        title="BESTgroup / advaBEST"
        timeSpan="2008 – 2010"
        desc="I was hired as a developer to work on the adva-cms content management platform (open source) and the advaBEST business platform (proprietary)."
      />
      <Entry
        title="Power4Youth.eu"
        timeSpan="2006 – 2007"
        desc="Power4Youth was a project sponsored by SOS Children's Villages to create a community for children brought up in institutions. I built the whole platform start to finish."
      />
    </Section>
    <Section id="open-source" title="Open Source & Blogging">
      <Entry
        title="adva-cms"
        link="https://github.com/svenfuchs/adva_cms"
        desc="I was a core developer of the adva-cms content management platform. adva-cms was one of the first larger projects that used Rails Engines and the Cells library (now part of Trailblazer)."
      />
      <Entry
        title="Steam"
        link="https://github.com/svenfuchs/steam"
        desc="In 2009, Steam was one of the first tools in the Ruby ecosystem to allow for (headless) JavaScript-enabled testing. I co-authored the tool together with Sven Fuchs."
      />
      <Entry
        title="Ruby i18n"
        link="https://github.com/ruby-i18n/i18n"
        desc="I was a core contributor to the Ruby i18n package. Among other things, I contributed the cascading backend."
      />
      <Entry
        title="delocalize"
        link="https://github.com/clemens/delocalize"
        desc="Library for parsing localized dates/times and numbers into internationalized formats."
      />
      <Entry
        title="Others"
        link="https://github.com/clemens?language=&q=&tab=repositories&type=source"
        desc="There's a handful of other things I've written and experimented with over the years. Check out my GitHub profile for a more exhaustive list."
      />
    </Section>
    <Section id="education" title="Education">
      <Entry
        title="Diploma / Mag. (FH) in Management & Applied Informatics"
        link="https://mci.edu/"
        timeSpan="2004 – 2008"
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
    <Section id="imprint" title="Imprint / Impressum">
      <p>
        Clemens Kofler<br />
        Karl-Innerebner-Str. 91a/7<br />
        6020 Innsbruck<br />
        Austria
      </p>
      <p>Email: <a href="mailto:mail@clemenskofler.com">mail@clemenskofler.com</a></p>
    </Section>
  </Layout>
);

export default IndexPage;
