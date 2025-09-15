import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {HERO_CTA_TEXT } from '@/lib/constants'
const CTASection = () => {
  return (
    <section id='cta' className='py-20 px-4 relative overflow-hidden '>
      {/* holographic background */}
      <div className='max-w-7xl mx-auto text-center relative z-10'>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute bottom-20 left-96 w-[500px] h-[500px] rounded-full blur-3xl animate-holographic holographic-gradient opacity-20"          >

          </div>
        </div>
        <div className='glass-effect rounded-lg p-12 relative overflow-hidden'>
          <div className='relative z-10'>
            <div className='flex items-center justify-center gap-2 mb-6'>
              <span className="text-2xl  font-bold font-mono">Ready to Deploy?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to launch your next project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto font-mono">
              Join the elite community of Muslim developers and businesses building the future, one halal line of code at a time.
            </p>
            <Button asChild size={'xl'} className='bg-brand-primary hover:bg-brand-primary/90 px-8 py-4 rounded-md font-mono transition-all duration-300 text-lg'>
    <Link className='inline-flex items-center justify-center' // Ensure proper display
        target="_blank"
        rel="noopener noreferrer"
        href={"https://calendly.com/halal-elites/30min"}>
        {">"} {HERO_CTA_TEXT}
    </Link>
</Button>

          </div>
        </div>
      </div>

    </section>
  )
}

export default CTASection