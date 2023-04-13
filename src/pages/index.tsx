import { useEffect, useRef } from 'react';
import ProjectCard from './_components/project-card';
import DefaultLayout from './_layouts/default-layout';
import Typed from 'typed.js';
import { PROJECTS } from '../models/projects';
import Head from 'next/head';

export default function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    let typed = new Typed(titleRef.current, {
      strings: ['My Recent Projects'],
      typeSpeed: 50,
      smartBackspace: true,
      showCursor: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <DefaultLayout>
      <Head>
        <title>Projects - Mark Matute</title>
        <meta name="description" content={'Projects created by Mark Matute'} />
        <meta property="og:title" content={'Projects - Mark Matute'} />
        <meta property="og:description" content={'Projects created by Mark Matute'} />
        <meta name="robots" content="index, follow" />
      </Head>
      <div className="row mb-5">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-12 mb-3 mt-3 mx-auto">
              <span className="h5" ref={titleRef}>
                My Projects
              </span>
            </div>

            {PROJECTS.map((project) => {
              const { title, subTitle, slug, image, description } = project;
              return (
                <div className="col-l2 col-lg-4 mb-3" key={slug}>
                  <ProjectCard title={title} subTitle={subTitle} slug={slug} image={image} description={description} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
