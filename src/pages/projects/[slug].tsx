import { useRouter } from 'next/router';
import DefaultLayout from '../_layouts/default-layout';
import { PROJECTS, Project as ProjectModel } from '../../models/projects';
import _ from 'lodash';
import Link from 'next/link';

export default function Project() {
  const router = useRouter();
  const _project = PROJECTS.find((project) => project.slug == router.query.slug);

  if (!_project) {
    return null;
  }
  const { title, image, tags = [], company, description = '', technologies = [] } = _project as ProjectModel;

  return (
    <DefaultLayout>
      <div className="row mt-5 mb-5">
        <div className="col-sm-12 col-lg-2 mx-auto">
          <img src={image} alt="..." className="rounded" style={{ maxWidth: '100%' }} />
          <div className="h5 mt-3">{title}</div>
          <div className="h6 mt-3 text-secondary">{company}</div>
          <div className="mt-3 text-secondary">
            {tags?.map((tag) => {
              return <span key={tag}>{`#${tag} `}</span>;
            })}
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 ps-5">
          <div>
            <div className="h5">Technologies Used</div>
            {technologies.map((tech) => {
              return (
                <img
                  key={tech}
                  src={`/images/tech/${tech}.png`}
                  alt="..."
                  className="rounded m-2"
                  style={{ width: 50, height: 50, objectFit: 'contain' }}
                />
              );
            })}
          </div>
          <hr />
          <div>
            <div className="h5">Description</div>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
        <div className="col-lg-4 d-none d-lg-flex d-flex flex-column justify-content-start align-items-end">
          <div className="row">
            {_.sampleSize(PROJECTS, 3).map((project) => {
              const { title, subTitle, image, slug, company } = project;
              return (
                <div className="col-12" key={slug}>
                  <div className="d-flex flex-row justify-content-start align-items-center mb-5">
                    <div className="flex-1">
                      <img src={image} alt="..." className="rounded m-2" style={{ width: 100, height: 120 }} />
                    </div>
                    <div className="flex-1 align-items-start">
                      <div className="h6">
                        <Link href={`/projects/${slug}`}>{title}</Link>
                      </div>
                      <div className="mt-1 text-muted">{subTitle}</div>
                      <div className="mt-1 text-muted">{company}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
