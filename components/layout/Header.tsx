"use client";

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
// import { ThemeToggle } from "@/components/ThemeToggle"
import Image from "next/image"
import { NAV_LINKS } from "@/lib/constants"
import Link from "next/link"
import { scrollToSection } from '@/lib/utils'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation - Floating Pill */}
      <nav className="navbar-sticky glass-effect hidden md:block">
        <div className="nav-pill glass-effect">
          {/* Logo */}
          <Link className="flex items-center gap-2" href="#">
            <Image
              suppressHydrationWarning
              src="/LogoW.png"
              alt="Logo (light)"
              width={160}
              height={32}
              className="block dark:hidden greyscale:hidden"
            />
            <Image
              suppressHydrationWarning
              src="/Logo.png"
              alt="Logo (dark)"
              width={160}
              height={32}
              className="hidden dark:block greyscale:hidden"
            />
          </Link>

          {/* Smooth scroll links */}
          <div className="flex gap-6 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
              >
                {link.label}
              </div>
            ))}
          </div>

          {/* CTA & Theme Toggle */}
          <div className="flex items-center gap-3">
            {/* <ThemeToggle /> */}

            <Button
              onClick={() => scrollToSection('pricing')}
              className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full px-6 cursor-pointer"
            >
              Book Free Call
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] md:hidden bg-card/95 backdrop-blur-lg border-b border-border translate-z-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link className="flex items-center gap-2" href="#">

          <Image
            suppressHydrationWarning
            src="/LogoW.png"
            alt="Logo (light)"
            width={160}
            height={32}
            className="block dark:hidden greyscale:hidden"
          />
          <Image
            suppressHydrationWarning
            src="/Logo.png"
            alt="Logo (dark)"
            width={160}
            height={32}
            className="hidden dark:block greyscale:hidden"
          />

        </Link>
        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex items-center gap-2">
          {/* <ThemeToggle /> */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="bg-card border-b border-border shadow-lg">
            <div className="flex flex-col p-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.href}
                  onClick={() => {
                    scrollToSection(link.href.substring(1));
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-foreground/70 hover:text-foreground transition-colors py-2 text-center text-xl  cursor-pointer"
                >
                  {link.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}