import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { UnsplashImage } from '@/lib/unsplash';

interface ServiceCardProps {
  title: string;
  image: UnsplashImage;
  description?: string;
}

const ServiceCard = ({ title, image, description }: ServiceCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden bg-gray-900 rounded-2xl aspect-square"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={image.url}
        alt={image.alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        {description && (
          <p className="text-gray-300 text-sm mb-4">{description}</p>
        )}
        <Link
          href={image.credit.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-white transition-colors"
        >
          Photo by {image.credit.name} on Unsplash
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 