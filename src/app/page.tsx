'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import ServiceCard from '@/components/ServiceCard';
import { images } from '@/lib/unsplash';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const services = [
  {
    title: 'RED LIGHT THERAPY',
    image: images.redLightTherapy,
    description: 'Advanced light therapy for recovery and rejuvenation.'
  },
  {
    title: 'COMPRESSION',
    image: images.compression,
    description: 'Dynamic compression therapy for muscle recovery.'
  },
  {
    title: 'IV THERAPY',
    image: images.ivTherapy,
    description: 'Customized IV treatments for optimal wellness.'
  }
];

const newsArticles = [
  {
    title: 'How to Recover Like an Elite Athlete',
    source: 'The New York Times',
    image: images.nytArticle
  },
  {
    title: 'Why You Need Rest and Recovery',
    source: 'VeryWell Fit',
    image: images.verywellArticle
  },
  {
    title: 'The Rise of Recovery',
    source: 'The Globe and Mail',
    image: images.globeArticle
  }
];

export default function Home() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white py-32">
        <motion.div 
          className="container text-center space-y-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest"
            variants={fadeIn}
          >
            IMAGINE
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
            variants={fadeIn}
          >
            Being the first money into Equinox, Soul Cycle, Nobu or Whole Foods.
          </motion.p>
        </motion.div>
        <motion.div
          className="absolute bottom-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.div
            onClick={scrollToNextSection}
            className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* World Doesn't Need Section */}
      <section id="next-section" className="min-h-screen relative flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src={images.gymBackground.url}
            alt={images.gymBackground.alt}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        </div>
        <motion.div 
          className="container relative z-10 text-center space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-light tracking-widest leading-tight"
            variants={fadeIn}
          >
            BUT THE WORLD<br />
            DOESN'T NEED<br />
            ANOTHER GYM
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
            variants={fadeIn}
          >
            Or another cycle studio, sushi restaurant, or grocery store.
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="mt-8"
          >
            <Link
              href={images.gymBackground.credit.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Photo by {images.gymBackground.credit.name} on Unsplash
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Rise of Recovery Section */}
      <section className="min-h-screen bg-black flex flex-col items-center justify-center py-24">
        <motion.div 
          className="container text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.h2 
            className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest mb-8"
            variants={fadeIn}
          >
            THE RISE OF<br />RECOVERY
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
            variants={fadeIn}
          >
            The world needs a new kind of place.<br />
            A place to recover. Rebuild. Restore. Reconnect.
          </motion.p>
        </motion.div>

        <motion.div 
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article, index) => (
              <motion.div
                key={article.title}
                className="relative aspect-[4/3] group overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.2
                    }
                  }
                }}
              >
                <Image
                  src={article.image.url}
                  alt={article.image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                  <p className="text-sm text-gray-400 mb-2">{article.source}</p>
                  <h3 className="text-xl font-semibold mb-4">{article.title}</h3>
                  <Link
                    href={article.image.credit.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 hover:text-white transition-colors"
                  >
                    Photo by {article.image.credit.name}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Introducing Section */}
      <section className="py-40 bg-black">
        <div className="container">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  duration: 1,
                  ease: "easeOut"
                }
              }
            }}
          >
            <motion.h2 
              className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest"
              variants={{
                hidden: { opacity: 0, letterSpacing: "0.2em" },
                visible: {
                  opacity: 1,
                  letterSpacing: "0.3em",
                  transition: {
                    duration: 1.2,
                    ease: "easeOut"
                  }
                }
              }}
            >
              INTRODUCING...
            </motion.h2>
          </motion.div>
        </div>
      </section>

      {/* R House Intro Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={images.luxuryInterior.url}
            alt={images.luxuryInterior.alt}
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />
        </div>

        <div className="container relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {/* Logo and Text Container */}
            <div className="space-y-12">
              <motion.div variants={fadeIn} className="flex items-center gap-6">
                <Image
                  src="/r-house-logo.svg"
                  alt="R House Logo"
                  width={80}
                  height={80}
                  className="w-20 md:w-24"
                />
                <h3 className="text-3xl md:text-4xl tracking-widest font-light">HOUSE</h3>
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-widest leading-tight"
                variants={fadeIn}
              >
                THE WORLD&apos;S FIRST<br />PREMIUM<br />RECOVERY LOUNGE
              </motion.h2>
            </div>

            {/* Image Credit */}
            <motion.div
              variants={fadeIn}
              className="absolute bottom-8 left-0 right-0 text-center"
            >
              <Link
                href={images.luxuryInterior.credit.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
            
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Proven Therapies Section */}
      <section className="min-h-screen bg-black relative flex items-center justify-center py-32">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/r-pattern.svg')] opacity-5" />
        
        <motion.div 
          className="container relative text-center space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="space-y-6">
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-light tracking-widest leading-tight"
              variants={fadeIn}
            >
              PROVEN THERAPIES<br />
              IN AN UPSCALE<br />
              ENVIRONMENT
            </motion.h2>
          </div>

          <motion.div 
            className="space-y-6 text-xl md:text-2xl font-light tracking-wider"
            variants={fadeIn}
          >
            <p>
              <span className="font-medium">PROVEN</span> RECOVERY MODALITIES.
            </p>
            <p>
              <span className="font-medium">BACKED</span> BY SCIENCE.
            </p>
            <p>
              <span className="font-medium">TRUSTED</span> BY SPORTS SCIENTISTS.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen bg-black relative py-32">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/r-pattern.svg')] opacity-5" />
        
        <div className="container relative">
          <motion.div 
            className="text-center space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-light tracking-widest"
              variants={fadeIn}
            >
              SERVICES
            </motion.h2>
            
            {/* Hexagonal grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.2
                      }
                    }
                  }}
                  className={index === 1 ? 'md:mt-32' : ''}
                >
                  <ServiceCard
                    title={service.title}
                    image={service.image}
                    description={service.description}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Just the Beginning Section */}
      <section className="min-h-screen bg-black relative py-32">
        <motion.div 
          className="container relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {/* Main Text */}
          <div className="text-center mb-24">
            <motion.h2 
              className="text-6xl md:text-7xl lg:text-8xl font-light tracking-widest mb-8"
              variants={fadeIn}
            >
              JUST THE BEGINNING.
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
              variants={fadeIn}
            >
              We're launching our flagship location in Toronto as the first site for the R-House global brand
            </motion.p>
          </div>

          {/* Staggered Image Layout */}
          <div className="max-w-5xl mx-auto relative">
            {/* Storefront Image */}
            <motion.div
              className="relative w-full md:w-2/3 mb-12 ml-auto"
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={images.storefront.url}
                  alt={images.storefront.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="mt-2 text-right">
                <Link
                  href={images.storefront.credit.link}
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Photo by {images.storefront.credit.name}
                </Link>
              </div>
            </motion.div>

            {/* Branded Hoodie Image */}
            <motion.div
              className="relative w-full md:w-1/2 mb-12"
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } }
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={images.brandedHoodie.url}
                  alt={images.brandedHoodie.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="mt-2">
                <Link
                  href={images.brandedHoodie.credit.link}
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Photo by {images.brandedHoodie.credit.name}
                </Link>
              </div>
            </motion.div>

            {/* Leather Texture Image */}
            <motion.div
              className="relative w-full md:w-3/4 ml-auto"
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.6 } }
              }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={images.leatherTexture.url}
                  alt={images.leatherTexture.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="mt-2 text-right">
                <Link
                  href={images.leatherTexture.credit.link}
                  className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Photo by {images.leatherTexture.credit.name}
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black">
        <div className="container">
          <motion.div 
            className="text-center space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <motion.h2 
              className="heading-lg mb-8"
              variants={fadeIn}
            >
              INTERESTED?
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              variants={fadeIn}
            >
              If you think the world needs another coffee shop or sushi restaurant, we wish you the best.<br /><br />
              If you're ready to be part of an elite wellness and recovery brand, we're taking calls with investors
              who want to join this movement.
            </motion.p>
            <motion.form 
              className="max-w-md mx-auto space-y-6 mt-12"
              variants={fadeIn}
            >
              <Input
                type="text"
                placeholder="Full Name*"
                required
              />
              <Input
                type="email"
                placeholder="Email*"
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number*"
                required
              />
              <Input
                type="email"
                placeholder="Assistant Email"
              />
              <Button
                type="submit"
                className="w-full"
              >
                SUBMIT
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-900">
        <div className="container">
          <p className="text-center text-gray-500 text-sm">
            © 2023 R House. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
