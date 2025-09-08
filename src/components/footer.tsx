"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:sungwoo.youn@example.com", icon: Mail, label: "Email" },
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">성우연</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              사용자 중심의 웹 애플리케이션을 만드는 
              풀스택 개발자입니다.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.href}
                    variant="ghost"
                    size="icon"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">주요 기술</h4>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <span>React & Next.js</span>
              <span>TypeScript</span>
              <span>Node.js & Python</span>
              <span>AWS & Docker</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">연락처</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>서울, 대한민국</p>
              <a 
                href="mailto:sungwoo.youn@example.com"
                className="hover:text-foreground transition-colors"
              >
                sungwoo.youn@example.com
              </a>
              <p>원격 근무 가능</p>
            </div>
            
            {/* Scroll to Top Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="w-full"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              맨 위로
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© 2024 성우연. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using Next.js & shadcn/ui</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-border">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              이 포트폴리오는 Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui로 제작되었습니다.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              최신 웹 기술과 현대적인 개발 방법론을 적용한 개인 프로젝트입니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}