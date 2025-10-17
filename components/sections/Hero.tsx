import React from 'react'
import { HERO_HEADING, HERO_SUBTEXT, HERO_CTA_TEXT, HERO_2NDARY_CTA_TEXT } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import Link from "next/link"
import HolographicBackground from '@/lib/bgAnimated'
const Hero = () => {
    return (
        <section id='home' className='min-h-screen flex items-center justify-center bg-background pt-16 px-4 relative overflow-hidden'>
            {/* Holographic background */}
            <HolographicBackground variant='three' />

            <div className='max-w-5xl mx-auto text-center relative z-10'>
                <div className='py-36 '>
                    <h3 className="inline-flex items-center gap-2 glass-effect rounded-full px-1 py-2 md:px-4 md:py-2 text-xs md:text-sm font-mono text-brand-primary">
                        Custom Coded Solutions
                    </h3>
                    <h1 className='text-4xl md:text-5xl lg:text-8xl font-bold tracking-tight mb-6 text-foreground leading-tight'>{HERO_HEADING.split('\n').map((line, i) => (
                        <span key={i}>
                            {line}
                            <br />
                        </span>
                    ))}</h1>
                    <p className='md:text-xl mb-8 max-w-2xl text-muted-foreground leading-relaxed font-mono'>{HERO_SUBTEXT}</p>
                    <div className=' flex flex-col lg:flex-row gap-4 justify-center items-center'>
                        <Button asChild size={'xl'} className='bg-brand-primary hover:bg-brand-primary/90 px-8 py-4 rounded-md font-mono transition-all duration-300 text-lg'>
                            <Link className='inline-flex items-center justify-center' // Ensure proper display
                                target="_blank"
                                rel="noopener noreferrer"
                                href={"https://calendly.com/halal-elites/30min"}>
                                {">"} {HERO_CTA_TEXT}
                            </Link>
                        </Button>

                        <Button asChild variant='outline' size={'xl'} className='hover:text-brand-primary text-secondary-foreground font-mono font-thin duration-300 animate-holographic hover:border-brand-primary !text-lg'>
                            <Link className='inline-flex items-center justify-center' href={"/about"}>
                                {HERO_2NDARY_CTA_TEXT}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero