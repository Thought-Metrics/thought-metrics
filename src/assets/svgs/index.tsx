import './svgs.styles.scss';

//General and Header SVGs
import Logo from './logo.svg?react';
import CurveIcon from './curve-arrow.svg?react';
import ArrowRight from './right-arrow.svg?react';
import ArrowUp from './up-arrow.svg?react';

export { Logo, CurveIcon, ArrowRight, ArrowUp };

//Hero Carousel SVGs
import HeroCarousel1 from './hero-carousel-1.svg?react';
import HeroCarousel2 from './hero-carousel-2.svg?react';

import WingOne from './hero-carousel-3-wing-1.svg?react';
import WingTwo from './hero-carousel-3-wing-2.svg?react';

const HeroCarousel3: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <div className="relative w-full h-full">
        <WingOne className="stack-svg" />
        <WingTwo className="stack-svg" />
      </div>
    </div>
  );
};

export { HeroCarousel1, HeroCarousel2, HeroCarousel3 };

//Solutions Insights SVGs
import PersonWithPhone from './illustration-model.svg?react';
import PeopleIcon from './people.svg?react';
import ResearchIcon from './research.svg?react';
import StatisticsIcon from './statistics.svg?react';

export { PersonWithPhone, PeopleIcon, ResearchIcon, StatisticsIcon };
