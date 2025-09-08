import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  date: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "React와 Node.js로 구축한 풀스택 쇼핑몰 애플리케이션",
      longDescription: "사용자 친화적인 인터페이스와 관리자 대시보드를 포함한 완전한 이커머스 솔루션입니다. 결제 시스템, 재고 관리, 주문 추적 등의 기능을 구현했습니다.",
      tech: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://example-store.vercel.app",
      githubUrl: "https://github.com/username/ecommerce-project",
      date: "2024.03"
    },
    {
      title: "Task Management App",
      description: "팀 협업을 위한 프로젝트 관리 도구",
      longDescription: "실시간 협업이 가능한 칸반 보드 스타일의 작업 관리 애플리케이션입니다. 드래그 앤 드롭, 실시간 알림, 팀원 초대 기능 등을 구현했습니다.",
      tech: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "AWS"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/username/task-manager",
      date: "2024.01"
    },
    {
      title: "Weather Dashboard",
      description: "날씨 API를 활용한 반응형 대시보드",
      longDescription: "OpenWeatherMap API를 사용해 전 세계 도시들의 실시간 날씨 정보와 5일 예보를 제공하는 대시보드입니다. 위치 기반 서비스와 즐겨찾기 기능을 포함합니다.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "REST API"],
      liveUrl: "https://weather-dashboard-demo.netlify.app",
      githubUrl: "https://github.com/username/weather-dashboard",
      date: "2023.11"
    },
    {
      title: "Personal Blog",
      description: "Markdown 기반의 개발 블로그",
      longDescription: "개발 경험과 학습 내용을 공유하는 개인 블로그입니다. MDX 지원, 코드 하이라이팅, 태그 시스템, 검색 기능 등을 구현했습니다.",
      tech: ["Next.js", "MDX", "Tailwind CSS", "Prisma", "Vercel"],
      liveUrl: "https://myblog.dev",
      githubUrl: "https://github.com/username/personal-blog",
      date: "2023.09"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            최근 진행한 주요 프로젝트들을 소개합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="h-full flex flex-col">
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/5 rounded-t-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-primary">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Project Preview</p>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col">
                <p className="text-sm text-muted-foreground mb-4">
                  {project.longDescription}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  {project.liveUrl && (
                    <Button variant="default" size="sm" asChild className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub에서 더 많은 프로젝트 보기
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}