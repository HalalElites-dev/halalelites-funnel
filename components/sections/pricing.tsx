'use client';
import React from 'react'
import { Card } from '../ui/card'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '../ui/button'
import { scrollToSection } from '@/lib/utils'

 export const PricingSection = () => {
    const features = [
    "Unlimited revisions for early clients",
    "24/7 support",
    "No upsells or hidden fees",
  ]
  return (

    <section id="pricing" className="py-10 bg-background">
      <Card className="relative mx-auto max-w-2xl p-8 sm:p-10 text-center rounded-2xl bg-background glass-effect border border-brand-primary shadow-xl">
      {/* --- TITLE --- */}
      <h3 className="text-2xl font-semibold mb-2">One-time investment</h3>

      {/* --- PRICE SECTION --- */}
      <div className="flex flex-col items-center justify-center gap-1 mb-6">
        <div className="flex items-baseline justify-center gap-3 flex-wrap">
          <span className="text-2xl sm:text-3xl text-muted-foreground line-through">
            $1,199
          </span>
          <span className="text-5xl sm:text-6xl font-bold text-brand-primary">
            $899
          </span>
        </div>
        <p className="text-sm text-muted-foreground">Lifetime value, no subscriptions</p>
      </div>

      {/* --- FEATURE LIST --- */}
      <div className="mt-4 space-y-3 text-left">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center justify-start md:justify-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-brand-primary flex-shrink-0" />
            <span className="text-base leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>

      {/* --- CTA BUTTON --- */}
       <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => scrollToSection('book')}
              size="lg" className="text-sm px-10 py-6 rounded-full bg-brand-primary shadow-2xl cursor-pointer ">
              Book Free Call
            </Button>
          </div>

    </Card>
        </section>
  )
}

 