import { FC } from 'react';

interface MenuItemProps {
  title: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  className?: string;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  return (
    <a
      className="no-underline text-neon cursor-pointer ml-6 lg:ml-0 mr-4 lg:mr-24 lg:pr-16 lg:pt-20 lg:-rotate-90  flex flex-row justify-center gap-2 align-middle"
      onClick={props.onClick}
    >
      {props.icon}
      {props.title}
    </a>
  );
};

export default MenuItem;
