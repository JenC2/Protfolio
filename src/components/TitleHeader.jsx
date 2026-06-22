const TitleHeader = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="font-semibold 2xl:text-7xl md:text-5xl text-3xl text-center">
        {title}
      </div>
    </div>
  );
};

export default TitleHeader;
