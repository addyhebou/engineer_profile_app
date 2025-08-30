'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import { SocialIcon } from 'react-social-icons';
import { useEffect } from 'react';

declare global {
  interface Window {
    _klOnsite?: {
      loadForms: () => void;
    };
  }
}

export default function Home() {
  // Unblock to activate Klaviyo form
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src =
  //     'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=STz2cm';
  //   script.async = true;
  //   script.type = 'text/javascript';

  //   script.onload = () => {
  //     if (window._klOnsite) {
  //       window._klOnsite.loadForms();
  //     }
  //   };

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  const SOCIAL_ICON_COLORS = {
    Instagram: '#ff7ca1ff',
    TikTok: '#000000',
    Twitter: '#1da1f2',
    Facebook: '#1877f2',
    Snapchat: '#fffc00',
    Spotify: '#1db954',
    AppleMusic: '#f5f5f5',
    YouTube: '#ff0000',
    SoundCloud: '#ff5500',
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>
          Addy <span>Stephane</span> Hebou
        </h1>
        <div className={styles.socialIcons}>
          <SocialIcon
            url="https://linkedin.com/in/addyhebou"
            bgColor="#000000"
            target="_blank"
          />
          <SocialIcon
            url="https://github.com/addyhebou/"
            bgColor="#000000"
            target="_blank"
          />
          <SocialIcon
            url="mailto:addyhebou@gmail.com"
            bgColor="#000000"
            target="_blank"
          />
          <a href="/Addy_Hebou_2025_Software_Engineer_Resume.pdf" download>
            <button>Download Resume</button>
          </a>
        </div>
        <div
          style={{ textAlign: 'center' }}
          className={styles.profileImageContainer}
        >
          {/* <Image
            src="https://champagne-therapy-music.sfo3.cdn.digitaloceanspaces.com/Images/faded%20gradient%20tb.png"
            alt="TBHits Logo"
            width={1400}
            height={0}
            style={{ height: 'auto', margin: '0 auto' }}
            className={styles.logo}
          /> */}
        </div>
        <div style={{ textAlign: 'center' }}>
          <h2>Education</h2>
          <p>
            New York University, Tandon School of Engineering – Bachelor of
            Science, Computer Science 2022
          </p>
          <h2>Skills</h2>
          <p>
            Typescript | Javascript | CSS/SASS | Python | ReactJS | NextJS |
            Node | Git | SQL | Jest & React Testing Library
          </p>
          <h2>Work Experience</h2>
          <div style={{ borderTop: '1px solid white' }}>
            <h3>Snapchat, Snap Inc.</h3>
            <p>August 2022 – February 2025</p>
            <ul
              style={{
                listStyle: 'none',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              <li style={{ margin: '40px 0' }}>
                <h4 style={{ textDecoration: 'underline' }}>
                  <a href="https://web.snapchat.com" target="_blank">
                    Snapchat for Web:
                  </a>
                </h4>
                <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                  <li>
                    ○ Built responsive emoji picker for Snapchat Web chat,
                    improving user interaction across browsers.
                  </li>
                  <li>
                    ○ Created UI flows for browser-level camera and mic
                    permission requests (Safari & Chrome).
                  </li>
                  <li>
                    ○ Contributed to My AI (Snapchat + OpenAI), authored shared
                    UI component docs for visual consistency across teams, and
                    enabled LaTeX/markdown support.
                  </li>
                </ul>
              </li>
              <li style={{ margin: '40px 0' }}>
                <h4 style={{ textDecoration: 'underline' }}>
                  <a href="https://ads.snapchat.com/" target="_blank">
                    Ads Monetization:
                  </a>
                </h4>
                <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                  <li>
                    ○ Worked on Instant Create, a tool for small businesses to
                    rapidly launch ads using smart templates, helping improve ad
                    creation time and usability, including quick budget/duration
                    settings and preview tools.
                  </li>
                </ul>
              </li>
              <li style={{ margin: '40px 0' }}>
                <h4>Performance Review Internal Applications:</h4>
                <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                  <li>
                    ○ Developed features like outlier detection in employee
                    performance cycles and designed bucket categorization UI for
                    performance review allocations.
                  </li>
                  <li>
                    ○ Fully rebuilt and optimized the rich text editor,
                    replacing deprecated third-party dependencies and enabling
                    stable custom formatting, reducing internal support tickets.
                  </li>
                </ul>
              </li>
              <li style={{ margin: '40px 0' }}>
                <h4>Falcon:</h4>
                <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                  <li>
                    ○ Led front-end work on internal performance analytics tools
                    used by Snap engineers to monitor regressions and A/B test
                    metrics across commits. Implemented GitHub integration to
                    dynamically pull commit data and track metric impacts like
                    camera load time, app startup, etc.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div style={{ borderTop: '1px solid white' }}>
            <h3>
              <a
                href="http://villa-kappa.vercel.app/"
                target="_blank"
                style={{ textDecoration: 'underline' }}
              >
                Villa
              </a>
            </h3>
            <p>March 2024 – Current</p>
            <ul
              style={{
                listStyle: 'none',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              <li style={{ margin: '40px 0' }}>
                <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                  <li>
                    ● Led product design and development of Villa, a 4-in-1 tool
                    that streamlines the creative and administrative process for
                    music professionals.
                  </li>
                  <li>
                    ● Designed and launched a legally-compliant split sheet
                    agreement creator with email-based signature tracking and
                    status updates.
                  </li>
                  <li>
                    ● Built full stack app (Next.js + Firebase for auth and
                    database handling); led Figma prototyping and early user
                    user testing.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div style={{ borderTop: '1px solid white' }}>
            <h3>Sandia National Laboratories of Department of Energy</h3>
            <p>June 2021 – August 2022</p>
            <ul
              style={{
                listStyle: 'none',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              <li style={{ margin: '40px 0' }}>
                <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                  <li>
                    ● Built 200+ internal web pages in Vue.js; improved
                    accessibility from 35% to 95%; shipped reusable UI
                    components across org.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </main>
      {/* Unblock to activate Klaviyo form */}
      {/* <div className="klaviyo-form-RXFkB9" /> */}
      <footer className={styles.footer}></footer>
    </div>
  );
}
