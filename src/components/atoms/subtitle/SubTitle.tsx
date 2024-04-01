interface SubTitleProps {
  text: string;
  className?: string;
}
const SubTitle = (props: SubTitleProps) => {
  return <h5 className={`m-0 font-medium text-neon ${props.className}`}> {props.text}</h5>;
};

export default SubTitle;
