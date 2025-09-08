import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sungwoo.youn@example.com",
      href: "mailto:sungwoo.youn@example.com",
      description: "언제든 편하게 연락해주세요"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+82 10-1234-5678",
      href: "tel:+821012345678",
      description: "평일 오전 9시 ~ 오후 6시"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "서울, 대한민국",
      href: "#",
      description: "원격 근무 가능"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@username",
      href: "https://github.com/username",
      description: "프로젝트와 오픈소스 기여"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "성우연",
      href: "https://linkedin.com/in/username",
      description: "전문적인 네트워킹"
    },
    {
      icon: MessageCircle,
      label: "Blog",
      value: "개발 블로그",
      href: "https://blog.example.com",
      description: "개발 경험과 학습 공유"
    }
  ];

  const interests = [
    "웹 개발", "오픈소스", "UI/UX", "클린 코드", "팀 협업", "지속적 학습"
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            새로운 기회와 협업을 기다리고 있습니다. 언제든 연락해주세요!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">연락처</h3>
            {contactInfo.map((contact) => {
              const Icon = contact.icon;
              return (
                <Card key={contact.label}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{contact.label}</h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          {contact.description}
                        </p>
                        <a
                          href={contact.href}
                          className="text-primary hover:underline"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">소셜 미디어</h3>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Card key={social.label}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">{social.label}</h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          {social.description}
                        </p>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {social.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* About & Interests */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">관심 분야</h3>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">현재 관심사</CardTitle>
                <CardDescription>
                  현재 집중하고 있는 기술과 분야들입니다
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge key={interest} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">협업 제안</CardTitle>
                <CardDescription>
                  이런 프로젝트에 참여하고 싶어요
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 사용자 경험을 중시하는 웹 애플리케이션</li>
                  <li>• 오픈소스 프로젝트 기여</li>
                  <li>• 스타트업 초기 멤버 참여</li>
                  <li>• 기술적 도전이 있는 프로젝트</li>
                </ul>
                
                <div className="pt-4">
                  <Button className="w-full" asChild>
                    <a href="mailto:sungwoo.youn@example.com">
                      <Mail className="h-4 w-4 mr-2" />
                      이메일 보내기
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                함께 일하고 싶으시다면
              </h3>
              <p className="text-muted-foreground mb-6">
                새로운 기회에 열려있습니다. 프로젝트 협업, 정규직 기회, 
                또는 단순한 기술 이야기까지 모든 연락을 환영합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="mailto:sungwoo.youn@example.com">
                    연락하기
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    이력서 보기
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}