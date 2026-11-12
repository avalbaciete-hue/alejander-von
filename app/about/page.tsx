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
            My name is Alejander Von A. Abaciete, and I&apos;m a 2nd-year BS in Information Technology student at Naga College Foundation, Inc. Since I took the HUMSS strand in senior high school, shifting to an IT course was a big adjustment for me because I didn&apos;t have much background in coding.
          </p>
          <p>
            I consider myself a slow learner, especially when dealing with new programming topics. It usually takes me extra time and practice to understand how things work, so I just take things step by step and review my lessons until I get them. Staying consistent with my studies helped me keep up with my subjects and make the Dean&apos;s List during my second semester.
          </p>
          <p>
            Right now, I&apos;m practicing how to build websites using Next.js, TypeScript, and Tailwind CSS for my coursework. During my free time, I like playing badminton, visiting local coffee shops, playing games, or listening to music.
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