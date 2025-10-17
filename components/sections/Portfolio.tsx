import HolographicBackground from '@/lib/bgAnimated'
import { portfolioItems } from '@/lib/constants'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Portfolio = () => {
  return (
    <section className='py-16 bg-background relative overflow-hidden min-h-screen'>
      <HolographicBackground variant='single' />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <h3 className="inline-flex items-center gap-2 glass-effect rounded-full px-4 py-2 text-md font-mono text-brand-primary">
            Our Work
          </h3>
          <h2 className="text-3xl md:text-6xl font-bold leading-relaxed font-sans">
            Projects That
            Make Impact

          </h2>
          <p className="mt-4 md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-mono">
            Real solutions for real Muslim businesses
          </p>
        </div>

        <div>
          {/* portfolio section */}
          <div className='max-w-7xl mx-auto relative z-10'>
            <div className={`grid gap-8 max-w-7xl mx-auto ${portfolioItems.length === 1
                ? 'place-items-center'
                : 'md:grid-cols-2 lg:grid-cols-3'
              }`}>
              {portfolioItems.map((item, index) => (
                <div key={index} className="">
                  {/* Square Image Container */}
                  <div className="relative  mb-6 rounded-2xl overflow-hidden glass-effect ">
                    <Image
                      width={600}
                      height={300}
                      src={item.image || '/placeholder.webp'}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3 mt-auto">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className=' flex  justify-center md:mt-2'>
                    <Button
                      asChild
                      variant={'outline'}
                      className="hover:text-brand-primary text-secondary-foreground font-mono font-thin duration-300  hover:border-brand-primary"
                    >
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg">
                        visit_website
                      </a>
                    </Button>
                  </div>
                </div>

              ))}
            </div>


          </div>
        </div>
      </div>

    </section>
  )
}

export default Portfolio