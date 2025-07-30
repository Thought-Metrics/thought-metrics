import React from 'react';

// Define the image data structure
export interface ImageData {
  id: string;
  src: string;
  alt: string;
  category: string;
  tags: string[];
}

// Define component props
export interface ImageAtomProps {
  type?:
    | 'podcast'
    | 'collaboration'
    | 'team'
    | 'meeting'
    | 'presentation'
    | 'workspace';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  color?: 'default' | 'primary' | 'secondary' | 'accent';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  className?: string;
  onClick?: () => void;
  loading?: 'lazy' | 'eager';
}

// Image database - Replace these with your actual image URLs
const IMAGE_DATABASE: ImageData[] = [
  {
    id: 'podcast-studio',
    src: '/images/podcast-studio.jpg', // Replace with actual image URL
    alt: 'Podcast recording studio with microphone and equipment',
    category: 'podcast',
    tags: ['studio', 'microphone', 'recording', 'audio'],
  },
  {
    id: 'design-collaboration',
    src: '/images/design-collaboration.jpg', // Replace with actual image URL
    alt: 'Team collaborating on design materials',
    category: 'collaboration',
    tags: ['design', 'teamwork', 'planning', 'creative'],
  },
  {
    id: 'diverse-team',
    src: '/images/diverse-team.jpg', // Replace with actual image URL
    alt: 'Diverse team of three professionals',
    category: 'team',
    tags: ['diversity', 'professional', 'portrait', 'business'],
  },
  {
    id: 'office-meeting',
    src: '/images/office-meeting.jpg', // Replace with actual image URL
    alt: 'Team meeting in modern office space',
    category: 'meeting',
    tags: ['office', 'meeting', 'discussion', 'modern'],
  },
  {
    id: 'video-presentation',
    src: '/images/video-presentation.jpg', // Replace with actual image URL
    alt: 'Video presentation or online meeting setup',
    category: 'presentation',
    tags: ['video', 'presentation', 'online', 'meeting'],
  },
  {
    id: 'modern-workspace',
    src: '/images/modern-workspace.jpg', // Replace with actual image URL
    alt: 'Modern workspace with people collaborating',
    category: 'workspace',
    tags: ['workspace', 'modern', 'collaboration', 'office'],
  },
];

// Size configurations
const SIZE_CLASSES = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24',
  lg: 'w-32 h-32',
  xl: 'w-48 h-48',
  full: 'w-full h-full',
} as const;

// Color border configurations
const COLOR_CLASSES = {
  default: '',
  primary: 'ring-2 ring-blue-500',
  secondary: 'ring-2 ring-gray-500',
  accent: 'ring-2 ring-pink-500',
} as const;

// Rounded configurations
const ROUNDED_CLASSES = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const;

// Shadow configurations
const SHADOW_CLASSES = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
} as const;

// Aspect ratio configurations
const ASPECT_RATIO_CLASSES = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  auto: '',
} as const;

// Object fit configurations
const OBJECT_FIT_CLASSES = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
  none: 'object-none',
  'scale-down': 'object-scale-down',
} as const;

const CustomImageAtom: React.FC<ImageAtomProps> = ({
  type = 'team',
  size = 'md',
  color = 'default',
  rounded = 'md',
  shadow = 'sm',
  aspectRatio = 'auto',
  objectFit = 'cover',
  className = '',
  onClick,
  loading = 'lazy',
}) => {
  // Find the image based on type
  const selectedImage =
    IMAGE_DATABASE.find((img) => img.category === type) || IMAGE_DATABASE[0];

  // Combine all classes
  const imageClasses = [
    SIZE_CLASSES[size],
    COLOR_CLASSES[color],
    ROUNDED_CLASSES[rounded],
    SHADOW_CLASSES[shadow],
    ASPECT_RATIO_CLASSES[aspectRatio],
    OBJECT_FIT_CLASSES[objectFit],
    'transition-all duration-300 ease-in-out',
    onClick ? 'cursor-pointer hover:scale-105' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="relative inline-block">
      <img
        src={selectedImage.src}
        alt={selectedImage.alt}
        className={imageClasses}
        onClick={onClick}
        loading={loading}
        onError={(e) => {
          // Fallback to placeholder if image fails to load
          e.currentTarget.src = `https://via.placeholder.com/400x300/cccccc/666666?text=${selectedImage.category}`;
        }}
      />

      {/* Optional overlay for interactive states */}
      {onClick && (
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-inherit" />
      )}
    </div>
  );
};

export default CustomImageAtom;
