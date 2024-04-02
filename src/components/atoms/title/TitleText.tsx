interface TitleTextProps {
  title: string;
  className?: string;
}
const TitleText = (props: TitleTextProps) => {
  return (
    <>
      <div className={`flex flex-row gap-4 ${props.className}`}>
        <span className="xl:text-4xl lg:text-base md:text-2xl text-sm font-medium text-primary-title">
          {props.title}
        </span>
        <div className="h-[1px] md:w-[300px] w-[80px] bg-neon md:mt-5 mt-2 opacity-75 align-middle ml-6"></div>
      </div>
    </>
  );
};

export default TitleText;
