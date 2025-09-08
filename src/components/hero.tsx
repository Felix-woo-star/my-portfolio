import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-primary/60 flex items-center justify-center mb-8">
          <span className="text-3xl font-bold text-primary-foreground">YS</span>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            안녕하세요, <br />
            <span className="text-primary">성우연</span>입니다
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            열정적인 풀스택 개발자로서 사용자 중심의 웹 애플리케이션을 만들어갑니다
          </p>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Node.js</Badge>
          <Badge variant="secondary">Python</Badge>
          <Badge variant="secondary">AWS</Badge>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild>
            <a href="#projects">
              프로젝트 보기
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              이력서 다운로드
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}