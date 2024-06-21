import image1 from "@/../public/image/project-details-image-1.png";
import image2 from "@/../public/image/project-details-image-2.png";
import image3 from "@/../public/image/project-details-image-3.png";
import Link from "next/link";
import ProjectBanner from "./ProjectBanner";
import ProjectDetailsItem from "./ProjectDetailsItem";

const ProjectDetailsBody = () => {
  const listArrayOne = [
    "Expert advice and guidance to elevate your digital strategy.",
    "Crafting visually stunning  user-friendly websites your brand.",
    "Building and maintaining presence on social platforms.",
  ];

  const listArrayTwo = [
    "One who avoids a pain that produces no resultant pleasure.",
    "laborious physical exercise.",
    "One who avoids a pain that produces no resultant",
  ];

  const listArrayThree = [
    "Creating customized and user-friendly mobile applications.",
    "Enhancing your website's visibility and search engine ranking.",
    "online stores for seamless transactions.",
  ];

  return (
    <div className="mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
      <div className="card-style-two project-details p-32px">
        <ProjectBanner />
      </div>
      <Link
        href={`/all-projects`}
        className="header-title next-project heading-4 m-t-60px z-2 position-relative"
      >
        Next Projects
      </Link>
    </div>
  );
};

export default ProjectDetailsBody;
