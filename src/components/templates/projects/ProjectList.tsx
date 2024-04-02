import { TitleText } from 'atoms';
import { OtherProjects } from 'organisms/index';
import Project, { ProjectProps } from 'organisms/projects/Project';
import { useInView } from 'src/utils/hooks/useInView';

const ProjectList = () => {
  const projects: ProjectProps[] = [
    {
      type: 'Featured Project',
      name: 'UBQ',
      direction: 'right',
      description:
        'Managing the team along with communicate with clients and work with third-party libraries to get, store and process the data based on requirements.',
      image: 'assets/images/UBQ.webp',
      stacks: ['React', 'TypeScript', 'Node', 'ECS', 'MongoDB'],
    },
    {
      type: 'Featured Project',
      name: 'VaultLogik',
      direction: 'left',
      description:
        'Leading the team and understanding the requirements and to brainstorm on new ideas for the development and provide more security to the application as it required.',
      image: 'assets/images/vaultlogik-1.svg',
      stacks: ['React', 'Node', 'MongoDB', 'Serverless'],
    },
    {
      type: 'Featured Project',
      name: 'BuySocial',
      direction: 'right',
      description:
        'Leading the front-end team by following best insdustry standards, maintaining code and architecture. Also work on the live streaming to achieve through AWS Services.',
      image: 'https://www.celoxis.com/cassets/img/pmc/project-management.png',
      stacks: ['React', 'Node', 'AWS', 'IVS', 'EMS'],
    },
  ];
  const otherProjects: ProjectProps[] = [
    {
      type: '',
      name: 'Brook Furniture System',
      direction: '',
      description:
        'This is a long-running application allows users to rent a furniture based on room or browsing, Mostly focused on US based cities.',
      image: '',
      stacks: ['React', 'TypeScript', 'Node', 'ECS', 'MongoDB'],
    },
    {
      type: '',
      name: 'Trxbe (Mobile App)',
      direction: '',
      description:
        'Trxbe is an application that allows users to find people with the same interests and nearby locations.',
      image: '',
      stacks: ['Flutter', 'Node JS', 'REST', 'EC2', 'MongoDB'],
    },
    {
      type: '',
      name: 'Flourish',
      direction: '',
      description:
        'Flourish is a comprehensive cannabis software that help to manage day-to-day operations and valuable insights for your cannabis operation.',
      image: '',
      stacks: ['Angular', 'GoLang', 'REST', 'postgres'],
    },
    {
      type: '',
      name: 'PreOpenHouse',
      direction: '',
      description:
        'PreOpenHouse is an application where user can put their properties on sale and can schedule a date and time to make it open to see.',
      image: '',
      stacks: ['Angular', 'Python-Django', 'MySQL'],
    },
    {
      type: '',
      name: 'E-Filing',
      direction: '',
      description:
        'This is a web-based e-filing system for courts, clerks, and attorneys. CourtFiling helps to reduce paperwork for filing cases in the court.',
      image: '',
      stacks: ['Angular', 'Java-JWT'],
    },
  ];

  const { ref, isVisible } = useInView({ threshold: 0.1 });
  return (
    <div ref={ref} className={`ready-to-reveal ${isVisible ? 'visible' : ''}`}>
      <TitleText title={"Things in which I've worked"} className="mb-20" />
      {projects.map((project: ProjectProps, index) => (
        <Project key={`project-${index}`} {...project} />
      ))}
      <OtherProjects projectList={otherProjects} />
    </div>
  );
};

export default ProjectList;
