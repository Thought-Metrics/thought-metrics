import './svgs.styles.css';

//General and Header SVGs
import Logo from './svgs/logo.svg?react';
import CurveIcon from './svgs/curve-arrow.svg?react';
import ArrowRight from './svgs/right-arrow.svg?react';
import ArrowUp from './svgs/up-arrow.svg?react';
import StackIllustration from './svgs/stack_illustration.svg?react';
import ArrowRed from './svgs/arrow-red.svg?react';
import HomeIcon from './svgs/home.svg?react';
import IllustrationSquares from './svgs/illustration-squares.svg?react';

export {
  Logo,
  CurveIcon,
  ArrowRight,
  ArrowUp,
  StackIllustration,
  ArrowRed,
  HomeIcon,
  IllustrationSquares,
};

/* Home Page */
//Hero Carousel SVGs
import HeroCarousel1 from './svgs/hero-carousel-1.svg?react';
import HeroCarousel2 from './svgs/hero-carousel-2.svg?react';

import WingOne from './svgs/hero-carousel-3-wing-1.svg?react';
import WingTwo from './svgs/hero-carousel-3-wing-2.svg?react';

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
import PersonWithPhone from './svgs/illustration-model.svg?react';
import PeopleIcon from './svgs/people.svg?react';
import ResearchIcon from './svgs/research.svg?react';
import StatisticsIcon from './svgs/statistics.svg?react';

export { PersonWithPhone, PeopleIcon, ResearchIcon, StatisticsIcon };

//B2B Services SVGs
import IllustrationSlope from './svgs/illustration-slope.svg?react';
import DoorPerson from './svgs/door-person.svg?react';
import Spiral from './svgs/spiral.svg?react';
import BoxCluster from './svgs/box-cluster.svg?react';
export { IllustrationSlope, DoorPerson, Spiral, BoxCluster };

//Footer
import LogoWhite from './svgs/logo_white.svg?react';
export { LogoWhite };

/* Industries Page */

import CheckListIcon from './svgs/check-list.svg?react';
import FastTimeIcon from './svgs/fast-time.svg?react';
import SupportHandIcon from './svgs/support-hand.svg?react';
import SlideBrickIcon from './svgs/slide-brick.svg?react';
import IdealCustomerIcon from './svgs/ideal-customer.svg?react';
import HandSelectionIcon from './svgs/hand-selection.svg?react';
import CustomerCartIcon from './svgs/customer-cart.svg?react';

export {
  CheckListIcon,
  FastTimeIcon,
  SupportHandIcon,
  SlideBrickIcon,
  IdealCustomerIcon,
  HandSelectionIcon,
  CustomerCartIcon,
};
