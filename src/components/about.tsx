import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

export default function About() {
  const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    "Backend": ["Node.js", "Python", "Express", "FastAPI", "PostgreSQL"],
    "DevOps": ["Docker", "AWS", "Vercel", "GitHub Actions", "Linux"],
    "Tools": ["Git", "VSCode", "Figma", "Postman", "Jest"]
  };

  const highlights = [
    {
      icon: Code,
      title: "개발 철학",
      description: "클린 코드와 사용자 경험을 중시하며, 지속적인 학습을 통해 최신 기술을 습득합니다."
    },
    {
      icon: Palette,
      title: "디자인 감각",
      description: "개발자이지만 UI/UX에 대한 이해도가 높아 아름답고 직관적인 인터페이스를 만듭니다."
    },
    {
      icon: Zap,
      title: "빠른 학습",
      description: "새로운 기술과 도구에 대한 호기심이 많고, 빠르게 적응하여 프로젝트에 적용할 수 있습니다."
    },
    {
      icon: Users,
      title: "협업 능력",
      description: "팀원들과의 원활한 소통을 통해 프로젝트를 성공적으로 이끄는 협업 능력을 갖추고 있습니다."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            끊임없이 성장하는 개발자, 성우연입니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Profile Description */}
          <Card>
            <CardHeader>
              <CardTitle>개발자로서의 여정</CardTitle>
              <CardDescription>
                개발에 대한 열정과 함께 성장해온 이야기
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                안녕하세요! 사용자 중심의 웹 애플리케이션을 개발하는 것에 열정을 가진 
                풀스택 개발자 성우연입니다. 
              </p>
              <p className="text-muted-foreground">
                React와 Next.js를 중심으로 한 프론트엔드 개발부터 Node.js와 Python을 
                활용한 백엔드 개발까지, 전체적인 웹 개발 생태계를 아우르는 경험을 
                쌓아왔습니다.
              </p>
              <p className="text-muted-foreground">
                단순히 코드를 작성하는 것을 넘어서, 사용자의 문제를 해결하고 
                가치를 창출하는 서비스를 만드는 것이 저의 목표입니다.
              </p>
            </CardContent>
          </Card>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <Card key={highlight.title} className="h-full">
                  <CardHeader className="pb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Skills Section */}
        <Card>
          <CardHeader>
            <CardTitle>기술 스택</CardTitle>
            <CardDescription>
              현재 사용하고 있는 주요 기술들과 도구들입니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="space-y-3">
                  <h4 className="font-semibold text-foreground">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}