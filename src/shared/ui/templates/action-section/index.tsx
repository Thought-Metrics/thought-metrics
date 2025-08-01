import CustomButtonAtom from '../../atoms/custom-button';

const ActionSection: React.FC<any> = ({ actionSection }: any) => {
  return (
    <section className="common-component w-full h-full relative bg-gradient-to-r from-custom-blue-light to-custom-grey-4">
      <actionSection.illustration className="absolute -right-26 md:-right-48 -bottom-28 w-[12rem] md:w-[28rem]" />
      <div className="z-1 common-container w-full !max-w-[var(--breakpoint-2xl)] !grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 px-6 md:px-24 pt-10">
        <div className="flex flex-col items-start justify-center gap-6">
          <h1 className="w-full xl:w-[70%] xxl:w-[80%] text-black text-2xl xl:text-[2.5rem] wide:text-[3rem] font-semibold">
            {actionSection.title}
          </h1>
          <CustomButtonAtom
            className="font-medium text-lg px-10 py-1 xl:text-xl xl:px-14 xl:py-2"
            label={actionSection.actionLabel}
          />
        </div>
        <div className="flex xxl:items-center xxl:justify-center w-[80%] md:w-full">
            <img src={actionSection.img} />
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
