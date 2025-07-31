import { cn } from '@/core/utils/cn';
import CustomBoxIcon from '../../atoms/custom-box-icon';

const BG_COLORS: Record<string, string> = {
  default: 'bg-transparent',
  white: 'bg-white',
  primary: 'bg-primary',
  grey: 'bg-custom-grey-3',
};

const ServiceCard: React.FC<any> = ({ service, index, className }) => {
  return (
    <div
      key={index + service.title}
      className={cn(
        'text-black rounded-lg flex flex-col gap-2 md:gap-8',
        service.isBorder ? 'border-black border-2' : '',
        service.isActive && BG_COLORS[service.bgColor],
        className
      )}
    >
      <CustomBoxIcon
        icon={service.iconOptions.icon}
        isActive={service.iconOptions.isActive}
        isBorder={service.iconOptions.isBorder}
        bgColor={service.iconOptions.bgColor}
      />
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold">{service.title}</h2>
        <p className="">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
