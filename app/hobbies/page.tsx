import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skillset.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I&apos;m Alejander Von A. Abaciete, a 2nd-year BS in Information Technology student at Naga College Foundation, Inc. Since I took the HUMSS strand back in senior high school, shifting to IT and learning how to code was pretty challenging for me at first.
          </p>
          <p>
            I consider myself a slow learner, especially when dealing with new programming concepts. It usually takes me extra time and practice to understand how things work, so I just take things step by step and learn from my mistakes. Even if my pace is slower, staying consistent helped me keep up with my subjects and make the Dean&apos;s List in my second semester.
          </p>
          <p>
            Right now, I&apos;m focused on improving my web development skills using Next.js, TypeScript, and Tailwind CSS. When I&apos;m not studying or coding, I usually play badminton, visit local coffee shops, or relax with music and games.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
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