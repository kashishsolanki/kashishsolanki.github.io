const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h4 className="text-neon font-medium mb-4">{'> Skills'}</h4>
      <div className="h-[1px] w-32 bg-neon"></div>
      <div className="skillset mt-2">
        <ul className="grid grid-cols-2 gap-4 px-4 md:gap-x-20 gap-x-6 justify-between place-content-around">
          <li className="text-grey md:text-base text-xs">JavaScript (6+ years)</li>
          <li className="text-grey md:text-base text-xs">TypeScript (5 years)</li>
          <li className="text-grey md:text-base text-xs">React (3+ years)</li>
          <li className="text-grey md:text-base text-xs">Angular (2 years)</li>

          <li className="text-grey md:text-base text-xs">Node (2+ years)</li>
          <li className="text-grey md:text-base text-xs">MongoDB (3+ years)</li>
          <li className="text-grey md:text-base text-xs">Postgres (2 years)</li>
          <li className="text-grey md:text-base text-xs">Graphql (2+ years)</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
