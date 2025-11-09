"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Smartphone, Gift, TrendingUp, Settings } from "lucide-react"

export function AcceleratorSection() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Custom Commission-Free Ordering System",
      description: "Only pay card processing fees. Keep 100% of your profits.",
    },
    {
      icon: Smartphone,
      title: "Restaurant Mobile App",
      description: "Loyalty, push notifications, and online menu in your customers' pockets.",
    },
    {
      icon: Gift,
      title: "Rewards & Loyalty Engine",
      description: "Keep customers returning directly to you, not third-party apps.",
    },
    {
      icon: TrendingUp,
      title: "Marketing & Consulting",
      description: "Strategies to grow repeat business and maximize customer lifetime value.",
    },
    {
      icon: Settings,
      title: "Optional POS Integration",
      description: "For restaurants wanting full in-store sync and unified operations.",
    },
  ]

  return (
    <section id="accelerator" className="section-spacing bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 text-sm font-semibold">
            Coming Soon
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Halal Profit Accelerator</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The digital infrastructure that puts profits back in your pocket.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="p-8 text-center bg-card/60 backdrop-blur">
            <p className="text-lg leading-relaxed text-pretty">
              We&apos;re building the all-in-one growth system for Halal restaurants that want full control — from online
              orders to customer loyalty.
            </p>
          </Card>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
  {features.map((feature, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="glass-effect relative rounded-2xl p-8 transition-all duration-500 group  hover:border-brand-primary overflow-hidden h-full flex flex-col items-center text-center opacity-80 hover:opacity-100">
        {/* ICON */}
        <div className="relative z-10 mb-6">
          <div className="h-16 w-16 mx-auto relative">
            <div className="absolute inset-0 bg-foreground rounded-xl opacity-5" />
            <div className="relative z-10 flex items-center justify-center w-full h-full">
              <feature.icon className="h-10 w-10 text-brand-primary animate-float" />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 space-y-3 grow flex flex-col justify-start">
          <h3 className="text-xl font-bold">{feature.title}</h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {feature.description}
          </p>
        </div>
      </Card>
    </motion.div>
  ))}
</div>


        {/* Note & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <Card className="p-6 max-w-3xl mx-auto bg-brand-primary/5 border-brand-primary/20">
            <p className="text-base font-medium">
              Launching soon. Early clients from our $899 package get first access and discounted pricing.
            </p>
          </Card>

          <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
            Join the Early-Access List →
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
