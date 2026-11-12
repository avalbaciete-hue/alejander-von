import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";

const educationList = [
  {
    degree: "BS in Information Technology (2nd Year)",
    school: "Naga College Foundation, Inc.",
    period: "2025 - Present",
    description:
      "Currently a 2nd-year college student focusing on web development, programming fundamentals, database management, and modern software technologies.",
    highlights: [
      "Building responsive web applications with Next.js, TypeScript, and Tailwind CSS",
      "Developing strong foundations in programming, data structures, and database systems",
      "Active participant in IT laboratory projects and collaborative coding activities",
    ],
  },
  {
    degree: "Senior High School — HUMSS Strand",
    school: "Antipolo National High School",
    period: "2023 - 2025",
    description:
      "Completed the Humanities and Social Sciences (HUMSS) strand, strengthening communication, critical thinking, research, and teamwork skills.",
    highlights: [
      "Graduated under the Academic Track (HUMSS Strand)",
      "Honed public speaking, analytical writing, and problem-solving abilities",
    ],
  },
  {
    degree: "Junior High School",
    school: "Antipolo National High School",
    period: "2018 - 2023",
    description:
      "Completed secondary education with a solid academic foundation and active participation in school activities.",
    highlights: [
      "Completed Junior High School curriculum",
      "Built core competencies in mathematics, science, and basic computer literacy",
    ],
  },
];

export default function Education() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Education</h1>
        <p className="text-muted-foreground mt-1">
          Academic background and formal training.
        </p>
      </div>

      <div className="space-y-6">
        {educationList.map((edu) => (
          <Card key={edu.degree} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg text-primary mt-0.5">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold leading-tight">
                      {edu.degree}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {edu.school}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground sm:text-right">
                  {edu.period}
                </span>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {edu.description}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-sm font-semibold">
                  <Award className="h-4 w-4 text-primary" />
                  <span>Key Highlights</span>
                </div>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {edu.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}