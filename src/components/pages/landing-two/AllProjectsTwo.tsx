import allProjectStars from "@/../public/image/all-project-stars.png";
import allProjectImage from "@/../public/image/Cyber-Bar(1).png";
import LinkPrimaryTwo from "@/components/shared/LinkPrimaryTwo";
import Image from "next/image";

const AllProjectsTwo = () => {
  return (
    <div className="card-style-two all-projects-card-two p-32px">
      <div className="all-projects-card-two__title-text">
        <span className="all-projects-card-two__eyebrow textS">
          Featured build
        </span>
        <p className="heading-4">Cyber Bar security dashboard</p>
      </div>

      <div className="all-projects-card-two__image-wrap">
        <Image
          src={allProjectImage}
          width={294}
          height={168}
          style={{ objectFit: "cover" }}
          alt="Cyber Bar dashboard preview"
          className="all-projects-card-two__image"
        />
        <div className="all-projects-card-two__project-tags">
          <span>Next.js</span>
          <span>UX</span>
          <span>Cloud</span>
        </div>
      </div>
      <LinkPrimaryTwo
        linkText="All Projects"
        link="/all-projects"
        className="all-projects-card-two__link"
      />
      <Image
        src={allProjectStars}
        width={68}
        height={60}
        alt="All Project Stars"
        className="all-projects-card-two__image-star scale-up-down light-mood-image-shape"
      />
    </div>
  );
};

export default AllProjectsTwo;
