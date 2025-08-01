import { cn } from '@/core/utils/cn';

const BG_COLORS: Record<string, string> = {
  default: 'bg-transparent',
  white: 'bg-white',
};

const FeatureCard: React.FC<any> = ({ feature, index, className }) => {
  return (
    <div
      key={index + feature.title}
      className={cn(
        'text-white rounded-lg flex flex-col gap-2 md:gap-8',
        feature.isBorder ? 'border-white border-1' : '',
        feature.bgColor && BG_COLORS[feature.bgColor],
        className
      )}
    >
      <div className="flex flex-col gap-12">
        <h2 className="text-xl font-medium w-[75%]">{feature.title}</h2>
        <p className="font-normal leading-5">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
