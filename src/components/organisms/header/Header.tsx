import { FC, RefObject } from 'react';
import { Button } from '../../atoms';
import { Menu } from '../../molecules';
import { GithubIcon, LinkedInIcon } from 'icons';

interface HeaderProps {
  aboutRef: RefObject<null | HTMLDivElement>;
  workRef: RefObject<null | HTMLDivElement>;
  contactRef: RefObject<null | HTMLDivElement>;
}

const Header: FC<HeaderProps> = (props) => {
  return (
    <div className="left-menus">
      <Button
        title={'Download Resume'}
        className="fixed right-0 mr-12 mt-6 "
        onClick={() =>
          window.open('https://drive.google.com/file/d/1xJ8G3vaiF1HsOg7_2ER-0HcfFnrMbhYh/view?usp=sharing', '_blank')
        }
      />
      <Menu {...props} />
      <div className="fixed left-0 bottom-0 lg:pl-10 lg:pb-10 flex flex-col gap-8 text-2xl">
        <a className="cursor-pointer" onClick={() => window.open('https://github.com/kashishsolanki', '_blank')}>
          <GithubIcon className="text-neon" />
        </a>
        <a
          className="cursor-pointer"
          onClick={() => window.open('https://www.linkedin.com/in/kashishsolanki/', '_blank')}
        >
          <LinkedInIcon className="text-neon" />
        </a>
        {/* <a onClick={() => window.open('https://www.instagram.com/_mr.kashish', '_blank')}>
          <InstagramIcon className="text-neon" />
        </a> */}
      </div>
    </div>
  );
};

export default Header;
