import AnimateOnScroll from "./AnimateOnScroll"; 



interface SectionHeadingProps {
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  description,
  highlight,
}) => {
  return (
    <AnimateOnScroll animation="translateY(-100px)">
      <div className="flex flex-col items-center my-11 gap-4">
        <h1 className='font-caveatRegular text-brandColor text-4xl lg:text-6xl'>
          {title}
        </h1>
        <h2 className="text-3xl lg:text-5xl font-semibold lg:max-w-[600px] text-center leading-snug">{subtitle}</h2>
        <p className="text-center"> 
          {description} <span className="text-brandColor">{highlight}</span>
        </p>
      </div>
    </AnimateOnScroll>
  );
};

export default SectionHeading;
