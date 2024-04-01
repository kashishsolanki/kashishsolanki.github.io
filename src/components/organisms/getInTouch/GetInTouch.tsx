import { TitleText } from '../../atoms';

const GetInTouch = () => {
  return (
    <div className="flex flex-col">
      <TitleText title={'Get In Touch'} className="mb-20" />
      <p className="text-grey xl:px-52 lg:px-8 md:px-8 px-0 text-left">
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a
        question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <div className="flex flex-row items-center justify-center w-auto my-32">
        <a
          href="mailto:kashishsolanki3@gmail.com"
          className="no-underline font-roboto border-1 border-solid border-neon text-neon bg-transparent rounded-lg border-[1px] font-medium p-3 "
        >
          Say Hello
        </a>
      </div>
      <span className="text-grey text-xs mb-10">
        @ Design Insipred from
        <a href="https://github.com/bchiang7/v4" target="_blank" className="text-neon pl-2">
          brittanychiang
        </a>
      </span>
    </div>
  );
};

export default GetInTouch;
