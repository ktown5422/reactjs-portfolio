// AllProjectBody.tsx
"use client";
import ProjectDetailsBody from "../project-details/ProjectDetailsBody";

const AllProjectBody = () => {
  return (
    <div className="m-t-60px flex justify-center items-center min-h-screen">
      {/* Container to center content */}
      <div className="all-project-body flex flex-col justify-center items-center">
        {/* Dynamic rendering of project details using AllProjectImage inside ProjectDetailsBody */}
        <ProjectDetailsBody />
      </div>
    </div>
  );
};

export default AllProjectBody;

