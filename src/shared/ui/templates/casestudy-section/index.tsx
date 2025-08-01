const CaseStudySection: React.FC<any> = ({ caseStudySection }: any) => {
  return (
    <section className="common-component w-full h-full relative bg-white text-black">
      <div className="common-container px-6 py-8 md:px-24 md:py-24 !max-w-[1336px] !grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 md:gap-0">
        <div className="w-full flex flex-col gap-3">
          <h2 className="md:w-[95%] text-xl md:text-3xl font-semibold leading-[1.25] tracking-wide flex flex-col gap-2">
            <span>{caseStudySection.title}</span>
            <div className="w-25 h-1 bg-primary rounded"></div>
          </h2>
          <p className="w-full md:w-[85%] leading-6 tracking-wide text-text-dark font-medium text-lg md:text-xl">
            {caseStudySection.description}
          </p>
          <div className="md:hidden w-full h-full flex items-center justify-center pt-10">
            <img src={caseStudySection.img} />
          </div>
          <ul className="md:mt-4 text-base md:text-[1.35rem]">
            {caseStudySection.list.map((question: string, index: number) => {
              return (
                <li key={index + question} className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>{question}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:flex w-full h-full items-center justify-center">
          <img src={caseStudySection.img} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
