"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight, ArrowLeft } from "lucide-react"
import Image from "next/image"
import { scrollToSection } from "@/lib/utils"

export function PortfolioSection() {
    const projects = [
        {
            name: "Influence Café",
            location: "Toledo, OH",
            before: {
                description: "Only social media presence, no website",
                image: "/instagram-profile-on-mobile-phone-for-restaurant.jpg",
            },
            after: {
                features: ["Custom landing page", "SEO Score: 95/100", "Mobile-first design", "Direct ordering ready"],
                url: "https://influencecafe.co",
                desktopImage: "/influencedesktop .webp",
                mobileImage: "/influencemobile.webp",
            },
            metrics: [
                { label: "SEO Score", value: "95/100" },
                { label: "PageSpeed", value: "Fast" },
            ],
            testimonial: "We finally own our brand online — customers can actually find us on Google.",
            author: "Owner, Influence Café",
        },
        {
            name: "Hadramout Authentic Yemeni Cuisine",
            location: "Toledo, OH",
            before: {
                description: "Customers used UberEats/DoorDash only",
                image: "/facebook-page-on-mobile-for-yemeni-restaurant.jpg",
            },
            after: {
                features: ["Branded site with menu", "Google Maps integration", "SEO Score: 92/100", "POS swap-in ready"],
                url: "https://hadramout.netlify.app/",
                desktopImage: "/hadramoutdesktop.webp",
                mobileImage: "/hadramoutmobile.webp",
            },
            metrics: [
                { label: "SEO Score", value: "92/100" },
                { label: "Mobile Ready", value: "Yes" },
            ],
            testimonial: "Clean, professional, and ready for direct ordering.",
            author: "Manager, Hadramout",
        },
    ]

    const [current, setCurrent] = useState(0)

    const next = () => setCurrent((prev) => (prev + 1) % projects.length)
    const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length)

    const project = projects[current]

    return (
        <section id="portfolio" className="section-spacing relative overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-12">
            
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
                    From “No Website” to SEO-Ready Online Presence
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Real halal restaurants that went from offline or delivery-only to a full digital presence.
                </p>
            </div>

            <div className="max-w-6xl mx-auto relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="overflow-hidden relative h-vh lg:h-[600px]">
                            <div className="grid lg:grid-cols-12 gap-0 h-full">
                                {/* LEFT CONTENT */}
                                <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold mb-2">{project.name}</h3>
                                        <p className="text-muted-foreground mb-6">{project.location}</p>

                                        <Badge variant="outline" className="mb-3 text-xs">
                                            Before
                                        </Badge>
                                        <p className="text-sm text-muted-foreground mb-4">{project.before.description}</p>

                                        <Badge className="mb-3 bg-brand-primary text-xs">After</Badge>
                                        <ul className="space-y-2 mb-6">
                                            {project.after.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-brand-primary mt-1.5" />
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            {project.metrics.map((metric, i) => (
                                                <div key={i}>
                                                    <div className="text-2xl font-bold text-brand-primary">{metric.value}</div>
                                                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border-l-4 border-brand-primary pl-4 py-2">
                                            <p className="text-sm italic mb-2">&quot;{project.testimonial}&quot;</p>
                                            <p className="text-xs font-semibold text-muted-foreground">— {project.author}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT IMAGES */}
                                 <div className="lg:col-span-7 relative h-[550px]  lg:w-full flex items-center justify-center">
                                    <div className="relative w-full h-full ">
                                        <div className="absolute top-0 left-0 right-1 lg:right-5 h-[65%] rounded-lg overflow-hidden border border-border  shadow-2xl">
                                            <Image
                                                src={project.after.desktopImage}
                                                alt={`${project.name} desktop`}
                                                fill
                                                className="lg:object-cover object-contain"
                                            />
                                        </div>
                                        <div className="absolute bottom-0 right-8 w-32 h-64 rounded-lg overflow-hidden border-2 border-background shadow-2xl">
                                            <Image
                                                src={project.after.mobileImage}
                                                alt={`${project.name} mobile`}
                                                fill
                                                className="object-cover"
                                                
                                            />
                                        </div>
                                    </div>

                                    {project.after.url !== "#" && (
                                        <div className="absolute bottom-4 left-4">
                                            <a
                                                href={project.after.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-sm bg-background/90 backdrop-blur px-4 py-2 rounded-full border border-border hover:bg-background transition-colors"
                                            >
                                                View Live Site <ExternalLink className="h-3 w-3" />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </AnimatePresence>

                {/* NAVIGATION CONTROLS */}
                <div className="flex justify-center items-center gap-6 mt-8">
                    <Button variant="outline" size="icon" onClick={prev}>
                        <ArrowLeft className="h-4 w-4" />
                    </Button>

                    <div className="flex gap-2">
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-2.5 w-2.5 rounded-full transition-all ${i === current ? "bg-brand-primary w-6" : "bg-muted-foreground/40"
                                    }`}
                            />
                        ))}
                    </div>

                    <Button variant="outline" size="icon" onClick={next}>
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
                {/* cta */}
                  <div className="flex justify-center mt-10">
                     <Button
                               onClick={() => scrollToSection('process')}
                                size="lg"
                                className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full px-8 relative cursor-pointer just"
                              >
                                I want this for my restaurant
                              </Button>
                  </div>
             
            </div>
        </section>
    )
}
