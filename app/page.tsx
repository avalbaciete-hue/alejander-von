import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, GraduationCap, Heart, Mail, User } from "lucide-react";

const sections = [
  {
    title: "About Me",
    href: "/about",
    icon: User,
    description: "Learn more about my background, story, and technical skillset.",
  },
  {
    title: "Education",
    href: "/education",
    icon: GraduationCap,
    description: "Explore my academic background, degrees, and key highlights.",
  },
  {
    title: "Hobbies & Interests",
    href: "/hobbies",
    icon: Heart,
    description: "Discover what I enjoy doing outside of coding and development.",
  },
  {
    title: "Contact Me",
    href: "/contact",
    icon: Mail,
    description: "Have a question, collaboration idea, or project in mind? Reach out.",
  },
];

const skills = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "Tailwind CSS",
  "Node.js & Express",
  "MySQL / Oracle",
  "Git & GitHub",
  "REST APIs & GraphQL",
  "Shadcn UI",
];

export default function Home() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome to DevPortfolio</h1>
          <p className="text-muted-foreground mt-1 max-w-2xl">
            Full-stack developer building clean, modern, and responsive web applications with Next.js, TypeScript, and Shadcn UI.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link href="/about" className={buttonVariants()}>
            About Me <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
            Contact Me
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link key={section.href} href={section.href} className="block">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Core Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}