import Link from 'next/link';
import { Project } from '../../models/projects';

export default function ProjectCard(props: Project) {
  const { title, subTitle, description, slug, image } = props;
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{subTitle}</p>
        <Link href={`/projects/${slug}`} className="btn  btn-outline-dark">
          Learn More
        </Link>
      </div>
    </div>
  );
}
