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

/* Industries Page Icons*/

import CheckListIcon from './svgs/check-list.svg?react';
import FastTimeIcon from './svgs/fast-time.svg?react';
import SupportHandIcon from './svgs/support-hand.svg?react';
import SlideBrickIcon from './svgs/slide-brick.svg?react';
import IdealCustomerIcon from './svgs/ideal-customer.svg?react';
import HandSelectionIcon from './svgs/hand-selection.svg?react';
import CustomerBagIcon from './svgs/customer-bag.svg?react';
import ContainerShelfIcon from './svgs/container-shelf.svg?react';
import LocatorPinIcon from './svgs/locator-pin.svg?react';
import PartnerCycleIcon from './svgs/partner-cycle.svg?react';
import CheckNoteIcon from './svgs/check-note.svg?react';
import PeopleConnectIcon from './svgs/people-connect.svg?react';
import PeopleWorldwideIcon from './svgs/people-worldwide.svg?react';
import AnalystIcon from './svgs/analyst.svg?react';
import CarIcon from './svgs/car.svg?react';
import ClipboardIcon from './svgs/clipboard.svg?react';
import CoderIcon from './svgs/coder.svg?react';
import CustomerCartIcon from './svgs/customer-cart.svg?react';
import FirstLawIcon from './svgs/first-law.svg?react';
import KeyIcon from './svgs/key.svg?react';
import MechanicIcon from './svgs/mechanic.svg?react';
import NavigateChangeIcon from './svgs/navigate-change.svg?react';
import PersonReadIcon from './svgs/person-read.svg?react';
import PersonStaringIcon from './svgs/person-staring.svg?react';
import SheetBagIcon from './svgs/sheet-bag.svg?react';
import ShieldIcon from './svgs/shield.svg?react';
import UIPanelIcon from './svgs/ui-panel.svg?react';
import WorkerIcon from './svgs/worker.svg?react';

export {
  CheckListIcon,
  FastTimeIcon,
  SupportHandIcon,
  SlideBrickIcon,
  IdealCustomerIcon,
  HandSelectionIcon,
  CustomerBagIcon,
  ContainerShelfIcon,
  LocatorPinIcon,
  PartnerCycleIcon,
  CheckNoteIcon,
  PeopleConnectIcon,
  PeopleWorldwideIcon,
  PersonReadIcon,
  PersonStaringIcon,
  SheetBagIcon,
  ShieldIcon,
  UIPanelIcon,
  WorkerIcon,
  AnalystIcon,
  CarIcon,
  ClipboardIcon,
  CoderIcon,
  CustomerCartIcon,
  FirstLawIcon,
  KeyIcon,
  MechanicIcon,
  NavigateChangeIcon,
};

/* Capabilities Page ICONS & Illustrations */

import BrandAwarnessIllustration from './svgs/brand-awarness.svg?react';
import CompetitiveAnalysisIllustration from './svgs/competitive-analysis.svg?react';
import ConjointAnalysisIllustration from './svgs/conjoint-analysis.svg?react';
import CustomerLoyaltyIllustration from './svgs/customer-loyalty.svg?react';
import MarketEntryIllustration from './svgs/market-entry.svg?react';
import MountainIllustration from './svgs/mountain-illustration.svg?react';
import ProductValidationIllustration from './svgs/product-validation.svg?react';
import UXResearchIllustration from './svgs/ux-research.svg?react';
import GotoIllustration from './svgs/goto-illustration.svg?react';
import FeasibilityIllustration from './svgs/feasibility-illustration.svg?react';
import CubicCaptureIllustration from './svgs/cubic-capture-illustration.svg?react';
import IllustrationSquares1 from './svgs/illustration-squares-1.svg?react';
import EyeTrackingIllustration from './svgs/eye-tracking.svg?react';
import BrandLoyaltyIcon from './svgs/brand-loyalty.svg?react';
import ChangeAdaptabilityIcon from './svgs/change-adaptability.svg?react';
import CompetitiveEdgeIcon from './svgs/competitive-edge.svg?react';
import ConceptTestingIcon from './svgs/concept-testing.svg?react';
import CostReductionIcon from './svgs/cost-reduction.svg?react';
import CustomerInsightsIcon from './svgs/customer-insights.svg?react';
import CustomerSatisfactionIcon from './svgs/customer-satisfaction.svg?react';
import CustomerStarIcon from './svgs/customer-star.svg?react';
import EnhancedRoiIcon from './svgs/enhanced-roi.svg?react';
import HolisticCampaignIcon from './svgs/holistic-campaign.svg?react';
import IdeaGenerationIcon from './svgs/idea-generation.svg?react';
import InnovationEncouragementIcon from './svgs/innovation-encouragement.svg?react';
import LoveCycleIcon from './svgs/love-cycle.svg?react';
import MarketSimulationIcon from './svgs/market-simulation.svg?react';
import MessageKiteIllustration from './svgs/message-kite.svg?react';
import OptMarketingIcon from './svgs/opt-marketing.svg?react';
import PackingBrandingIcon from './svgs/packing-branding.svg?react';
import PrelaunchFeedbackIcon from './svgs/prelaunch-feedback.svg?react';
import PricingPositioningIcon from './svgs/pricing-positioning.svg?react';
import ProductMarketFitIcon from './svgs/product-market-fit.svg?react';
import PrototypeEvaluationIcon from './svgs/prototype-evaluation.svg?react';
import RiskMitigationIcon from './svgs/risk-mitigation.svg?react';
import PostLaunchInsightIcon from './svgs/post-launch-insights.svg?react';
import DataDrivenIcon from './svgs/data-driven.svg?react';

export {
  BrandAwarnessIllustration,
  CompetitiveAnalysisIllustration,
  ConjointAnalysisIllustration,
  CustomerLoyaltyIllustration,
  MarketEntryIllustration,
  MountainIllustration,
  ProductValidationIllustration,
  UXResearchIllustration,
  GotoIllustration,
  FeasibilityIllustration,
  CubicCaptureIllustration,
  IllustrationSquares1,
  EyeTrackingIllustration,
  BrandLoyaltyIcon,
  ChangeAdaptabilityIcon,
  CompetitiveEdgeIcon,
  ConceptTestingIcon,
  CostReductionIcon,
  CustomerInsightsIcon,
  CustomerSatisfactionIcon,
  CustomerStarIcon,
  EnhancedRoiIcon,
  HolisticCampaignIcon,
  IdeaGenerationIcon,
  InnovationEncouragementIcon,
  LoveCycleIcon,
  MarketSimulationIcon,
  MessageKiteIllustration,
  OptMarketingIcon,
  PackingBrandingIcon,
  PrelaunchFeedbackIcon,
  PricingPositioningIcon,
  ProductMarketFitIcon,
  PrototypeEvaluationIcon,
  RiskMitigationIcon,
  PostLaunchInsightIcon,
  DataDrivenIcon
};
