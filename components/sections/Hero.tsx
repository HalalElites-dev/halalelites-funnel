"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, TrendingDown, ArrowRight } from "lucide-react"
import HolographicBackground from "@/lib/bgAnimated"

// Animated counter component
function AnimatedCounter({ end, duration = 2000, prefix = "", suffix = "" }: { 
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | undefined
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span className="font-bold text-6xl md:text-8xl">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden lg:mt-10"
    >
      {/* Background */}
      <HolographicBackground variant="three" />
     

      {/* Main Content - ABOVE THE FOLD */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* THE HOOK - One Power Statement */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight">
              Stop Losing{" "}
              <span className="text-brand-primary">
                30%
              </span>{" "}
              to Delivery Apps
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Custom landing pages that redirect customers from UberEats to your own ordering system — in 7 days.
            </p>
          </div>

          {/* VISUAL FOCAL POINT - Animated Loss Visualization */}
          <div className="py-12">
            <Card className="relative overflow-hidden border-2 border-destructive/30 bg-destructive/5 p-12 max-w-2xl mx-auto">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-destructive/0 via-destructive/10 to-destructive/0 animate-pulse" />
              
              <div className="relative space-y-6">
                <div className="text-red-400 text-sm font-semibold tracking-wider uppercase">
                  Every Month You&apos;re Losing
                </div>
                
                <div className="space-y-2">
                  <AnimatedCounter end={3000} prefix="$" />
                  <div className="text-muted-foreground text-lg">
                    per $10,000 in sales
                  </div>
                </div>

                <div className="pt-4 border-t border-red-500/20">
                  <p className="text-sm text-muted-foreground">
                    That&apos;s <span className="text-white font-semibold">$36,000/year</span> gone to DoorDash & UberEats commissions
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* PRIMARY CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg px-10 py-6 rounded-full bg-brand-primary shadow-2xl ">
              Book Your Free Strategy Call
            </Button>
          </div>

          {/* Quick Trust Elements */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>7-day delivery</span>
            </div>
            <div className="hidden sm:block text-muted-foreground/40">•</div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Performance guarantee</span>
            </div>
            <div className="hidden sm:block text-muted-foreground/40">•</div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>4 spots/month</span>
            </div>
          </div>
        </div>
      </div>

    
    </section>
  )
}

// SECOND SECTION - This is where your detailed copy goes (add this after hero)
export function DetailedValueSection() {
  const features = [
    "Unlimited revisions for early clients",
    "24/7 support",
    "No upsells or hidden fees",
  ]

  const integrations = ["Toast", "Square", "Cake", "Clover"]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* The Problem (detailed) */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Here&apos;s How We Help Halal Restaurants Win
            </h2>
            <div className="text-lg text-muted-foreground space-y-4 text-left md:text-center">
              <p>
                We help <strong>Halal restaurants</strong> stop losing up to{" "}
                <strong>30% in commissions</strong> by driving customers from third-party apps to their{" "}
                <strong>existing low-fee ordering system</strong>.
              </p>
              <p>
                You get a <strong>custom landing page built in just 7 days</strong> that does one thing perfectly: converts your repeat customers to order direct.
              </p>
            </div>
          </div>

          {/* Pain Visualization */}
          <Card className="p-8 border-2 border-destructive/20 bg-destructive/5">
            <div className="flex items-start gap-6">
              <TrendingDown className="h-12 w-12 text-destructive flex-shrink-0 mt-1" />
              <div className="space-y-3">
                <p className="text-xl font-semibold">
                  Every $10,000 in DoorDash or UberEats sales = $3,000 gone in commissions.
                </p>
                <p className="text-muted-foreground">
                  Our landing pages help you redirect repeat customers to your lower-fee systems — the first step
                  toward $0 commissions.
                </p>
                <p className="font-semibold text-destructive">
                  If it doesn&apos;t perform, we&apos;ll rebuild it free.
                </p>
              </div>
            </div>
          </Card>

          {/* Pricing */}
          <Card className="p-10 bg-gradient-to-br from-orange-950/20 to-background border-orange-500/20">
            <div className="text-center space-y-6">
              <div>
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    $899
                  </span>
                  <span className="text-2xl text-muted-foreground line-through">$1,199</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">One-time payment, no subscriptions</p>
              </div>

              <div className="space-y-3 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <Badge variant="secondary" className="text-sm font-semibold px-4 py-2">
                ⚡ Only 4 spots available each month
              </Badge>

              <div className="pt-6">
                <Button size="lg" className="text-lg px-10 py-6 rounded-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 w-full sm:w-auto">
                  Book Your Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Integrations */}
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Integrates seamlessly with:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {integrations.map((integration) => (
                <Badge key={integration} variant="outline" className="text-sm px-4 py-2">
                  {integration}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}