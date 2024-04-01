import { cubicBezier, motion } from 'framer-motion';

import { MenuItem } from '../../atoms';
import { FC, RefObject } from 'react';

interface MenuProps {
  aboutRef: RefObject<null | HTMLDivElement>;
  workRef: RefObject<null | HTMLDivElement>;
  contactRef: RefObject<null | HTMLDivElement>;
}

const Menu: FC<MenuProps> = ({ aboutRef, workRef, contactRef }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, ease: cubicBezier(0.17, 0.55, 0.55, 1) }}
    >
      <div className="z-50 w-full md:w-24 h-20 md:h-screen flex flex-row md:flex-col justify-start items-center fixed font-medium">
        <MenuItem
          title={'About'}
          onClick={() => aboutRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        />
        <MenuItem
          title={'Work'}
          onClick={() => workRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        />
        <MenuItem
          title={'Contact'}
          onClick={() => contactRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
        />
        <div className="w-[1px] h-8 bg-neon ml-6 sm:pt-20 sm:mt-0 sm:rotate-90 md:rotate-0 sm:ml-16 md:ml-0 md:mr-3 md:pt-52 md:mt-16"></div>
      </div>
    </motion.div>
  );
};

export default Menu;
