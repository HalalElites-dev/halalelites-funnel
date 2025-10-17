'use client';
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import HolographicBackground from '@/lib/bgAnimated';
import { PaintRollerIcon } from 'lucide-react';
import Link from 'next/link';

interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  color: string;
  link?: string;
}

const PortfolioPage = () => {
  const portfolioProjects: PortfolioProject[] = [
    {
      id: 1,
      title: "Influence Cafe",
      description: "Developed a landing page for Influence Cafe to enhance their online presence and attract more customers.",
      image: "/mockup-influence Cafe.webp",
      category: "Web Development",
      year: "2025",
      color: "bg-brand-primary",
      link: "https://influencecafe.co/"
    },
    {
      id: 2,
      title: "Snappers",
      description: "Snappers website redesign with a focus on user engagement and streamlined navigation.",
      image: "/example2.webp",
      category: "Web Development",
      year: "2025",
      color: "bg-brand-primary"
    },
    {
      id: 3,
      title: "Hadramout",
      description: "Comprehensive restaurant website for Hadramout.",
      image: "/example3.webp",
      category: "Web Development",
      year: "2023",
      color: "bg-brand-primary"
    },
    {
      id: 4,
      title: "Maryam's Halal Taste of New York",
      description: "Showcasing the rich flavors and culinary traditions of Halal cuisine of New York.",
      image: "/example4.webp",
      category: "Web Development",
      year: "2023",
      color: "bg-brand-primary"
    }
  ];

  return (
    <div className="bg-background overflow-x-hidden">
      {/* Minimized Intro Section */}
      <HolographicBackground variant='two' />

      <section className="relative py-24 md:py-32 md:bg-background overflow-hidden">

        {/* Title Overlay */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 mb-6 md:mb-2">
                <PaintRollerIcon className="h-5 w-5 text-brand-primary" />
                <span className="font-mono text-xs text-brand-primary">
                  Our Work
                </span>
              </div>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
                Portfolio
              </h1>
              <p className="text-sm md:text-xl text-brand-primary font-light tracking-wide leading-relaxed font-mono">
                Selected Works & Projects
              </p>
            </motion.div>
          </div>
        </div>


      </section>

      {/* Showcase Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-32">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                  {/* Info */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      viewport={{ once: true }}
                      className={`h-1 bg-gradient-to-r ${project.color} rounded-full`}
                    ></motion.div>
                    <div>
                      <div className="text-brand-primary text-sm font-medium mb-2 tracking-wide uppercase">
                        {project.category}
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>
                      <Link href={project.link ?? '#'} className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.color} text-white font-medium rounded-lg hover:shadow-lg transform transition-all duration-300`}>
                        View Project
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                  >
                    <motion.div
                      initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl transform rotate-3`}
                    ></motion.div>
                    <div className="relative z-10 transform -rotate-1">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1280}
                        height={720}
                        className=" object-contain  rounded-2xl shadow-2xl"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;