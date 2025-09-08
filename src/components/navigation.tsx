"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:your.email@example.com", icon: Mail, label: "Email" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link 
            href="/" 
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.href}
                  variant="ghost"
                  size="icon"
                  asChild
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex items-center space-x-2 pt-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.href}
                      variant="ghost"
                      size="icon"
                      asChild
                    >
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <Icon className="h-4 w-4" />
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}