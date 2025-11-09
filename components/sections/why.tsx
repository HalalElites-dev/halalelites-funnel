"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Zap, Rocket } from "lucide-react"
import Image from "next/image"
import HolographicBackground from "@/lib/bgAnimated"
import { scrollToSection } from "@/lib/utils"
export function WhyItMattersSection() {
  const painPoints = [
    {
      title: "Commissions eat margins",
      description: "$10k/mo orders → up to $3k lost to apps.",
      stat: "30%",
      statLabel: "Lost to fees",
      color: "destructive",
    },
    {
      title: "They own your customers",
      description: "No emails, no phone numbers, no repeat-order leverage.",
      stat: "0",
      statLabel: "Customer data",
      color: "brand-primary",
    },
    {
      title: "No brand control",
      description: "Your restaurant becomes a thumbnail in their feed.",
      stat: "100%",
      statLabel: "Their platform",
      color: "foreground",
    },
  ]

  return (

    <section id="why" className="section-spacing relative overflow-hidden">

      <div className="container mx-auto px-4">
        <HolographicBackground variant="two" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why This Matters</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The delivery app model is broken for restaurant owners.
          </p>
        </motion.div>

        {/* Timeline/Story Flow */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-destructive via-brand-primary to-foreground opacity-20 transform -translate-x-1/2" />

          {/* Pain Point 1 - Left aligned with floating image right */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mb-32 lg:mb-40"
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative z-10">

                <h3 className="text-4xl md:text-5xl font-bold mb-6">{painPoints[0].title}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Every $10,000 in DoorDash or UberEats sales means up to $3,000 gone in commissions. That&apos;s money that
                  should be reinvested in your business, staff, and growth.
                </p>
                <div className="inline-block bg-destructive/10 rounded-2xl p-8 border-2 border-destructive/20">
                  <div className="text-6xl font-bold text-destructive mb-2">{painPoints[0].stat}</div>
                  <div className="text-sm font-semibold text-destructive">{painPoints[0].statLabel}</div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 lg:mt-0"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 lg:transform lg:translate-y-8">
                  <Image
                    src="/comission.webp"
                    alt="Restaurant owner reviewing delivery app commissions"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Pain Point 2 - Right aligned with floating image left */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mb-32 lg:mb-40"
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative z-10  lg:order-2">

                <h3 className="text-4xl md:text-5xl font-bold mb-6">{painPoints[1].title}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  No emails, no phone numbers, no repeat-order leverage. You&lsquo;re building their customer base, not yours.
                  When they leave the platform, you lose them forever.
                </p>
                <div className="inline-block bg-brand-primary/10 rounded-2xl p-8 border-2 border-brand-primary/20">
                  <div className="text-6xl font-bold text-brand-primary mb-2">{painPoints[1].stat}</div>
                  <div className="text-sm font-semibold text-brand-primary">{painPoints[1].statLabel}</div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 lg:mt-0 lg:order-1"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 lg:transform lg:-translate-y-8">
                  <Image
                    src="/customer-data.webp"
                    alt="Delivery app customer data showing no restaurant access"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Pain Point 3 - Left aligned with floating image right */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mb-32"
          >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative z-10">

                <h3 className="text-4xl md:text-5xl font-bold mb-6">{painPoints[2].title}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Your restaurant becomes a thumbnail in their feed. You lose the ability to tell your story, showcase your
                  values, and build lasting relationships with your community.
                </p>
                <div className="inline-block bg-muted rounded-2xl p-8 border-2 border-muted-foreground/20">
                  <div className="text-6xl font-bold text-foreground mb-2">{painPoints[2].stat}</div>
                  <div className="text-sm font-semibold text-muted-foreground">{painPoints[2].statLabel}</div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 lg:mt-0"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 lg:transform lg:translate-y-8">
                  <Image
                    src="/brand.webp"
                    alt="Restaurant lost in delivery app grid"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Why Halal-Elites - Compact Grid Version */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Halal-Elites</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
            We&apos;re not just another web agency — we build for the Halal market.
          </p>

          {/* 3 Compact Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border border-border bg-card hover:shadow-lg transition-all duration-300">
              <Target className="h-10 w-10 text-brand-primary mx-auto mb-5" />
              <h4 className="text-xl font-semibold mb-3">We Know the Market</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We understand what drives Halal customers — family trust, faith, and repeat orders.
              </p>
            </Card>

            <Card className="p-8 border border-border bg-card hover:shadow-lg transition-all duration-300">
              <Zap className="h-10 w-10 text-brand-primary mx-auto mb-5" />
              <h4 className="text-xl font-semibold mb-3">Transition, Not Disruption</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Keep DoorDash & UberEats while gradually shifting loyal customers to your site — risk-free.
              </p>
            </Card>

            <Card className="p-8 border border-border bg-card hover:shadow-lg transition-all duration-300">
              <Rocket className="h-10 w-10 text-brand-primary mx-auto mb-5" />
              <h4 className="text-xl font-semibold mb-3">Halal Profit Accelerator</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Soon: an integrated loyalty and marketing system to make 0% commission the new norm.
              </p>
            </Card>
          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            
              <Button
               onClick={() => scrollToSection('process')}
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full px-8 relative cursor-pointer"
              >
                See How It Works ↓
              </Button>
          </motion.div>
        </motion.section>

      </div>
    </section>
  )
}