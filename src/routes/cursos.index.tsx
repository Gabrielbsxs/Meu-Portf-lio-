import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CourseCard } from "@/components/course-card";
import { categories, courses } from "@/data/courses";
import { profile } from "@/data/profile";

const title = `Todos os cursos — ${profile.name}`;
const description =
  "Conheça cursos e certificações em programação, dados, cloud e inteligência artificial.";

export const Route = createFileRoute("/cursos/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cursos,
});

function Cursos() {
  const [filter, setFilter] = useState<string>("Todos");
  const list = filter === "Todos" ? courses : courses.filter((c) => c.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-14 lg:py-20">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">Todos os cursos</p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
            Encontre o curso certo para o seu momento
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
            Explore as formações concluídas e consulte os certificados de cada curso. Filtre por
            área para comparar as opções.
          </p>
        </header>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 sm:mt-10 sm:flex-wrap" role="group" aria-label="Filtrar cursos por área">
          {["Todos", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-muted-foreground hover:bg-secondary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
          {list.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>

        {list.length === 0 && (
          <p className="mt-10 text-muted-foreground">Nenhum curso encontrado nessa área.</p>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
