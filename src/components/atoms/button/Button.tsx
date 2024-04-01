export interface ButtonProps {
  title: string;
  icon?: React.ReactElement;
  className?: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`font-roboto hover:cursor-pointer border-neon text-neon bg-transparent rounded-lg border-[1px] font-medium p-3 ${props.className}`}
      onClick={props.onClick}
    >
      {props.icon}
      {props.title}
    </button>
  );
}
