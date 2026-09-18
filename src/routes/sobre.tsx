import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { profile } from "@/data/profile";

const title = `Sobre mim — ${profile.name}`;
const description =
  "Conheça minha trajetória, meus valores e como ajudo pessoas a evoluírem por meio de cursos práticos e humanos.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            width={1280}
            height={1280}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
          />

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">{profile.role}</p>
            <h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">{profile.name}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{profile.tagline}</p>

            {profile.bio.map((p) => (
              <p key={p} className="mt-4 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            <section aria-labelledby="valores" className="mt-10">
              <h2 id="valores" className="text-xl font-semibold text-foreground">
                Meus valores
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {profile.values.map((v) => (
                  <li key={v} className="rounded-full bg-accent-soft px-4 py-1.5 text-sm font-medium text-primary">
                    {v}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="skills" className="mt-10">
              <h2 id="skills" className="text-xl font-semibold text-foreground">
                Tecnologias que utilizo
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {profile.skills.map((s) => (
                  <li key={s} className="rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium text-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="especialidades" className="mt-10">
              <h2 id="especialidades" className="text-xl font-semibold text-foreground">
                Especialidades
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {profile.specialties.map((s) => (
                  <li key={s} className="rounded-xl bg-secondary px-4 py-3 text-sm text-secondary-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="experiencia" className="mt-10">
              <h2 id="experiencia" className="text-xl font-semibold text-foreground">
                Experiência e formação
              </h2>
              <ol className="mt-4 space-y-4 border-l border-border pl-5">
                {profile.experience.map((e) => (
                  <li key={e.title}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">{e.period}</p>
                    <p className="mt-1 font-semibold text-foreground">{e.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section aria-labelledby="objetivo" className="mt-10 surface-card p-6">
              <h2 id="objetivo" className="text-xl font-semibold text-foreground">
                O que busco
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{profile.objective}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {profile.interests.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/cursos"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Ver todos os cursos
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Falar comigo
              </a>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
