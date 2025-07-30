const CustomButtonAtom: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="w-full">
      <button className="bg-primary text-white font-bold rounded-md text-xl text-nowrap py-1 px-6 w-auto">
        <label htmlFor="">{label}</label>
      </button>
    </div>
  );
};

export default CustomButtonAtom;
