import { motion } from 'framer-motion';

import { TitleText } from '../../atoms';
import SubTitle from '../../atoms/subtitle/SubTitle';
import { useInView } from 'src/utils/hooks/useInView';

const About = () => {
  const { ref, isVisible } = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className={`ready-to-reveal ${isVisible ? 'visible' : ''}`}>
      <TitleText title={'About Me'} />
      <SubTitle text="Full Stack JS Developer" className="mt-16 mb-4" />
      <div className="flex xl:flex-row flex-col gap-16 h-auto">
        <div className="xl:w-3/5 w-full mt-4 flex flex-col gap-2">
          <p className="text-grey font-medium md:text-base text-sm">
            Motivated and highly professional Developer with 7+ years of experience in creating meaningful experiences
            through developing and contributing to high-quality work. Proactive in executing high-quality software
            development.
          </p>
          <p className="text-grey font-medium md:text-base text-sm">
            Proficiency in the use of JavaScript/TypeScript technologies like React, React.JS, Angular.JS, Angular,
            Node.JS, REST, GraphQL and Serverless with excellent visual design skills with sensitivity to user-system
            interaction.
          </p>
          <p className="text-grey font-medium md:text-base text-sm">
            Develop highly interactive web applications utilizing JavaScript, HTML5, CSS, ReactJS, and integrating
            Restful or GraphQL API, external web services ensuring high performance on Mobile and Desktop and
            integrating third-party tools or services.
          </p>
          <p className="text-grey font-medium md:text-base text-sm">
            Worked with BackEnd technologies such as NodeJS, ExpressJS along with AWS cloud hosting services such as
            Serverless, AWS AppSync, VPC, Step Functions. Also have hands-on experience in AWS EC2, S3, Route53, IVS and
            Elemental Media Services.
          </p>
          <p className="text-grey font-medium md:text-base text-sm">
            Experience working on BackEnd technologies interact with MongoDB, Postgres, MySQL.
          </p>
          <p className="text-grey font-medium md:text-base text-sm">
            A desire to work in a fast-paced and challenging environment
          </p>
        </div>
        <motion.div
          className="xl:w-2/5 w-full mt-8 flex flex-row md:justify-start justify-center hover:cursor-pointer"
          //   whileHover={{ scale: 1.1 }}
          //   whileTap={{
          //     scale: 0,
          //     borderRadius: '100%',
          //   }}
        >
          <img
            src={'assets/images/profile.jpg'}
            alt="profile-image"
            className="absolute z-20 w-[300px] h-[300px] object-cover"
          />
          <div className="w-[300px] h-[300px] absolute border-[1px] border-solid z-10 bg-[#000105] mt-4 ml-4"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
