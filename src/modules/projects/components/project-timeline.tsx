import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import Carousel from 'react-material-ui-carousel'

interface IProject {
  title: string;
  year: string;
  description: string;
  images?: any[];
}

interface IProjectTimelineProps {
  projects: IProject[];
}

const Item = (props) => {
  return (
      <Paper>
        <img src={props.item.image} style={{ width: '100%' }} />
      </Paper>
  )
}

const ProjectTimeline = (props: IProjectTimelineProps) => {
  const { projects } = props;

  return (
    <React.Fragment>
      <div className="timeline">
        {
          projects.map((project, i) => {
            const { title, year, description, images } = project;
            const even = i % 2 === 0;
            return (
              <div className={`container ${even ? 'left' : 'right'}`}>
                <div className="content">
                  <Typography variant={'h5'}>
                    {title}
                  </Typography>
                  <Typography variant={'subtitle1'}>
                    {description}
                  </Typography>
                    <Carousel>
                      {
                        images.map( (item, i) => <Item key={i} item={item} /> )
                      }
                  </Carousel>
                </div>
              </div>
            );
          })
        }
      </div>

      <style jsx>{`
        /* The actual timeline (the vertical ruler) */
        .timeline {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* The actual timeline (the vertical ruler) */
        .timeline::after {
          content: '';
          position: absolute;
          width: 6px;
          background-color: #122E50;
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -3px;
        }

        /* Container around content */
        .container {
          padding: 10px 40px;
          position: relative;
          background-color: inherit;
          width: 50%;
        }

        /* The circles on the timeline */
        .container::after {
          content: '';
          position: absolute;
          width: 25px;
          height: 25px;
          right: -12px;
          background-color: white;
          border: 4px solid #122E50;
          top: 15px;
          border-radius: 50%;
          z-index: 1;
        }

        /* Place the container to the left */
        .left {
          left: 0;
        }

        /* Place the container to the right */
        .right {
          left: 50%;
        }

        /* Add arrows to the left container (pointing right) */
        .left::before {
          content: " ";
          height: 0;
          position: absolute;
          top: 17px;
          width: 0;
          z-index: 1;
          right: 30px;
          border: medium solid white;
          border-width: 10px 0 10px 10px;
          border-color: transparent transparent transparent white;
        }

        /* Add arrows to the right container (pointing left) */
        .right::before {
          content: " ";
          height: 0;
          position: absolute;
          top: 17px;
          width: 0;
          z-index: 1;
          left: 30px;
          border: medium solid white;
          border-width: 10px 10px 10px 0;
          border-color: transparent white transparent transparent;
        }

        /* Fix the circle for containers on the right side */
        .right::after {
          left: -12px;
        }

        /* The actual content */
        .content {
          padding: 20px 30px;
          background-color: white;
          position: relative;
          border-radius: 6px;
        }

        /* Media queries - Responsive timeline on screens less than 600px wide */
        @media screen and (max-width: 600px) {
        /* Place the timelime to the left */
          .timeline::after {
            left: 31px;
          }

        /* Full-width containers */
          .container {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }

        /* Make sure that all arrows are pointing leftwards */
          .container::before {
            left: 60px;
            border: medium solid white;
            border-width: 10px 10px 10px 0;
            border-color: transparent white transparent transparent;
          }

        /* Make sure all circles are at the same spot */
          .left::after, .right::after {
            left: 15px;
          }

        /* Make all right containers behave like the left ones */
          .right {
            left: 0%;
          }
        }
      `}</style>
    </React.Fragment>
  );
}

export default ProjectTimeline;


/**
 <ProjectTimeline
    projects={[
      {
        title: 'Healthbeats Platform',
        year: '2019 - Present',
        description: 'Remote patient monitoring software',
        images: [
          {
            image:  '/projects/healthbeats_1.png',
          },
          {
            image:  '/projects/healthbeats_2.png'
          }
        ]
      },
      {
        title: 'Video News Service',
        year: '2019 - 2019',
        description: 'Video streaming app',
        images: [
          {
            image:  '/projects/healthbeats_1.png',
          },
          {
            image:  '/projects/healthbeats_2.png'
          }
        ]
      },
      {
        title: 'Unified Care',
        year: '2018 - 2019',
        description: 'Diabetes monitoring software',
        images: [
          {
            image:  '/projects/healthbeats_1.png',
          },
          {
            image:  '/projects/healthbeats_2.png'
          }
        ]
      },
      {
        title: 'DukeNUS - WIFHY',
        year: '2019 - 2020',
        description: 'Remote patuent monitoring software',
        images: [
          {
            image:  '/projects/healthbeats_1.png',
          },
          {
            image:  '/projects/healthbeats_2.png'
          }
        ]
      },
      {
        title: 'Direct Dermatology',
        year: '2019 - 2020',
        description: 'Remote patuent monitoring software',
        images: [
          {
            image:  '/projects/healthbeats_1.png',
          },
          {
            image:  '/projects/healthbeats_2.png'
          }
        ]
      },
    ]}
  />
 */
