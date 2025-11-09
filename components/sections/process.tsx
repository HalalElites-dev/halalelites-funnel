"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Phone, FileText, Code, Rocket } from "lucide-react"
import Image from "next/image"

export function ProcessSection() {
  const steps = [
    {
      step: "Pre-Project",
      title: "Discovery Call",
      description:
        "Your free 30-45 minute strategy call to review your brand, menu, and POS system. We'll outline your 7-day launch plan and, if you're ready, confirm your spot and begin the project.",
      icon: Phone,
      days: "Before we start",
      image: "/call.webp",
    },
    {
      step: "Day 1",
      title: "Onboarding & Setup",
      description: "We collect your assets — logo, images, menu links, domain access — and finalize design direction.",
      icon: FileText,
      days: "Day 1",
      image: "/upload media.webp",
    },
    {
      step: "Days 2-5",
      title: "Build & Integrate",
      description:
        "We design and develop your custom landing page, integrate your POS or temporary ordering links, and optimize it for speed and conversions.",
      icon: Code,
      days: "Days 2-5",
      image: "/build.webp",
    },
    {
      step: "Days 6-7",
      title: "Launch & Guide",
      description:
        "Your new site goes live. We run final tests, set up performance tracking, and share a short marketing playbook to help you drive direct orders over time.",
      icon: Rocket,
      days: "Days 6-7",
      image: "/launch.webp",
    },
  ]

  return (
    <section id="process" className="section-spacing bg-secondary/30">

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Launch in 7 Days</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven process that gets your landing page live fast, without compromising on quality.
          </p>
        </motion.div>

        {/* Vertical Offset Timeline with Alternating Image Placement */}
        <div className="max-w-7xl mx-auto space-y-16">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Alternating Layout */}
              <div
                className={`grid lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Content Side (40%) */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:col-start-8" : ""}`}>
                  <Card className="p-8 hover:shadow-xl transition-shadow relative">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center text-xl font-bold shadow-lg">
                      {index + 1}
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-7 w-7 text-brand-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-primary">{step.days}</p>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </Card>
                </div>

                {/* Image Side (60%) */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border border-border shadow-xl">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Connecting Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-8 w-0.5 h-8 bg-brand-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
