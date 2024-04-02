import { motion, cubicBezier } from 'framer-motion';
import SubTitle from '../../atoms/subtitle/SubTitle';

export interface ProjectProps {
  direction: string;
  type: string;
  name: string;
  description: string;
  stacks: string[];
  image: string;
}

const Project = (props: ProjectProps) => {
  const { direction, type, name, description, stacks, image } = props;
  return (
    <div className="flex flex-col gap-4 mt-32 mb-16 hover:cursor-pointer">
      <div className={`relative w-auto xl:px-[100px] px-0 flex flex-col justify-between align-center`}>
        <motion.div
        //   initial={{ y: 0, x: 100 }}
        //   whileInView={{
        //     y: 0,
        //     x: 0,
        //     transition: { duration: 0.5 },
        //   }}
        >
          <img
            src={image}
            alt="project-name"
            className={`xl:h-[300px] md:h-[300px] h-[258px] lg:w-full xl:w-[500px] w-full xl:absolute relative ${direction === 'left' ? 'xl:right-[100px]' : ''}`}
          />
        </motion.div>
        <div
          className={`right-0 left-0 xl:relative absolute top-0 xl:bg-transparent bg-[#112240e6] h-[-webkit-fill-available]`}
        >
          <motion.div
            initial={{ y: -100, x: 0 }}
            whileInView={{
              y: 0,
              x: 0,
              transition: { duration: 1 },
            }}
          >
            <SubTitle
              text={type}
              className={`xl:text-xl md:text-base text-sm font-bold mb-0 xl:mt-0 md:mt-2 mt-4 flex flex-row ${direction === 'left' ? 'justify-start xl:pl-0 pl-2' : 'justify-end xl:pr-0 pr-2'} text-${direction}`}
            />
            <p
              className={`text-grey xl:pr-0 lg:pr-2 pr-2 font-bold xl:text-2xl md:text-xl lg:text-lg mt-2 lg:mb-4 md:mb-4 mb-2 flex flex-row ${direction === 'left' ? 'justify-start xl:pl-0 pl-2' : 'justify-end xl:pr-0 pr-2'} text-${direction}`}
            >
              {name}
            </p>
          </motion.div>
          <motion.div
            className={`flex flex-row xl:relative xl:bottom-0 absolute bottom-10 ${direction === 'left' ? 'justify-start' : 'justify-end'} text-${direction}`}
            transition={{ duration: 2, ease: cubicBezier(0.17, 0.55, 0.55, 1) }}
            initial={{ y: 0, x: -100 }}
            whileInView={{
              y: 0,
              x: 0,
              transition: { duration: 0.5 },
            }}
          >
            <div className="bg-[#112240] z-10 h-auto xl:w-3/5 md:w-4/5 w-full lg:px-8 md:px-4 px-[12px] leading-2 lg:py-12 md:py-8 py-4 col-span-3">
              <span className="text-grey md:text-base text-sm">{description}</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 100, x: 0 }}
            whileInView={{
              y: 0,
              x: 0,
              transition: { duration: 0.3 },
            }}
            className={`flex flex-row lg:gap-4 md:gap-4 gap-2 xl:relative absolute bottom-[6px] xl:pr-0 pr-2 xl:mt-4 mt-2 lg:pb-0 pb-2 ${direction === 'left' ? 'justify-start left-0 xl:pl-0 pl-2' : 'justify-end right-0 xl:pr-0 pr-2'} text-${direction}`}
          >
            {stacks.map((stack, index) => (
              <span key={index} className="text-[#64ffda9c] lg:text-sm md:text-base text-[14px]">
                {stack}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
