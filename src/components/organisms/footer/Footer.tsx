import { cubicBezier, motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="right-email">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, ease: cubicBezier(0.17, 0.55, 0.55, 1) }}
      >
        <div className="w-full md:w-24 h-20 md:h-screen flex flex-row md:flex-col justify-end items-center fixed font-medium right-0">
          <span className=" text-neon cursor-pointer md:rotate-90 md:mt-20">
            <a target="_blank" className="text-neon no-underline" href="mailto:kashishsolanki3@gmail.com">
              kashishsolanki3@gmail.com
            </a>
          </span>
          <div className="w-[1px] h-10 bg-neon sm:pt-20 sm:mt-0 sm:rotate-90 md:rotate-0 sm:ml-10 md:ml-0 md:mr-1 md:pt-52 md:mt-28"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
