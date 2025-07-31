const CustomBoxIcon: React.FC<any> = ({ icon: Icon, isActive, className }) => {
  return (
    <div
      className={`bg-white border-2 w-16 h-16 rounded-lg flex justify-center items-center ${className}`}
    >
      <Icon className={`${isActive ? 'text-blue-500' : 'text-gray-500'}`} />
    </div>
  );
};

export default CustomBoxIcon;
