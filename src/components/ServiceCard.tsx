import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { UnsplashImage } from '@/lib/unsplash';

interface ServiceCardProps {
  title: string;
  image: UnsplashImage;
  description?: string;
  className?: string;
}

const ServiceCard = ({ title, image, description, className = '' }: ServiceCardProps) => {
  return (
    <motion.div
      className={`group relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative aspect-[1/1.15] overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
        <Image
          src={image.url}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h3 className="text-2xl md:text-3xl font-light tracking-widest text-white mb-4">{title}</h3>
          {description && (
            <p className="text-sm text-gray-300 max-w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {description}
            </p>
          )}
        </div>

        <div className="absolute bottom-6 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Link
            href={image.credit.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            Photo by {image.credit.name}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 