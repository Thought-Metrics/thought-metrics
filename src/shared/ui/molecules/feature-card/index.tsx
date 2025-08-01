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
      <div className="flex flex-col gap-4 md:gap-8 xxl:gap-10">
        <h2 className="text-base xxl:text-xl font-medium">{feature.title}</h2>
        <p className="text-md xxl:text-base font-normal leading-5">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
