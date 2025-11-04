import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
  ArrowDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedSection } from "@/components/animated-section";
import { FloatingElement } from "@/components/floating-element";
import { projects, skills } from "@/lib/utils";

export default function Portfolio() {

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b z-50 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Muhammed AL-Lami
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-6">
                <Link
                  href="#about"
                  className="hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  className="hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className="hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  Contact
                </Link>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      <section className="pt-20 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto text-center">
          <AnimatedSection>
            <FloatingElement delay={200}>
              <Image
                src="me.jpg"
                alt="Muhammed AL-Lami"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-6 border-4 border-primary/20 shadow-2xl hover:shadow-primary/25 transition-all duration-500 hover:scale-105"
                priority
              />
            </FloatingElement>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
                Muhammed AL-Lami
              </h1>
              <div className="relative">
                <p
                  className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in-up"
                  style={{ animationDelay: "400ms" }}
                >
                  Front-End Developer
                </p>
                <div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full animate-scale-in"
                  style={{ animationDelay: "600ms" }}
                ></div>
              </div>
              <p
                className="text-lg max-w-2xl mx-auto mb-8 text-muted-foreground animate-fade-in-up"
                style={{ animationDelay: "800ms" }}
              >
                Passionate about creating beautiful, fast, and user-friendly web
                experiences. Specialized in React.js, Next.js, and modern web
                technologies.
              </p>
              <div
                className="flex justify-center gap-10 animate-fade-in-up"
                style={{ animationDelay: "1000ms" }}
              >
                <Button
                  asChild
                  className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Link href="#contact">
                    <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Get In Touch
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-transparent"
                >
                  <Link href="#projects">
                    <Code className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    View Projects
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <div className="flex item-center justify-center transform -translate-x-1/2 animate-bounce pt-3">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="py-16 px-4 bg-gradient-to-br from-muted/30 to-muted/60 relative"
      >
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              About Me
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={200}>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  I'm a passionate front-end developer with expertise in
                  creating modern, responsive web applications. I love turning
                  complex problems into simple, beautiful designs that provide
                  excellent user experiences.
                </p>
                <p className="text-lg leading-relaxed">
                  With a strong foundation in React.js, Next.js, and TypeScript,
                  I focus on building fast, scalable, and maintainable
                  applications. I'm always eager to learn new technologies and
                  stay up-to-date with the latest industry trends.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: Code, text: "Clean Code" },
                    // { icon: Palette, text: "UI/UX Design" },
                    { icon: Smartphone, text: "Responsive Design" },
                    { icon: Globe, text: "Web Performance" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center group hover:scale-105 transition-all duration-300"
                    >
                      <div className="mr-3 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Link
                  href={
                    "https://docs.google.com/document/d/1TgoWCXOiG8pYWL5jhwqWTQdQ5OPV8vk9eXtDZe_dINg/edit?usp=sharing"
                  }
                >
                  <Image
                    src="cv.png?height=400&width=400"
                    alt="Developer workspace"
                    width={400}
                    height={400}
                    className="relative rounded-xl shadow-2xl group-hover:scale-105 transition-all duration-500"
                  />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-sm py-3 px-6 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section
        id="projects"
        className="py-16 px-4 bg-gradient-to-br from-muted/30 to-muted/60"
      >
        <div className="container mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between group-hover:text-primary transition-colors">
                      {project.title}
                      <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                        <Button
                          size="sm"
                          variant="ghost"
                          asChild
                          className="hover:scale-110 transition-transform"
                        >
                          <Link href={project.github}>
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          asChild
                          className="hover:scale-110 transition-transform"
                        >
                          <Link href={project.live}>
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10"></div>
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {/* <Link
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Email Me
                </Link> */}
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-transparent"
              >
                <Link
                  href="https://www.linkedin.com/in/muhammed-al-lami-09a6b6343/"
                  target="_blank"
                >
                  <Linkedin className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  LinkedIn
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-transparent"
              >
                <Link href="https://github.com/m74e" target="_blank">
                  <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  GitHub
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <footer className="py-8 px-4 border-t bg-muted/30 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Muhammed AL-Lami. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
