import { cn } from '@/core/utils/cn';

const BG_COLORS: Record<string, string> = {
  default: 'bg-transparent',
  white: 'bg-white',
  'primary-light': 'bg-primary-light',
};

const CustomBoxIcon: React.FC<any> = ({
  icon: Icon,
  isActive,
  isBorder,
  bgColor,
  className,
}) => {
  return (
    <div
      className={cn(
        'w-16 h-16 rounded-md flex justify-center items-center px-3',
        isBorder ? 'border-black border-2' : '',
        isActive && BG_COLORS[bgColor],
        className
      )}
    >
      <Icon />
    </div>
  );
};

export default CustomBoxIcon;
