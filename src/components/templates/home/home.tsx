import { cubicBezier, motion } from 'framer-motion';
import SubTitle from '../../atoms/subtitle/SubTitle';

const Home = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.5, ease: cubicBezier(0.17, 0.55, 0.55, 1) }}
      >
        <h5 className="text-sm m-0 mb-4 font-medium text-neon"> {'> Hi there, my name is'}</h5>
        <h1 className="lg:text-6xl md:text-5xl text-4xl m-0 font-bold text-primary-title">Kashish Solanki</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, ease: cubicBezier(0.17, 0.55, 0.55, 1) }}
      >
        <h3 className="lg:text-4xl md:text-3xl text-base lg:mt-16 mt-4 font-bold text-primary-title md:pt-0 pt-8">
          I build things for the web.
        </h3>
        <SubTitle text="#07 years of work experience;" className="md:text-sm text-xs md:pt-0 mb-4" />
        <h6 className="text-grey font-medium text-sm m-0 lg:w-3/5 md:w-4/5 w-full">
          Motivated and highly professional Developer with 7+ years of experience in creating meaningful experiences
          through developing and contributing to high-quality work. Proactive in executing high-quality software
          development.
        </h6>
      </motion.div>
    </div>
  );
};

export default Home;
