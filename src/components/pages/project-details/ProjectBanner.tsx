// ProjectBanner.tsx
import Image, { StaticImageData } from "next/image";

type Props = {
  bannerImage: StaticImageData;
  title: string;
  description: string;
};

const ProjectBanner = ({ bannerImage, title, description }: Props) => {
  return (
    <div className="project-details__banner">
      <Image
        src={bannerImage}
        width={1232}
        height={500}
        alt="Banner Image"
        className="img-fluid"
      />
      <h2 className="heading-2">{title}</h2>
      <p className="textL">{description}</p>
    </div>
  );
};

export default ProjectBanner;
