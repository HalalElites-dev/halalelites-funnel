"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function BookingSection() {
  const benefits = [
    "Get a personalized 7-day launch plan",
    "Map how to shift customers from apps → your site",
    "Know exactly what to expect — timeline, deliverables, next steps",
  ]

  return (
    <section id="book" className="section-spacing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Your Free Strategy Call</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let&apos;s discuss how we can help you take back control of your customer relationships and profits.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 sticky top-24">
                <h3 className="text-2xl font-bold mb-6">What You&apos;ll Get:</h3>
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span className="text-base leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">$899 one-time</span> • No retainers • You own the
                    brand — we help you reclaim lost profit.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Right - Calendly Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <Card className="p-2 min-h-[700px] overflow-hidden">
                <iframe
                  src="https://calendly.com/halal-elites/30min"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  className="rounded-lg"
                  title="Book a strategy call"
                />
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
