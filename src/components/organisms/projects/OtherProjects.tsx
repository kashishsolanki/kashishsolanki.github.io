import { FC } from 'react';
import { motion, cubicBezier } from 'framer-motion';

import { Folder } from 'icons';
import { ProjectProps } from './Project';

interface OtherProjectsProps {
  projectList: ProjectProps[];
}

const OtherProjects: FC<OtherProjectsProps> = (props: OtherProjectsProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h4 className="text-neon font-medium mb-4">{'Other Projects'}</h4>
      <div className="h-[1px] w-52 bg-neon"></div>
      <div className="flex flex-row flex-wrap gap-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-20 xl:px-20">
        {props.projectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, ease: cubicBezier(0.17, 0.55, 0.55, 1) }}
            whileHover={{
              y: -10,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              y: -10,
              transition: { duration: 0.2 },
            }}
          >
            <div className="h-[250px] w-[320px] bg-[#112240ab] p-4 relative cursor-pointer">
              <div className="flex flex-row justify-start mt-4 mb-8">
                <Folder className="text-neon h-[30px]" />
              </div>
              <div className="flex flex-col">
                <span className="text-neon text-xl">{project.name}</span>
                <span className="text-grey text-sm mt-4">{project.description}</span>
              </div>
              <div className="flex flex-row gap-2 mt-4 absolute bottom-4">
                {project.stacks.map((stack, index) => (
                  <span key={index} className="text-[#64ffda9c] text-xs">
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
