import { TitleText } from 'atoms';
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
      image: 'assets/images/vaultlogik.svg',
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

  const { ref, isVisible } = useInView({ threshold: 0.3 });
  return (
    <div ref={ref} className={`ready-to-reveal ${isVisible ? 'visible' : ''}`}>
      <TitleText title={"Some things I've built"} className="mb-20" />
      {projects.map((project: ProjectProps) => (
        <Project {...project} />
      ))}
    </div>
  );
};

export default ProjectList;
