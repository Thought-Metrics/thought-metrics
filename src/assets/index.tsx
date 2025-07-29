import './svgs.styles.css';

//General and Header SVGs
import Logo from './logo.svg?react';
import CurveIcon from './curve-arrow.svg?react';
import ArrowRight from './right-arrow.svg?react';
import ArrowUp from './up-arrow.svg?react';
import StackIllustration from './stack_illustration.svg?react';
import ArrowRightRed from './right-arrow-red.svg?react';

export {
  Logo,
  CurveIcon,
  ArrowRight,
  ArrowUp,
  StackIllustration,
  ArrowRightRed,
};

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

//B2B Services SVGs
import IllustrationSlope from './illustration-slope.svg?react';
import DoorPerson from './door-person.svg?react';
import Spiral from './spiral.svg?react';
import BoxCluster from './box-cluster.svg?react';
export { IllustrationSlope, DoorPerson, Spiral, BoxCluster };

//Footer
import LogoWhite from './logo_white.svg?react';
export { LogoWhite };
