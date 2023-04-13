import { useEffect, useRef } from 'react';
import DefaultLayout from './_layouts/default-layout';
import Typed from 'typed.js';
import LINKS from '../constants/links';

export default function About() {
  const aboutElement = useRef(null);

  useEffect(() => {
    let typed = new Typed(aboutElement.current, {
      strings: [
        `I am a highly skilled and experienced software engineer with over <b>6 years</b> of hands-on experience in full-stack web and mobile application development. <br/><br/>
         With an exceptional background in backend development, <br/><br/>
        I am an expert in <img src="/images/tech/nodejs.png" style="width: 40px; border-radius: 5px; margin-right: 5px;" /> <img src="/images/tech/react.png" style="width: 40px;margin-right: 5px;" /> <img src="/images/tech/typescript.png" style="width: 40px;margin-right: 5px;" /> <img src="/images/tech/javascript.png" style="width: 40px;border-radius: 5px;margin-right: 5px;" /> <img src="/images/tech/nestjs.png" style="width: 40px;margin-right: 5px;" /> <img src="/images/tech/git.png" style="width: 40px;margin-right: 5px;" /> <img src="/images/tech/github.png" style="width: 40px;border-radius: 5px;margin-right: 5px;" /> <img src="/images/tech/docker.png" style="width: 40px;margin-right: 5px;" /> <img src="/images/tech/aws.png" style="width: 40px;margin-right: 5px;" /> <img src="/images/tech/nextjs.png" style="width: 40px;border-radius: 5px;margin-right: 5px;" /> and various other related technologies.<br/><br/>
        Throughout my career, they have gained extensive experience in managing agile teams, leading successful project deliveries, and collaborating with cross-functional teams to ensure a smooth development process.<br/><br/>
        My passion for software engineering is evident through their impressive track record of delivering innovative, high-quality, and scalable software solutions. Their excellent problem-solving skills and attention to detail enable them to identify and resolve complex technical issues with ease. <br/><br/>

        Overall, I am is an outstanding professional who possesses the knowledge, skills, and experience required to develop exceptional software solutions and lead successful software engineering teams.

        <br/>
        <br/>
        Here are some links of my profile for your reference, <a href="${LINKS.GITHUB}" target="_blank">Github</a>, <a href="${LINKS.LINKEDIN}" target="_blank">LinkedIn</a>, <a href="${LINKS.DEVTO}" target="_blank">Dev.to</a> ,  <a href="${LINKS.NPM}" target="_blank">NPM</a>`,
      ],
      typeSpeed: 2,
      smartBackspace: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <DefaultLayout>
      <div className="row">
        <div className="col-lg-5 mx-auto mt-5">
          <span id="about" ref={aboutElement} className="mt-5"></span>
        </div>
      </div>
    </DefaultLayout>
  );
}
