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
            DOESN&apos;T NEED<br />
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
      <section className="py-40 bg-black">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="space-y-6">
              <motion.h2 
                className="heading-lg"
                variants={fadeIn}
              >
                THE RISE OF<br />RECOVERY
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300"
                variants={fadeIn}
              >
                The world needs a new kind of place.<br />
                A place to recover. Rebuild. Restore. Reconnect.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {newsArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg"
                  variants={fadeIn}
                  custom={index}
                >
                  <Image
                    src={article.image.url}
                    alt={article.image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end">
                    <h3 className="text-sm font-bold">{article.title}</h3>
                    <p className="text-xs text-gray-300">{article.source}</p>
                    <Link
                      href={article.image.credit.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-white transition-colors mt-2"
                    >
                      Photo by {article.image.credit.name}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
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
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <motion.div 
            className="text-center space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Image
              src="/r-house-logo.svg"
              alt="R House Logo"
              width={120}
              height={120}
              className="mx-auto"
            />
            <motion.h2 
              className="heading-lg"
              variants={fadeIn}
            >
              THE WORLD&apos;S FIRST PREMIUM<br />
              RECOVERY LOUNGE
            </motion.h2>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black">
        <div className="container">
          <motion.div 
            className="text-center space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <motion.h2 
              className="heading-lg"
              variants={fadeIn}
            >
              PROVEN THERAPIES<br />
              IN AN UPSCALE<br />
              ENVIRONMENT
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  image={service.image}
                  description={service.description}
                />
              ))}
            </div>
          </motion.div>
        </div>
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
              If you&apos;re ready to be part of an elite wellness and recovery brand, we&apos;re taking calls with investors
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
