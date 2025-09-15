'use client';
import {  useState } from 'react'
import { Button } from '../ui/button'
import { Navigation } from './Navigation'
import { ThemeToggle } from '../ThemeToggle'
import { Menu, X } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openMobileMenu = () => setIsMobileMenuOpen(true);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            {/* Main Header - glass effect is conditionally applied */}
            <nav className={`fixed top-0 w-full z-40 ${!isMobileMenuOpen ? 'glass-effect ' : ''}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* Left section: Logo and brand */}
                        <Link href="/" className="flex items-center space-x-2">
                            <Image 
                                suppressHydrationWarning
                                src="/LogoW.png"
                                alt="Logo"
                                width={160}
                                height={32}
                                className="block dark:hidden"
                            />
                            <Image 
                                suppressHydrationWarning
                                src="/Logo.png"
                                alt="Logo"
                                width={160}
                                height={32}
                                className="hidden dark:block"
                            />
                        </Link>

                        {/* Desktop Navigation - Right section */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <Navigation />
                            <Button asChild className="bg-brand-primary hover:bg-brand-primary/90 px-4 py-2 rounded-md text-sm font-mono transition-all">
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://calendly.com/halal-elites/30min"
                                >
                                    {">"} deploy_with_us
                                </Link>
                            </Button>
                            <ThemeToggle />
                        </div>

                        {/* Mobile Navigation - Right section */}
                        <div className="md:flex flex items-center space-x-2 lg:hidden">
                            <ThemeToggle/>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={openMobileMenu}
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        </div>

                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Full screen with proper glass effect */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 md:flex">
                    {/* Full screen glass backdrop */}
                    <div className="absolute inset-0  backdrop-blur-md" />
                    
                    {/* Menu content */}
                    <div className="relative w-full  animate-in slide-in-from-top duration-300">
                        {/* Header with logo and close button */}
                        <div className="flex items-center justify-between px-6 py-4 ">
                            <div className="flex items-center space-x-2">
                                <Image 
                                    suppressHydrationWarning
                                    src="/LogoW.png"
                                    alt="Logo"
                                    width={160}
                                    height={32}
                                    className="block dark:hidden"
                                />
                                <Image 
                                    suppressHydrationWarning
                                    src="/Logo.png"
                                    alt="Logo"
                                    width={160}
                                    height={32}
                                    className="hidden dark:block"
                                />
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={closeMobileMenu}
                                className="rounded-full hover:bg-white/10"
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

                        {/* Navigation Content */}
                        <div className="px-6 py-8 glass-effect">
                            <div onClick={closeMobileMenu}>
                                <Navigation />
                            </div>
                            
                            {/* Mobile CTA Button
                            <div className="mt-8 pt-6 border-t border-border/20">
                                <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 px-4 py-3 rounded-md text-sm font-mono transition-all">
                                    <Link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://calendly.com/halal-elites/30min"
                                    >
                                        {">"} deploy_with_us
                                    </Link>
                                </Button>
                            </div> */}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}