"use client"

import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { NAV_LINKS } from "@/lib/constants"
import Link from "next/link"
import Image from "next/image"
import { scrollToSection } from '@/lib/utils'

export function Footer() {


  const socialLinks = [
    { icon: FaXTwitter, href: "https://twitter.com/halalelites", label: "Twitter" },
    { icon: FaLinkedin, href: "https://linkedin.com/company/halal-elites", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link className="flex items-center mb-4 gap-2 " href="#">

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
            <p className="text-sm text-muted-foreground leading-relaxed">
              Helping Halal restaurants take back control of their profits and customer relationships.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.href}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {link.label}
                </div>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <p className="text-sm text-muted-foreground mb-4">Toledo, OH • Serving Halal restaurants nationwide</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">© 2025 halal-elites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
