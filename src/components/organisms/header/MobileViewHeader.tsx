import { FC, RefObject, useState } from 'react';

import { Button, MenuItem } from 'atoms';
import { AboutIcon, ContactIcon, GithubIcon, LinkedInIcon, MailIcon, WorkIcon } from 'icons';

interface MVHeaderProps {
  aboutRef: RefObject<null | HTMLDivElement>;
  workRef: RefObject<null | HTMLDivElement>;
  contactRef: RefObject<null | HTMLDivElement>;
}

const MobileViewHeader: FC<MVHeaderProps> = ({ aboutRef, workRef, contactRef }) => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  return (
    <div className="flex flex-row justify-between">
      <div className="pl-6 pt-6">
        <span className="flex flex-row justify-start font-medium">
          <span className="text-grey text-2xl">{'<'}</span>
          <span className="text-neon text-[10px] -rotate-90">{'Kashish'}</span>
        </span>
        <span className="flex flex-row justify-start -mt-6 pl-3 font-medium">
          <span className="text-neon text-[10px] rotate-90">{'Solanki'}</span>
          <span className="text-grey text-2xl ml-0">{'>'}</span>
        </span>
      </div>

      <button
        className={`w-14 h-14 bg-transparent rounded border-0 z-50 ${showDrawer ? 'fixed' : 'relative'} right-0 top-0`}
        onClick={() => setShowDrawer(!showDrawer)}
      >
        <div className="block absolute right-0 mr-6">
          <span
            className={`block absolute h-0.5 w-7 text-white bg-neon right-0 transition delay-150 ${showDrawer ? 'rotate-45 mt-2 ease-out ' : 'ease-in'}`}
          ></span>
          <span
            className={`block absolute h-0.5 w-5 text-white mt-2 bg-neon right-0 transition delay-150 ${showDrawer ? 'opacity-0' : 'ease-in'}`}
          ></span>
          <span
            className={`block absolute h-0.5 text-white mt-4 bg-neon right-0 transition delay-150 ${showDrawer ? '-rotate-45 w-7 mt-[6px] mr-0 ease-out ' : 'w-3 ease-in'}`}
          ></span>
        </div>
      </button>
      <aside
        className={`top-0 z-40 right-0 w-60 bg-[#112240] px-6 py-32 fixed h-[90%] ease-in-out duration-300 ${
          showDrawer ? 'translate-x-0 ' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <MenuItem
              title="About"
              icon={<AboutIcon className="mt-[2px] text-left" />}
              onClick={() => {
                aboutRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setShowDrawer(false);
              }}
            />
            <MenuItem
              title="Work"
              icon={<WorkIcon className="mt-[2px]" />}
              onClick={() => {
                workRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setShowDrawer(false);
              }}
            />
            <MenuItem
              title="Contact"
              icon={<ContactIcon className="mt-[2px]" />}
              onClick={() => {
                contactRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setShowDrawer(false);
              }}
            />

            <Button
              title={'Download Resume'}
              className="mt-10 bottom-0"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1xJ8G3vaiF1HsOg7_2ER-0HcfFnrMbhYh/view?usp=sharing',
                  '_blank',
                )
              }
            />
          </div>
          <div className="flex flex-row justify-center text-center">
            <div className="absolute bottom-48">
              <a className="cursor-pointer" href="mailto:kashishsolanki3@gmail.com">
                <MailIcon className="text-neon text-xl pt-[2px]" />
              </a>
              <a className="cursor-pointer" onClick={() => window.open('https://github.com/kashishsolanki', '_blank')}>
                <GithubIcon className="text-neon text-xl pl-4 pt-[2px]" />
              </a>
              <a
                className="cursor-pointer"
                onClick={() => window.open('https://www.linkedin.com/in/kashishsolanki/', '_blank')}
              >
                <LinkedInIcon className="text-neon text-xl pl-4 pt-[2px]" />
              </a>
              {/* <a className="cursor-pointer" onClick={() => window.open('https://github.com/kashishsolanki', '_blank')}>
                <InstagramIcon className="text-neon text-xl pl-4 pt-[2px]" />
              </a> */}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default MobileViewHeader;
