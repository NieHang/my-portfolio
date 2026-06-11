import { useParams } from "react-router";
import { projectDetails } from "@/assets/data/projectDetails";

export default function ProjectOverview() {
  const { slug } = useParams();

  return (
    <section className="bg-white pt-6 pr-10 pb-6 pl-10 dark:bg-gray-950">
      {slug && (
        <>
          <div className="mb-10 flex flex-col">
            <div className="mb-4 text-6xl font-medium">
              {projectDetails[slug].name}
            </div>
            <div className="text-lg text-gray-600 dark:text-gray-400">
              {projectDetails[slug].position}
            </div>
          </div>
          <div className="flex items-start justify-between gap-10">
            <div className="flex flex-col">
              <div className="mb-4 text-2xl text-gray-700">
                Project Overview
              </div>
              <div className="text-2xs text-gray-600">
                {projectDetails[slug].description}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-4 text-2xl text-gray-700">
                My Contributions
              </div>
              <div className="text-2xs text-gray-600">
                {projectDetails[slug].myRole}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
